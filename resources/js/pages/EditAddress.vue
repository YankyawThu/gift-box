<template>
    <div class="py-4">
        <div class="flex flex-row my-5 px-4">
           <Link :href="$url+'/user/shipping-address'" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl text-white self-center">
                Edit Shipping Address
            </div>
        </div>
        <div class="px-4">
            <div class="mb-5">
                <div class="py-2">
                    <label for="" class="text_c1">Receiver</label>
                </div>
                <div class="border_grad2 before:rounded-xl">
                    <input type="text" v-model="address.name" class="p-4 w-full bg-transparent text-white focus:outline-none" placeholder="Enter Receiver Name">
                </div>
            </div>
            <div class="mb-5">
                <div class="py-2">
                    <label for="" class="text_c1">Phone Number</label>
                </div>
                <div class="border_grad2 before:rounded-xl">
                    <input type="text" v-model="address.phone" class="p-4 w-full bg-transparent text-white focus:outline-none" placeholder="Enter Phone Number">
                </div>
            </div>
            <div class="mb-5 grid grid-cols-2 gap-4">
                <div>
                    <div class="py-2">
                        <label for="" class="text_c1">Zone</label>
                    </div>
                    <div class="border_grad2 before:rounded-xl pr-2">
                        <select v-model="zone" @change="changeZone()" class="p-4 w-full bg-transparent text-white focus:outline-none">
                            <option :value="zone.id" v-for="(zone,i) in zones.data" :key="i">{{zone.name}}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div class="py-2">
                        <label for="" class="text_c1">Township</label>
                    </div>
                    <div class="border_grad2 before:rounded-xl pr-2">
                        <select v-model="address.township" class="p-4 w-full bg-transparent text-white focus:outline-none">
                            <option :value="township.id" v-for="(township,i) in townships" :key="i">{{township.name}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb-5">
                <div class="py-2">
                    <label for="" class="text_c1">Address</label>
                </div>
                <div class="border_grad2 before:rounded-xl">
                    <input type="text" v-model="address.address" class="p-4 w-full bg-transparent text-white focus:outline-none" placeholder="Enter Address">
                </div>
            </div>
        </div>
         <div class="absolute w-full bottom-10 px-4">
            <div class="py-3 btn_gradient rounded-full w-full text-white text-center" @click="submit()">Update</div>
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
    props: {
        zones: {
            type: Object
        },
        data: {
            type: Object
        }
    },
    data() {
        return {
            zone: '',
            townships: [],
            address: {
                name: this.$props.data.data.username,
                phone: this.$props.data.data.phone,
                township: this.$props.data.data.township.id,
                address: this.$props.data.data.address
            }
        }
    },
    methods: {
        back() {
            window.history.back()
        },
        changeZone() {
            axios.get(`/user/zones/${this.zone}/townships`)
                .then(res => {
                    this.townships = []
                    this.townships = res.data
                })
        },
        submit() {
            axios.post(`/user/shipping-address/${this.$props.data.data.id}/update`, {
                username: this.address.name,
                phone: this.address.phone,
                township: this.address.township,
                address: this.address.address
            }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>