<template>
    <div v-show="modelActive" class="boxModal">
        <div :class="modalFrame[index]" class="text-white">
            <div class="close-dataModal" @click="$emit('update:model-active', false)"><img :src="$asset+'/image/ui/Cross.svg'"></div>
            <div :class="index == 0 ? 'text-black' : 'text-white'">
                Select Shipping Address
                <div class="w-10 h-1 rounded-full" style="background: linear-gradient(97.86deg, #FF8D8D -38.38%, #F7FC0E 71.88%);"></div>
            </div>
            <div class="overflow-auto h-96 my-5">
                <div v-for="(address,i) in addresses" :key="i" class="border_grad2 flex flex-row p-4 my-3 before:rounded-xl">
                    <div class="grow pr-5 w-72">
                        <div class="break-words text-lg text_c2">{{address.username}}</div>
                        <div class="break-words text-sm" :class="index == 0 ? 'text-black' : 'text-white'">{{address.district}}</div>
                        <div class="text-gray-400 py-1 text-xs">Phone : {{address.phone}}</div>
                    </div>
                    <div class="flex-none self-center w-10"><input type="radio" v-model="select" :value="address.id" name="addressGroup" class="w-5 h-5"></div>
                </div>
            </div>
            <div class="btn_gradient py-2 text-sm text-center rounded-full text-white" @click="submit()">
                Continue
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    model: {
        prop: 'modelActive',
        event: 'update:model-active',
    },
    props: {
        modelActive: {
            type: Boolean,
        },
        prizes: {
            type: Array
        },
        index: ''
    },
    data() {
        return {
            addresses: [],
            select: '',
            errors: {},
            modalFrame: [
                'boxModal-content',
                'dataModal-content'
            ]
        }
    },
    watch: {
        modelActive: {
            handler() {
                axios.get('/user/shipping-address/get')
                    .then(res => {
                        this.addresses = [...res.data]
                    })
            }
        }
    },
    methods: {
        submit() {
            axios.post(`/shipment-apply`, {
                'addressId': this.select,
                'prizeIds': this.$props.prizes
            }).then(res => {
                this.$emit('update:model-active', false)
                this.$emit('alert')
                // location.reload()
            }).catch(error => {
                if(error.response.data.errors) {
                    this.errors = error.response.data.errors
                }
                else {
                    let message = []
                    message.push(error.response.data.message)
                    this.errors['message'] = message
                }
                this.$emit('validate', this.errors)
            })
        }
    }
}
</script>