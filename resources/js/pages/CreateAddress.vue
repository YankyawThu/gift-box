<template>
    <div class="py-4">
        <div class="flex flex-row my-5 px-4">
           <Link href="#" as="button" @click="back()">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl text-white self-center">
                Add Shipping Address
            </div>
        </div>
        <div class="px-4">
            <div class="mb-5">
                <div class="py-2">
                    <label for="" class="text_c1">Receiver</label>
                </div>
                <div class="border_grad2 before:rounded-xl">
                    <input type="text" class="p-4 w-full bg-transparent text-white focus:outline-none" placeholder="Enter Receiver Name">
                </div>
            </div>
            <div class="mb-5">
                <div class="py-2">
                    <label for="" class="text_c1">Phone Number</label>
                </div>
                <div class="border_grad2 before:rounded-xl">
                    <input type="text" class="p-4 w-full bg-transparent text-white focus:outline-none" placeholder="Enter Phone Number">
                </div>
            </div>
            <div class="mb-5">
                <div class="py-2">
                    <label for="" class="text_c1">Township</label>
                </div>
                <div class="border_grad2 before:rounded-xl">
                    <input type="text" class="p-4 w-full bg-transparent text-white focus:outline-none" placeholder="Enter Township">
                </div>
            </div>
            <div class="mb-5">
                <div class="py-2">
                    <label for="" class="text_c1">Address</label>
                </div>
                <div class="border_grad2 before:rounded-xl">
                    <input type="text" class="p-4 w-full bg-transparent text-white focus:outline-none" placeholder="Enter Address">
                </div>
            </div>
        </div>
         <div class="absolute w-full bottom-16 px-4">
            <Link :href="$url+'/'" method="post" as="button" class="py-3 btn_gradient rounded-full w-full text-white text-center">Add</Link>
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
        back() {
            window.history.back()
        },
    }
}
</script>