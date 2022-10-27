<template>
    <div class="box_detail h-auto py-4">
        <div class="flex justify-content-between pb-1">
            <div class="back self-center px-4">
                <img src="/image/ui/Back.svg">
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
        <div class="-mt-32 flex justify-around">
            <div></div>
            <div>
                <img src="/image/ui/Box.svg">
            </div>
            <div></div>
        </div>
        <div class="flex justify-around -mt-32">
            <div class="relative">
                <Link href="" as="button">
                    <img src="/image/ui/GetOneButton.svg">
                    <div class="absolute top-6 right-10 font-semibold">Get One</div>
                    <div class="absolute top-10 right-14">$ {{data.data.price}}</div>
                </Link>
            </div>
            <div class="relative">
                <img src="/image/ui/GetAllButton.svg">
                <div class="absolute top-6 right-14 font-semibold">Get Five</div>
                <div class="absolute top-10 right-16">$ {{data.data.price * 5}}</div>
            </div>
        </div>
        <div class="px-2 py-1 detail_itembox mx-4">
            <div class="flex justify-between pt-2 px-3">
                <div class="font-semibold text-lg">Product Preview</div>
                <div class="flex flex-row items-center trigger cursor-pointer">
                    <div class="px-1">Rules of Play</div>
                    <div >
                        <img src="/image/ui/Info.svg">
                    </div>
                </div>
                <rule />
            </div>
            <div v-for="(item, i) in data.data.items" :key="i" class="flex flex-wrap flex-row my-2 mx-1">
                <div class="box_detail_item_card">
                    <div class="box_detail_item_card_header">
                        <img src="/image/ui/supreme.svg" alt="">
                        <div class="item_precent">0.1 %</div>
                    </div>
                    <div class="box_detail_item_card_body">
                        <img src="/image/ui/IPhone-13.png" width="65" height="65" class="m-auto">
                    </div>
                    <div class="box_detail_item_card_footer text-center">
                        <div class="truncate px-2">12312312</div>
                        <div>({{item.price}})</div>
                    </div>
                </div>
                <div class="box_detail_item_card">
                    <div class="box_detail_item_card_header">
                        <img src="/image/ui/supreme.svg" alt="">
                        <div class="item_precent">0.1 %</div>
                    </div>
                    <div class="box_detail_item_card_body">
                        <img src="/image/ui/IPhone-13.png" width="65" height="65" class="m-auto">
                    </div>
                    <div class="box_detail_item_card_footer text-center">
                        <div class="truncate px-2">1231231212312312</div>
                        <div>({{item.price}})</div>
                    </div>
                </div>
                <div class="box_detail_item_card">
                    <div class="box_detail_item_card_header">
                        <img src="/image/ui/supreme.svg" alt="">
                        <div class="item_precent">0.1 %</div>
                    </div>
                    <div class="box_detail_item_card_body">
                        <img src="/image/ui/IPhone-13.png" width="65" height="65" class="m-auto">
                    </div>
                    <div class="box_detail_item_card_footer text-center">
                        <div class="truncate px-2">12312312</div>
                        <div>({{item.price}})</div>
                    </div>
                </div>
                <div class="box_detail_item_card">
                    <div class="box_detail_item_card_header">
                        <img src="/image/ui/supreme.svg" alt="">
                        <div class="item_precent">0.1 %</div>
                    </div>
                    <div class="box_detail_item_card_body">
                        <img src="/image/ui/IPhone-13.png" width="65" height="65" class="m-auto">
                    </div>
                    <div class="box_detail_item_card_footer text-center">
                        <div class="truncate px-2">1231231212312312</div>
                        <div>({{item.price}})</div>
                    </div>
                </div>
                <div class="box_detail_item_card">
                    <div class="box_detail_item_card_header">
                        <img src="/image/ui/supreme.svg" alt="">
                        <div class="item_precent">0.1 %</div>
                    </div>
                    <div class="box_detail_item_card_body">
                        <img src="/image/ui/IPhone-13.png" width="65" height="65" class="m-auto">
                    </div>
                    <div class="box_detail_item_card_footer text-center">
                        <div class="truncate px-2">12312312</div>
                        <div>({{item.price}})</div>
                    </div>
                </div>
                <div class="box_detail_item_card">
                    <div class="box_detail_item_card_header">
                        <img src="/image/ui/supreme.svg" alt="">
                        <div class="item_precent">0.1 %</div>
                    </div>
                    <div class="box_detail_item_card_body">
                        <img src="/image/ui/IPhone-13.png" width="65" height="65" class="m-auto">
                    </div>
                    <div class="box_detail_item_card_footer text-center">
                        <div class="truncate px-2">12312312</div>
                        <div>({{item.price}})</div>
                    </div>
                </div>
                <div class="box_detail_item_card">
                    <div class="box_detail_item_card_header">
                        <img src="/image/ui/supreme.svg" alt="">
                        <div class="item_precent">0.1 %</div>
                    </div>
                    <div class="box_detail_item_card_body">
                        <img src="/image/ui/IPhone-13.png" width="65" height="65" class="m-auto">
                    </div>
                    <div class="box_detail_item_card_footer text-center">
                        <div class="truncate px-2">12312312</div>
                        <div>({{item.price}})</div>
                    </div>
                </div>
                <div class="box_detail_item_card">
                    <div class="box_detail_item_card_header">
                        <img src="/image/ui/supreme.svg" alt="">
                        <div class="item_precent">0.1 %</div>
                    </div>
                    <div class="box_detail_item_card_body">
                        <img src="/image/ui/IPhone-13.png" width="65" height="65" class="m-auto">
                    </div>
                    <div class="box_detail_item_card_footer text-center">
                        <div class="truncate px-2">12312312</div>
                        <div>({{item.price}})</div>
                    </div>
                </div>
                <div class="box_detail_item_card">
                    <div class="box_detail_item_card_header">
                        <img src="/image/ui/supreme.svg" alt="">
                        <div class="item_precent">0.1 %</div>
                    </div>
                    <div class="box_detail_item_card_body">
                        <img src="/image/ui/IPhone-13.png" width="65" height="65" class="m-auto">
                    </div>
                    <div class="box_detail_item_card_footer text-center">
                        <div class="truncate px-2">12312312</div>
                        <div>({{item.price}})</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'
import modal from '../modal.js'
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
    computed: {
        itemTag(tag) {
            switch(tag) {
                case 'supreme': return '/image/ui/First.svg';
                case 'rare': return '/image/ui/Second.svg';
                case 'normal': return '/image/ui/Third.svg';
            }
        }
    },
    mounted() {
        modal()
    }
}
</script>