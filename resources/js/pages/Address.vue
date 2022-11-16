<template>
    <div class="p-4">
        <div class="flex flex-row my-5">
           <Link :href="$url+'/user'" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl text-white self-center">
                Shipping Address
            </div>
        </div>
        <div class="pb-20">
            <div v-for="(address,i) in data.data" :key="i" class="border_grad2 p-4 my-3 before:rounded-xl relative">
                <div class="pr-5">
                    <div class="break-words text-white text-lg text_c2">{{address.username}}</div>
                    <div class="break-words text-white text-sm w-72">{{address.district}}</div>
                    <div class="text-gray-400 py-1 text-sm">Phone : {{address.phone}}</div>
                </div>
                <div class="absolute w-24 right-3 bottom-4">
                    <Link :href="$url+'/user/shipping-address/'+address.id+'/detail'" as="button" class="inline-block"><img :src="$asset+'/image/ui/Edit.svg'" alt=""></Link>
                    <Link :href="$url+'/user/shipping-address/'+address.id+'/delete'" as="button" method="delete" class="inline-block"><img :src="$asset+'/image/ui/Delete.svg'"></Link>
                </div>
            </div>
        </div>
        <Link :href="$url+'/user/shipping-address/create'" class="btn_gradient fixed bottom-10 py-3 inset-x-5 text-center m-auto rounded-full text-white">
            Add Shipping Address
        </Link>
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'

export default {
    components: {
        Link
    },
    props: {
        data: {
            type: Object
        }
    },
    methods: {
        back() {
            window.history.back()
        },
    }
}
</script>