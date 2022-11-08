<template>
    <div class="box_detail h-auto py-4">
        <div class="flex justify-between pb-1">
            <div class="back self-center px-4">
                <Link href="/box" as="button"><img :src="$assetUrl+'image/ui/Back.svg'"></Link>
            </div>
            <div class="flex flex-row box_detail_target">
                <div class="self-center">
                    <img :src="$assetUrl+'image/ui/Icon.svg'">
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
        <div class="-mt-32">
            <img :src="$assetUrl+'image/ui/Box.svg'" class="m-auto">
        </div>
        <div class="flex justify-around -mt-32">
            <div class="relative">
                <Link :href="'/box/'+data.data.id+'/open/1'" as="button">
                    <img :src="$assetUrl+'image/ui/GetOneButton.svg'">
                    <div class="get_one font-semibold">Get One</div>
                    <div class="get_one_price top-10 right-14">$ {{data.data.price}}</div>
                </Link>
            </div>
            <div class="relative">
                <Link :href="'/box/'+data.data.id+'/open/5'" as="button">
                    <img :src="$assetUrl+'image/ui/GetAllButton.svg'">
                    <div class="get_one_right font-semibold">Get Five</div>
                    <div class="get_one_price_right top-10 right-16">$ {{data.data.price * 5}}</div>
                </Link>
            </div>
        </div>
        <div class="px-2 py-1 detail_itembox mx-4">
            <div class="flex justify-between pt-2 px-3">
                <div class="font-semibold text-lg">Product Preview</div>
                <div class="flex flex-row items-center" @click="ruleModalActive = !ruleModalActive">
                    <div class="px-1">Rules of Play</div>
                    <div >
                        <img :src="$assetUrl+'image/ui/Info.svg'">
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-around my-2 mx-1">
                <div v-for="(item, i) in data.data.items" :key="i" class="box_detail_item_card">
                    <div class="box_detail_item_card_header">
                        <img :src="$assetUrl+'image/ui/supreme.svg'" alt="">
                        <div class="item_precent">0.1 %</div>
                    </div>
                    <div class="box_detail_item_card_body">
                        <img :src="$assetUrl+'image/ui/IPhone-13.png'" width="65" height="65" class="m-auto">
                    </div>
                    <div class="box_detail_item_card_footer text-center">
                        <div class="truncate px-2">12312312</div>
                        <div>({{item.price}})</div>
                    </div>
                </div>
            </div>
        </div>
        <rule v-model="ruleModalActive" />
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'
import rule from './modals/Rule.vue'

export default {
    components: {
        Link,
        rule
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            ruleModalActive: false
        }
    },
    computed: {
        itemTag(tag) {
            switch(tag) {
                case 'supreme': return '/image/ui/First.svg';
                case 'rare': return '/image/ui/Second.svg';
                case 'normal': return '/image/ui/Third.svg';
            }
        }
    }
}
</script>
