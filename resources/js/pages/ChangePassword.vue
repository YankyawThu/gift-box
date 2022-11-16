<template>
    <div class="p-4">
        <div class="flex flex-row my-5">
           <Link :href="$url+'/user/set-up'" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl text-white self-center">
                Reset Password
            </div>
        </div>
        <div>
            <div class="text_c2 text-2xl mt-10 mb-3">
                Create New Password
            </div>
            <div class="text-white text-sm my-5">
                Your new password must be different from previous used passwords.
            </div>
        </div>
        <div>
            <div class="mb-5">
                <div class="py-2">
                    <label for="" class="text_c1">New Password</label>
                </div>
                <div class="border_grad2 before:rounded-xl">
                    <input type="password" v-model="newPassword" class="p-4 w-full bg-transparent text-white focus:outline-none" placeholder="Enter New Password">
                </div>
            </div>
            <div class="mb-5">
                <div class="py-2">
                    <label for="" class="text_c1">Confirm Password</label>
                </div>
                <div class="border_grad2 before:rounded-xl">
                    <input type="password" v-model="confirmPassword" class="p-4 w-full bg-transparent text-white focus:outline-none" placeholder="Enter Confirm Password">
                </div>
            </div>
        </div>
        <div class="py-10">
            <button type="submit" class="w-full py-4 btn_gradient text-center rounded-full text-white" @click="submit()">Reset Password</button>
        </div>
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'
import axios from 'axios'

export default {
    components: {
        Link
    },
    data() {
        return {
            newPassword: '',
            confirmPassword: ''
        }
    },
    methods: {
        submit() {
            axios.post('/user/change-password', {
                newPassword: this.newPassword,
                confirmNewPassword: this.confirmPassword
            }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>