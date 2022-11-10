<template>
    <div class="grid grid-cols-4 fixed w-full bg-white bottom-0 footer_nav text-gray-400">
        <Link :href="$url+'/box'" as="button"><div class="box text-lg p-3 text-center cursor-pointer" :class="{'nav_link_active' : box}"><img class="m-auto" :src="box ? $asset+'/image/ui/HomeActive.svg' : $asset+'/image/ui/Home.svg'"><div class="text-sm">Home</div></div></Link>
        <div class="text-lg p-3 text-center cursor-pointer"><img class="m-auto" :src="$asset+'/image/ui/Recycle.svg'"><div class="text-sm">Exchange</div></div>
        <div class="text-lg p-3 text-center cursor-pointer"><img class="m-auto" :src="$asset+'/image/ui/Wallet.svg'"><div class="text-sm">Wallet</div></div>
        <Link :href="$url+'/user'" as="button"><div class="text-lg p-3 text-center cursor-pointer" :class="{'nav_link_active' : user}"><img class="m-auto" :src="user ? $asset+'/image/ui/UserTagActive.svg' : $asset+'/image/ui/UserTag.svg'"><div class="text-sm">Profile</div></div></Link>
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'

export default {
    components: {
        Link
    },
    data() {
        return {
            user: false,
            box: false
        }
    },
    mounted() {
        var pathArray = window.location.pathname.split('/');
        switch(pathArray[1]) {
            case 'user': this.user = true; break;
            case 'box': this.box = true; break;
        }
    }
}
</script>
