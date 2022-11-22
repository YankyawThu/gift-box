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
        <div class="px-4">
            <div class="text-center pb-2 text_c2 text-sm">Select the Recharge Amount</div>
            <div class="before:rounded-xl py-7 text-center border_grad2 my-2 text-4xl font-bold text-white">
                {{amount}} Ks
            </div>
            <div class="flex flex-wrap justify-between my-3">
                <div class="w-28 h-12 text-center my-2 before:rounded-2xl rounded-2xl py-2 text-lg text-white" :class="[actives[i] ? 'amount_active' : 'border_grad1']" v-for="(price,i) in data" :key="i" @click="pick(price.amount, i)">
                    {{price.amount}} Ks
                </div>
            </div>
        </div>
        <div class="absolute w-full bottom-5 px-4">
            <div class="py-3 btn_gradient rounded-full w-full text-white text-center" @click="submit">Continue</div>
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
        data: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            amount: '',
            actives: [],
            success: false
        }
    },
    methods: {
        setFalse() {
            this.$props.data.forEach(item => {
                this.actives.push(false)
            });
        },
        pick(price,i) {
            this.amount = price
            this.actives = []
            this.setFalse()
            this.actives[i] = true
        },
        submit() {
            axios.post('/recharge-order', {
                amount: this.amount
            })
            .then((res) => {
                if(res.data == 1) {
                    this.success = true
                }
            })
        },
        back() {
            window.history.back()
        },
    },
    mounted() {
        this.amount = this.$props.data[0].amount
        this.actives[0] = true
    } 
}
</script>