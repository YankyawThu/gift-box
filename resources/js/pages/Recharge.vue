<template>
    <div class="py-4">
        <div class="flex flex-row my-5 px-4">
           <Link href="/box" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$assetUrl+'image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl self-center">
                Recharge
            </div>
        </div>
        <div class="px-4">
            <div class="text-center pb-2">Select the Recharge Amount</div>
            <div class="rounded-xl py-7 text-center border-2 border-blue-900 my-2 text-4xl font-bold">
                $ {{amount}}
            </div>
            <div class="flex flex-wrap justify-between my-3">
                <div class="w-28 h-12 text-center my-2 rounded-2xl py-2 text-lg" :class="[actives[i] ? 'amount_active text-white' : 'border-2 border-blue-900']" v-for="(price,i) in data" :key="i" @click="pick(price.amount, i)">
                    $ {{price.amount}}
                </div>
            </div>
        </div>
        <div class="absolute w-full bottom-16 px-4">
            <div class="py-3 btn_one rounded-full w-full text-white text-center" @click="submit">Continue</div>
        </div>
        <success-modal v-model="success" :modalAmount="amount">
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
        }
    },
    mounted() {
        this.amount = this.$props.data[0].amount
        this.actives[0] = true
    } 
}
</script>