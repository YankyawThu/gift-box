<template>
    <div class="box_detail h-full py-4">
        <div class="flex justify-between pb-1">
            <div class="back self-center px-4">
                <Link :href="$url+'/box/'+id" as="button"><img :src="$asset+'/image/ui/Back.svg'"></Link>
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
        <div class="box_wish text-center py-2 px-4">Save the wish value and redeem the happy wish prize</div>
        <div class="px-2 py-4 flex justify-between">
            <div></div>
            <div class="relative">
                <img :src="$asset+'/image/ui/Frame.svg'">
                <div class="grid grid-cols-3 absolute prize_container">
                    <div v-for="(prize,i) in prizes" :key="i" class="mx-3 prize_box">
                        <img :src="prizeInActive" :class="'prizeImage'+i" @click="prizeBoxSelect(i)">
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        <div class="flex justify-around">
            <div class="relative">
                <div @click="createOrder">
                    <img :src="$asset+'/image/ui/Button.svg'">
                    <div class="absolute top-3 right-16 font-semibold text-white text-lg">Open</div>
                </div>
            </div>
            <div class="relative" @click="createOrder">
                <div>
                    <img :src="$asset+'/image/ui/Button.svg'">
                    <div class="absolute top-3 right-16 font-semibold text-white text-lg">Open</div>
                </div>
            </div>
        </div>
        <order-modal v-model="orderModalActive" :order="order" @openBox="submit()"></order-modal>
        <transition name="bounce">
            <congratz-modal v-show="conModalActive" v-model="conModalActive" :prizes="winningPrizes"></congratz-modal>
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
import axios from 'axios'
import orderModal from './modals/Order.vue'
import congratzModal from './modals/Congratz.vue'

export default {
    components: {
        Link,
        orderModal,
        congratzModal
    },
    props: {
        id: '',
        time: ''
    },
    data() {
        return {
            prizeActive: this.$asset+'/image/ui/ActivePrize.svg',
            prizeInActive: this.$asset+'/image/ui/ShadowWithPrize.svg',
            num: 9,
            prizes: [],
            click: 0,
            order: {},
            orderModalActive: false,
            conModalActive: false,
            winningPrizes: []
        }
    },
    methods: {
        falseAllPrizes() {
            for(var j = 0; j < this.num; j++) {
                this.prizes.push(false)
            }
        },
        prizeActiveInActive(i) {
            var prizeImage = document.querySelector('.prizeImage'+i)
            if(this.prizes[i]) {
                this.prizes[i] = false
                prizeImage.setAttribute('src', this.prizeInActive)
            }
            else {
                this.prizes[i] = true
                prizeImage.setAttribute('src', this.prizeActive)
            }
            var count = this.prizes.filter(x => x==true).length
            this.click = count
        },
        prizeBoxSelect(i) {
            if(this.click < this.$props.time || this.prizes[i] == true) {
                this.prizeActiveInActive(i)
            }
            else {
                this.prizes.forEach((value,k) => {
                    var prizeImage = document.querySelector('.prizeImage'+k)
                    this.prizes[k] = false
                    prizeImage.setAttribute('src', this.prizeInActive)
                })
                this.prizeActiveInActive(i)
            }
        },
        animate() {
            var t = 500
            var rands = this.random()
            this.prizes.forEach((value,k) => {
                var prizeImage = document.querySelector('.prizeImage'+k)
                prizeImage.setAttribute('src', this.prizeInActive)
            })
            rands.forEach(rand => {
                this.roll(rand, t)
                t += 200
            })
        },
        roll(rand, t) {
            setTimeout(() => {
                var prizeImage = document.querySelector('.prizeImage'+rand)
                prizeImage.setAttribute('src', this.prizeActive)
            },t)
            setTimeout(() => {
                var prizeImage = document.querySelector('.prizeImage'+rand)
                prizeImage.setAttribute('src', this.prizeInActive)
            },t+200)
        },
        random() {
            var rands = []
            for(var i = 0; i < this.num; i++) {
                var rand = Math.floor(Math.random() * (this.num - 0) + 0)
                if(!rands.includes(rand)) {
                    rands.push(rand)
                }
            }
            return rands
        },
        createOrder() {
            axios.post(`/box/${this.$props.id}/create-order/${this.$props.time}`)
                .then(res => {
                    this.orderModalActive = true
                    this.order = res.data
                })
        },
        submit() {
            this.modalActive = false
            this.animate()
            axios.post(`/box/${this.$props.id}/open-box`, {
                'boxId': this.$props.id,
                'times': this.$props.time,
                'orderId': this.order.orderId
            })
            .then(res => {
                this.winningPrizes = res.data
                setTimeout(() => {
                    this.conModalActive = true
                },1800)
            })
        }
    },
    mounted() {
        this.falseAllPrizes()
    }
}
</script>