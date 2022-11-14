<template>
    <div class="p-4">
        <div class="flex flex-row my-5">
           <Link href="#" as="button" @click="back()">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl text-white self-center">
                Shipping Address
            </div>
        </div>
        <div class="pb-20">
            <div v-for="(address,i) in data.data" :key="i" class="border_grad2 flex flex-row p-4 my-3 before:rounded-xl">
                <div class="grow pr-5 w-72">
                    <div class="break-words text-white">{{address.district}}</div>
                    <div class="text-gray-400 py-1 text-sm">Phone : {{address.phone}}</div>
                </div>
                <div class="flex-none self-end w-10"><img :src="$asset+'/image/ui/Edit.svg'" alt=""></div>
            </div>
        </div>
        <div class="btn_gradient fixed bottom-10 py-3 inset-x-5 text-center m-auto rounded-full text-white">
            Add Shipping Address
        </div>
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