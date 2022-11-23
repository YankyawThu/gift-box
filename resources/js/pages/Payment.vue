<template>
    <div class="py-4">
        <div class="flex flex-row my-5 px-4">
           <Link href="#" as="button" @click="back()">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl self-center text-white">
                Recharge
            </div>
        </div>
        <div class="text_c2 px-4">
            Select the Payment Method you want to use
        </div>
        <div v-for="(pay,i) in data" :key="i" class="border_grad2 flex flex-row p-4 my-3 before:rounded-xl">
            <div class="self-center w-10"><input type="radio" v-model="select" value="" name="payGroup" class="w-5 h-5"></div>
        </div>
        <div class="px-4">
            <input type="file" @change="uploadAvatar($event)">
        </div>
        <div class="absolute w-full bottom-5 px-4">
            <button class="py-3 btn_gradient rounded-full w-full text-white text-center" @click="submit()">Continue</button>
        </div>
        <success-modal v-model="success" :modalAmount="amount" :index="0">
        </success-modal>
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'
import axios from 'axios'
import successModal from './modals/Success.vue'

export default {
    components: {
        Link,
        successModal
    },
    props: {
        amount: '',
        data: ''
    },
    data() {
        return {
            select: '',
            success: false,
            file: ''
        }
    },
    methods: {
        submit() {
            let formData = new FormData()
            formData.append('payId', this.select)
            formData.append('amount', this.$props.amount)
            formData.append('voucher', this.file)
            axios.post('/recharge-order', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                if(res.data == 1) {
                    this.success = true
                }
            })
        },
        back() {
            window.history.back()
        },
        uploadAvatar(event) {
            this.file = event.target.files[0]
        },
    }
}
</script>