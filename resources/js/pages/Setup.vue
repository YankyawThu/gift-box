<template>
    <div class="py-4">
        <div class="flex flex-row my-5 px-4">
           <Link :href="$url+'/user'" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl self-center">
                Set Up
            </div>
        </div>
        <div class="order_card flex flex-col rounded-xl m-4">
            <div class="flex justify-between py-4 mx-4 text-sm border-b">
                <div>Avatar</div>
                <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
            </div>
            <div class="flex justify-between py-4 mx-4 text-sm border-b">
                <div>Gender</div>
                <div class="self-center">Male</div>
            </div>
            <div class="flex justify-between py-4 mx-4 text-sm border-b">
                <div>Username</div>
                <div class="self-center" style="color: #D9761A;">Thinzar Wint Kyaw</div>
            </div>
            <div class="flex justify-between py-4 mx-4 text-sm border-b">
                <div>Nickname</div>
                <div class="self-center" style="color: #D9761A;">Thinzar</div>
            </div>
            <div class="flex justify-between py-4 mx-4 text-sm border-b">
                <div>Phone</div>
                <div class="self-center" style="color: #D9761A;">+959123123123</div>
            </div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Change Password</div>
                <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
            </div>
        </div>
        <div class="absolute w-full bottom-16 px-4">
            <Link href="/logout" method="post" as="button" class="py-3 btn_one rounded-full w-full text-white text-center" @click="logout()">Sign Out</Link>
        </div>
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'

export default {
    components: {
        Link
    },
    methods: {
        logout() {
            location.reload()
        }
    }
}
</script>