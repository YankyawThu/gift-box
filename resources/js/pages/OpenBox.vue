<template>
    <div class="box_detail h-screen py-4">
        <div class="flex justify-between pb-1">
            <div class="back self-center px-4">
                <Link :href="'/box/'+id" as="button"><img src="/image/ui/Back.svg"></Link>
            </div>
            <div class="flex flex-row box_detail_target">
                <div class="self-center">
                    <img src="/image/ui/Icon.svg">
                </div>
                <div class="py-1 px-2 box_detail_target_label">
                    Lucky Draw
                </div>
            </div>
            <div></div>
        </div>
        <div class="box_detail_title text-center pt-2">
            Magic BlindBox
        </div>
        <div class="blind_box_underline my-1 w-56 mx-auto"></div>
        <div class="box_wish text-center py-2 px-4">Save the wish value and redeem the happy wish prize</div>
        <div class="px-2 py-4 flex justify-between">
            <div></div>
            <div class="relative">
                <img src="/image/ui/Frame.svg">
                <div class="grid grid-cols-3 absolute prize_container">
                    <div v-for="i in 9" :key="i" class="mx-3 prize_box">
                        <img src="/image/ui/ShadowWithPrize.svg">
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        <div class="flex justify-around">
            <div class="relative">
                <Link :href="'/box/'+id+'/create-order/'+time" as="button">
                    <img src="/image/ui/Button.svg">
                    <div class="absolute top-3 right-16 font-semibold text-white text-lg">Open</div>
                </Link>
            </div>
            <div class="relative">
                <Link :href="'/box/'+id+'/create-order/'+time" as="button">
                    <img src="/image/ui/Button.svg">
                    <div class="absolute top-3 right-16 font-semibold text-white text-lg">Open</div>
                </Link>
            </div>
        </div>
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'

export default {
    components: {
        Link,
    },
    props: {
        id: '',
        time: ''
    }
}
</script>