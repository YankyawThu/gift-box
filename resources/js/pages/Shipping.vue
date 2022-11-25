<template>
    <div class="p-4">
        <div class="flex flex-row my-5">
           <Link href="#" as="button" @click="back()">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl self-center text-white">
                {{__('Shipping')}}
            </div>
        </div>
        <div id="tabs">
            <div class="grid grid-cols-3 text-center" role="tablist" aria-label="Free HTML Tabs">
                <div class="py-2" role="tab" :aria-selected="[tab == 1 ? true : false]" aria-controls="panel-delivered" id="tab-delivered" :tabindex="[tab == 1 ? 0 : -1]" @click="fetchDelivered()">
                    {{__('To be delivered')}}
                </div>
                <div class="py-2" role="tab" :aria-selected="[tab == 2 ? true : false]" aria-controls="panel-going" id="tab-going" :tabindex="[tab == 2 ? 0 : -1]" @click="fetchGoing()">
                    {{__('On going')}}
                </div>
                <div class="py-2" role="tab" :aria-selected="[tab == 3 ? true : false]" aria-controls="panel-completed" id="tab-completed" :tabindex="[tab == 3 ? 0 : -1]" @click="fetchCompleted()">
                    {{__('Completed')}}
                </div>
            </div>
            <div class="divider"></div>
            <div class="my-4">
                <section id="panel-delivered" role="tabpanel" tabindex="0" aria-labelledby="tab-delivered" class="overflow-auto px-1">
                    <div v-for="(prize,i) in toBeDelivered" :key="i" class="border_grad2_show flex justify-between my-3 p-2 before:rounded-lg rounded-lg w-full bg_grad1">
                        <div class="flex flex-row">
                            <div class="p-2 rounded mr-3"><img :src="prize.item.image" width="50" height="50"></div>
                            <div class="self-center">
                                <div class="text-sm truncate text-white w-36">{{prize.item.name}}</div>
                                <div class="text-sm py-1 text_gradient">{{prize.item.price}} {{__('Ks')}}</div>
                                <div class="text-xs text-gray-400">{{__('Time')}} : {{prize.time}}</div>
                            </div>
                        </div>
                        <div>
                            <div class="border_grad2_show before:rounded-full rounded-full px-3 py-2 text-xs mt-1 bg_grad" style="color: #CE25F0;">{{__('To be delivered')}}</div>
                        </div>
                    </div>
                </section>
                <section id="panel-going" role="tabpanel" tabindex="0" aria-labelledby="tab-going" hidden class="overflow-auto px-1">
                    <div v-for="(prize,i) in onGoing" :key="i" class="border_grad2_show flex justify-between my-3 p-2 before:rounded-lg rounded-lg w-full bg_grad1">
                        <div class="flex flex-row">
                            <div class="p-2 rounded mr-3"><img :src="prize.item.image" width="50" height="50"></div>
                            <div class="self-center">
                                <div class="text-sm truncate text-white w-36">{{prize.item.name}}</div>
                                <div class="text-sm py-1 text_gradient">{{prize.item.price}} {{__('Ks')}}</div>
                                <div class="text-xs text-gray-400">{{__('Time')}} : {{prize.time}}</div>
                            </div>
                        </div>
                        <div>
                            <div class="border_grad2_show before:rounded-full rounded-full px-3 py-2 text-xs mt-1 bg_grad" style="color: #FFC83C;">{{__('On going')}}</div>
                        </div>
                    </div>
                </section>
                <section id="panel-completed" role="tabpanel" tabindex="0" aria-labelledby="tab-completed" hidden class="overflow-auto px-1">
                    <div v-for="(prize,i) in completed" :key="i" class="border_grad2_show flex justify-between my-3 p-2 before:rounded-lg rounded-lg w-full bg_grad1">
                        <div class="flex flex-row">
                            <div class="p-2 rounded mr-3"><img :src="prize.item.image" width="50" height="50"></div>
                            <div class="self-center">
                                <div class="text-sm truncate text-white w-36">{{prize.item.name}}</div>
                                <div class="text-sm py-1 text_gradient">{{prize.item.price}} {{__('Ks')}}</div>
                                <div class="text-xs text-gray-400">{{__('Time')}} : {{prize.time}}</div>
                            </div>
                        </div>
                        <div>
                            <div class="border_grad2_show before:rounded-full rounded-full px-3 py-2 text-xs mt-1 bg_grad" style="color: #3BBE44;">{{__('Completed')}}</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'
import axios from 'axios'
import tab from '../tab.js'

export default {
    components: {
        Link
    },
    props: {
        num: ''
    },
    data() {
        return {
            page: 1,
            lastPage: 1,
            toBeDelivered: [],
            onGoing: [],
            completed: [],
            deliverStatus: 1,
            goingStatus: 2,
            completeStatus: 3,
            deliveredEnd: false,
            goingEnd: false,
            completedEnd: false,
            tab: this.num
        }
    },
    methods: {
        fetch(page, status) {
            axios.get(`/order-list?page=${page}`,{
                params: {
                    status: status
                }
            }).then(res => {
                if(status == this.deliverStatus) {
                    this.toBeDelivered.push(...res.data.data)
                    this.lastPage = res.data.pagination.total_pages
                    if(this.page <= this.lastPage) {
                        this.page++
                    }
                    else this.deliveredEnd = true
                }
                if(status == this.goingStatus) {
                    this.onGoing.push(...res.data.data)
                    this.lastPage = res.data.pagination.total_pages
                    if(this.page <= this.lastPage) {
                        this.page++
                    }
                    else this.goingEnd = true
                }
                if(status == this.completeStatus) {
                    this.completed.push(...res.data.data)
                    this.lastPage = res.data.pagination.total_pages
                    if(this.page <= this.lastPage) {
                        this.page++
                    }
                    else this.completedEnd = true
                }
            })
        },
        reset() {
            this.page = 1
            this.lastPage = 1
        },
        fetchDelivered() {
            this.reset()
            this.tab = 1
            if(this.toBeDelivered.length == 0) {
                this.fetch(this.page, this.deliverStatus)
            }
        },
        fetchGoing() {
            this.reset()
            this.tab = 2
            if(this.onGoing.length == 0) {
                this.fetch(this.page, this.goingStatus)
            }
        },
        fetchCompleted() {
            this.reset()
            this.tab = 3
            if(this.completed.length == 0) {
                this.fetch(this.page, this.completeStatus)
            }
        },
        back() {
            window.history.back()
        },
    },
    mounted() {
        tab()
        this.fetch(this.page, this.tab)
        var delivered = document.querySelector("#panel-delivered");
        delivered.onscroll = () => {
            var isEnd = delivered.scrollTop + delivered.clientHeight >= delivered.scrollHeight - 1;
            if(isEnd && !this.deliveredEnd) {
                this.fetch(this.page, this.deliverStatus)
            }
        }
        var going = document.querySelector("#panel-going");
        going.onscroll = () => {
            var isEnd = going.scrollTop + going.clientHeight >= going.scrollHeight - 1;
            if(isEnd && !this.goingEnd) {
                this.fetch(this.page, this.goingStatus)
            }
        }
        var completed = document.querySelector("#panel-completed");
        completed.onscroll = () => {
            var isEnd = completed.scrollTop + completed.clientHeight >= completed.scrollHeight - 1;
            if(isEnd && !this.completedEnd) {
                this.fetch(this.page, this.completeStatus)
            }
        }
    }
}
</script>