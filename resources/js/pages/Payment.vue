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
        <div class="px-4">
            <div v-for="(pay,i) in data" :key="i" class="border_grad2 flex px-4 my-3 before:rounded-xl">
                <div class="text-white font-bold grow flex-none">
                    <label class="block w-full py-6" :for="'radioChecked'+i">
                        {{pay.name}}
                    </label>
                </div>
                <div class="self-center w-12 text-right"><input type="radio" v-model="select" :value="pay.id" name="payGroup" class="w-5 h-5" :id="'radioChecked'+i"></div>
            </div>
        </div>
        <div class="p-4 flex" @click="fileUpload()">
            <input id="file" type="file" @change="uploadAvatar($event)" hidden>
            <div class="bg-white inline-block rounded-lg mr-3">
                <img :src="$asset+'/image/ui/Union.svg'" class="p-3">
            </div>
            <div class="text_c1 self-center">Attach File</div>
        </div>
        <div v-if="file" class="px-2">
            <img :src="$asset+'/image/ui/Attach.svg'" class="inline-block p-2">
            <span class="text-gray-400">{{file.name}}</span>
            <img :src="$asset+'/image/ui/DeleteMark.svg'" class="ml-3 inline-block p-2" @click="removeFileUpload()">
        </div>
        <div class="absolute w-full bottom-5 px-4">
            <button class="py-3 btn_gradient rounded-full w-full text-white text-center" @click="submit()">Continue</button>
        </div>
        <success-modal v-model="success" :modalAmount="amount" :index="0">
        </success-modal>
        <validate-alert v-model="errorModal" :errors="errors"></validate-alert>
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
            file: '',
            errors: {},
            errorModal: false,
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
            }).catch(error => {
                if(error.response.data.errors) {
                    this.errors = error.response.data.errors
                }
                else {
                    let message = []
                    message.push(error.response.data.message)
                    this.errors['message'] = message
                }
                this.errorModal = true
            })
        },
        back() {
            window.history.back()
        },
        uploadAvatar(event) {
            if(event.target.files[0] != undefined) {
                this.file = event.target.files[0]
            }
        },
        fileUpload() {
            document.getElementById('file').click()
        },
        removeFileUpload() {
            this.file = ''
        }
    }
}
</script>