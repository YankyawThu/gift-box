<template>
    <div class="grid grid-cols-4 fixed w-full bg-white bottom-0 footer_nav text-gray-400">
        <Link :href="$url+'/box'" as="button"><div class="box text-lg p-3 text-center cursor-pointer" :class="{'nav_link_active' : box}"><img class="m-auto" :src="box ? $asset+'/image/ui/HomeActive.svg' : $asset+'/image/ui/Home.svg'"><div class="text-sm">{{__('Home')}}</div></div></Link>
        <Link :href="$url+'/exchange'" as="button"><div class="text-lg p-3 text-center cursor-pointer" :class="{'nav_link_active' : exchange}"><img class="m-auto" :src="exchange ? $asset+'/image/ui/RecycleActive.svg' : $asset+'/image/ui/Recycle.svg'"><div class="text-sm">{{__('Exchange')}}</div></div></Link>
        <Link :href="$url+'/wallet'" as="button"><div class="text-lg p-3 text-center cursor-pointer" :class="{'nav_link_active' : wallet}"><img class="m-auto" :src="wallet ? $asset+'/image/ui/WalletActive.svg' : $asset+'/image/ui/Wallet.svg'"><div class="text-sm">{{__('Wallet')}}</div></div></Link>
        <Link :href="$url+'/user'" as="button"><div class="text-lg p-3 text-center cursor-pointer" :class="{'nav_link_active' : user}"><img class="m-auto" :src="user ? $asset+'/image/ui/UserTagActive.svg' : $asset+'/image/ui/UserTag.svg'"><div class="text-sm">{{__('Profile')}}</div></div></Link>
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
            box: false,
            exchange: false,
            wallet: false
        }
    },
    mounted() {
        var pathArray = window.location.pathname.split('/');
        if(pathArray.includes('box')) {
            this.box = true
        }
        if(pathArray.includes('user')) {
            this.user = true
        }
        if(pathArray.includes('exchange')) {
            this.exchange = true
        }
        if(pathArray.includes('wallet')) {
            this.wallet = true
        }
    }
}
</script>
