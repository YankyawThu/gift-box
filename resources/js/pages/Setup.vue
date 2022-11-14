<template>
    <div class="py-4">
        <div class="flex flex-row my-5 px-4">
           <Link :href="$url+'/user'" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl text-white self-center">
                Set Up
            </div>
        </div>
        <div class="border_grad2 order_card flex flex-col before:rounded-xl m-4">
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Avatar</div>
                <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Gender</div>
                <div class="self-center">Male</div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Username</div>
                <div class="self-center text_c2">Thinzar Wint Kyaw</div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Nickname</div>
                <div class="self-center text_c2">Thinzar</div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Phone</div>
                <div class="self-center text_c2">+959123123123</div>
            </div>
            <div class="divider mx-4"></div>
            <div class="flex justify-between py-4 mx-4 text-sm">
                <div>Change Password</div>
                <div class="self-center"><img :src="$asset+'/image/ui/Vector.svg'"></div>
            </div>
        </div>
        <div class="absolute w-full bottom-16 px-4">
            <Link :href="$url+'/logout'" method="post" as="button" class="py-3 btn_gradient rounded-full w-full text-white text-center" @click="logout()">Sign Out</Link>
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