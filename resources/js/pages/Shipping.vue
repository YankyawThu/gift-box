<template>
    <div class="p-4">
        <div class="flex flex-row my-5">
           <Link href="/box" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img src="/image/ui/BackArrow.svg">
                </div>
            </Link>
            <div class="font-bold text-xl self-center">
                Shipping
            </div>
        </div>

        <div id="tabs">
            <div class="grid grid-cols-3 text-center border-b" role="tablist" aria-label="Free HTML Tabs">
                <div class="py-2" role="tab" aria-selected="true" aria-controls="panel-delivered" id="tab-delivered" tabindex="0" @click="fetchDelivered()">
                    To be delivered
                </div>
                <div class="py-2" role="tab" aria-selected="false" aria-controls="panel-going" id="tab-going" tabindex="-1" @click="fetchGoing()">
                    On going
                </div>
                <div class="py-2" role="tab" aria-selected="false" aria-controls="panel-completed" id="tab-completed" tabindex="-1" @click="fetchCompleted()">
                    Completed
                </div>
            </div>
            <div class="my-4">
                <section id="panel-delivered" role="tabpanel" tabindex="0" aria-labelledby="tab-delivered" class="overflow-auto px-1">
                    <div v-for="(prize,i) in toBeDelivered" :key="i" class="flex justify-between my-3 p-2 rounded-lg bg-white w-full" style="box-shadow: 1px 2px 4px rgba(38, 39, 60, 0.1);">
                        <div class="flex flex-row">
                            <div class="bg-gray-100 p-2 rounded mr-3"><img :src="prize.item.image" width="50" height="50"></div>
                            <div class="self-center">
                                <div class="text-sm truncate w-36">{{prize.item.name}}</div>
                                <div class="text-sm py-1 text_gradient">$ {{prize.item.price}} {{prize.id}}</div>
                                <div class="text-xs text-gray-400">Time : {{prize.time}}</div>
                            </div>
                        </div>
                        <div>
                            <div class="rounded-full px-3 py-1 text-xs bg-gray-100 mt-1" style="color: #D9761A;">To be delivered</div>
                        </div>
                    </div>
                </section>
                <section id="panel-going" role="tabpanel" tabindex="0" aria-labelledby="tab-going" hidden class="overflow-auto px-1">
                    <div v-for="(prize,i) in onGoing" :key="i" class="flex justify-between my-3 p-2 rounded-lg bg-white w-full" style="box-shadow: 1px 2px 4px rgba(38, 39, 60, 0.1);">
                        <div class="flex flex-row">
                            <div class="bg-gray-100 p-2 rounded mr-3"><img :src="prize.item.image" width="50" height="50"></div>
                            <div class="self-center">
                                <div class="text-sm truncate w-36">{{prize.item.name}}</div>
                                <div class="text-sm py-1 text_gradient">$ {{prize.item.price}} {{prize.id}}</div>
                                <div class="text-xs text-gray-400">Time : {{prize.time}}</div>
                            </div>
                        </div>
                        <div>
                            <div class="rounded-full px-3 py-1 text-xs bg-gray-100 mt-1" style="color: #D9761A;">On going</div>
                        </div>
                    </div>
                </section>
                <section id="panel-completed" role="tabpanel" tabindex="0" aria-labelledby="tab-completed" hidden class="overflow-auto px-1">
                    <div v-for="(prize,i) in completed" :key="i" class="flex justify-between my-3 p-2 rounded-lg bg-white w-full" style="box-shadow: 1px 2px 4px rgba(38, 39, 60, 0.1);">
                        <div class="flex flex-row">
                            <div class="bg-gray-100 p-2 rounded mr-3"><img :src="prize.item.image" width="50" height="50"></div>
                            <div class="self-center">
                                <div class="text-sm truncate w-36">{{prize.item.name}}</div>
                                <div class="text-sm py-1 text_gradient">$ {{prize.item.price}}</div>
                                <div class="text-xs text-gray-400">Time : {{prize.time}}</div>
                            </div>
                        </div>
                        <div>
                            <div class="rounded-full px-3 py-1 text-xs bg-gray-100 mt-1" style="color: #D9761A;">Completed</div>
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
            completedEnd: false
        }
    },
    methods: {
        fetch(page, status) {
            axios.get(`order-list?page=${page}`,{
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
            if(this.toBeDelivered.length == 0) {
                this.fetch(this.page, this.deliverStatus)
            }
        },
        fetchGoing() {
            this.reset()
            if(this.onGoing.length == 0) {
                this.fetch(this.page, this.goingStatus)
            }
        },
        fetchCompleted() {
            this.reset()
            if(this.completed.length == 0) {
                this.fetch(this.page, this.completeStatus)
            }
        }
    },
    mounted() {
        tab()
        this.fetchDelivered()
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