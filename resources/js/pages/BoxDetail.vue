<template>
    <div class="box_detail h-auto py-4">
        <div class="flex justify-between pb-1 mt-5">
            <div class="self-center px-4">
                <Link :href="$url+'/tide-play'" as="button"><img :src="$asset+'/image/ui/Back.svg'"></Link>
            </div>
            <div class="flex flex-row box_detail_target">
                <div class="self-center">
                    <img :src="$asset+'/image/ui/Icon.svg'">
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
        <div class="box_wish text-center py-2 px-10">Save the wish value and redeem the happy wish prize</div>
        <div class="-mt-36">
            <img :src="$asset+'/image/ui/Box.svg'" class="m-auto">
        </div>
        <div class="flex justify-around -mt-32">
            <div class="relative">
                <div @click="createOrder(1)">
                    <img :src="$asset+'/image/ui/GetOneButton.svg'">
                    <div class="get_one font-semibold">Get One</div>
                    <div class="get_one_price top-10 right-14 text-center">{{data.data.price}} Ks</div>
                </div>
            </div>
            <div class="relative">
                <div @click="createOrder(5)">
                    <img :src="$asset+'/image/ui/GetAllButton.svg'">
                    <div class="get_one_right font-semibold">Get Five</div>
                    <div class="get_one_price_right top-10 right-16 text-center">{{data.data.price * 5}} Ks</div>
                </div>
            </div>
        </div>
        <div class="px-2 py-1 detail_itembox mx-4">
            <div class="flex justify-between pt-2 px-3">
                <div class="font-semibold text-lg">Product Preview</div>
                <div class="flex flex-row items-center" @click="ruleModalActive = !ruleModalActive">
                    <div class="px-1">Rules of Play</div>
                    <div >
                        <img :src="$asset+'/image/ui/Info.svg'">
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-around my-2 mx-1">
                <div v-for="(item, i) in data.data.items" :key="i" class="box_detail_item_card">
                    <div class="box_detail_item_card_header">
                        <img :src="itemTag(item.tag)" alt="">
                        <div class="item_precent">0.1 %</div>
                    </div>
                    <div class="box_detail_item_card_body">
                        <img :src="$asset+item.image" width="65" height="65" class="m-auto">
                    </div>
                    <div class="box_detail_item_card_footer text-center">
                        <div class="truncate px-2" style="font-size:12px;">{{item.name}}</div>
                        <div class="pb-1" style="font-size:10px;">({{item.price}} Ks)</div>
                    </div>
                </div>
            </div>
        </div>
        <rule v-model="ruleModalActive" />
        <order-modal v-model="orderModalActive" :order="order" @openBox="submit()"></order-modal>
        <address-modal v-model="addressModalActive" :prizes="prizeIds" :index="0" @alert="create=true" @validate="validate"></address-modal>
        <validate-alert v-model="errorModal" :errors="errors"></validate-alert>
        <create-alert v-model="create"></create-alert>
        <transition name="bounce">
            <congratz-modal v-show="conModalActive" v-model="conModalActive" :prizes="winningPrizes" @showAddress="showAddress" @alert="create=true"></congratz-modal>
        </transition>
    </div>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.6s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<script>

import {Link} from '@inertiajs/inertia-vue'
import rule from './modals/Rule.vue'
import congratzModal from './modals/Congratz.vue'
import orderModal from './modals/Order.vue'
import axios from 'axios'
import addressModal from './modals/Address.vue'

export default {
    components: {
        Link,
        rule,
        orderModal,
        congratzModal,
        addressModal
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            ruleModalActive: false,
            order: {},
            orderModalActive: false,
            times: '',
            conModalActive: false,
            winningPrizes: [],
            prizeIds: [],
            errors: {},
            errorModal: false,
            create: false,
            addressModalActive: false
        }
    },
    methods: {
        back() {
            window.history.back()
        },
        itemTag(tag) {
            switch(tag) {
                case 'supreme': return this.$asset+'/image/ui/First.svg';
                case 'rare': return this.$asset+'/image/ui/Second.svg';
                case 'normal': return this.$asset+'/image/ui/Third.svg';
            }
        },
        createOrder(time) {
            this.times = time
            axios.post(`/box/${this.$props.data.data.id}/create-order/${time}`)
                .then(res => {
                    this.orderModalActive = true
                    this.order = res.data
                })
        },
        submit() {
            if(!this.order.coinNotEnough) {
                axios.post(`/box/${this.$props.data.data.id}/open-box`, {
                    'boxId': this.$props.data.data.id,
                    'times': this.times,
                    'orderId': this.order.orderId
                })
                .then(res => {
                    this.winningPrizes = res.data
                    setTimeout(() => {
                        this.conModalActive = true
                    },1000)
                })
                .catch(error => {
                    let message = []
                    message.push(error.response.data.message)
                    this.errors['message'] = message
                    this.errorModal = true
                }) 
            }
            else location.replace(this.$url+'/recharge')
        },
        validate(data) {
            this.errors = data
            this.errorModal = true
        },
        showAddress(ids) {
            this.prizeIds = ids
            this.addressModalActive = true
        }
    },
}
</script>
