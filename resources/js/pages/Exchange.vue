<template>
    <div class="h-screen">
        <main class="pb-20">
            <div class="flex justify-between pt-6 pb-4 px-4">
                <div class="self-center font-bold text-lg text-white">
                    My Box Cabinet
                    <div class="w-10 h-1 rounded-full" style="background: linear-gradient(97.86deg, #FF8D8D -38.38%, #F7FC0E 71.88%);"></div>
                </div>
                <div class="">
                    <img :src="$asset+'/image/ui/Service.svg'">
                </div>
            </div>
            <div id="tabs">
                <div class="grid grid-cols-2 text-center mx-4" role="tablist" aria-label="Free HTML Tabs">
                    <div class="py-2" role="tab" aria-selected="true" aria-controls="panel-pending" id="tab-pending" tabindex="0" @click="fetchPending()">
                        Pending Delivery
                    </div>
                    <div class="py-2" role="tab" aria-selected="false" aria-controls="panel-recycle" id="tab-recycle" tabindex="-1" @click="fetchRecycle()">
                        Recycled
                    </div>
                </div>
                <div class="divider"></div>
                <div class="my-2">
                    <section id="panel-pending" role="tabpanel" tabindex="0" aria-labelledby="tab-pending" class="overflow-auto pb-16">
                        <div class="flex justify-between my-4 px-4">
                            <div></div>
                            <div class="form-check flex flex-row">
                                <div>
                                    <input class="form-check-input h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" v-model="selectAll" id="allChecked">
                                </div>
                                <div class="">
                                    <label class="form-check-label text_c2 text-gray-800" for="allChecked">
                                        Select All
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div v-for="(prize,i) in pending" :key="i" class="flex flex-row px-4">
                            <div class="self-center mr-3">
                                <input type="checkbox" class="w-4 h-4" v-model="prizeIds[i]" @click="tick(i)">
                            </div>
                            <div class="border_grad2_show flex flex-row before:rounded-lg my-3 p-2 w-full bg_grad1">
                                <div class="p-2 rounded mr-3"><img :src="prize.item.image" width="50" height="50"></div>
                                <div class="self-center">
                                    <div class="text-sm truncate text-white w-36">{{prize.item.name}}</div>
                                    <div class="text-sm py-1 text_gradient">{{prize.price}} Ks</div>
                                    <div class="text-xs text-gray-400">Time : {{prize.time}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="fixed flex justify-around bottom-24 w-full">
                            <div>
                                <div class="btn2_gradient py-3 text-center w-44 text-white rounded-full" @click="recycleSubmit()">Recycling</div>
                            </div>
                            <div>
                                <div class="btn_gradient py-3 text-center w-44  text-white rounded-full" @click="shipSubmit()">Shipment Apply</div>
                            </div>
                        </div>
                    </section>
                    <section id="panel-recycle" role="tabpanel" tabindex="0" aria-labelledby="tab-recycle" hidden class="overflow-auto px-4">
                        <div v-for="(prize,i) in recycle" :key="i" class="border_grad2_show my-3 p-2 before:rounded-lg w-full bg_grad1">
                            <div class="flex flex-row">
                                <div class="p-2 rounded mr-3"><img :src="prize.item.image" width="50" height="50"></div>
                                <div class="self-center">
                                    <div class="text-sm truncate text-white w-36">{{prize.item.name}}</div>
                                    <div class="text-sm py-1 text_gradient">{{prize.price}} Ks</div>
                                    <div class="text-xs text-gray-400">Time : {{prize.time}}</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
        <footer>
            <bot></bot>
        </footer>
        <address-modal v-model="addressModalActive" :prizes="selects" @alert="create=true"></address-modal>
        <create-alert v-model="create"></create-alert>
    </div>
</template>

<script>
import bot from './layouts/Footer.vue'
import {Link} from '@inertiajs/inertia-vue'
import tab from '../tab.js'
import axios from 'axios'
import addressModal from './modals/Address.vue'
import createAlert from './modals/alert/Create.vue'

export default {
    components: {
        bot,
        Link,
        addressModal,
        createAlert
    },
    data() {
        return {
            page: 1,
            lastPage: 1,
            pending: [],
            recycle: [],
            pendingStatus: 1,
            recycleStatus: 2,
            pendingEnd: false,
            recycleEnd: false,
            pTabActive: true,
            selectAll: false,
            prizeIds: [],
            selects: [],
            addressModalActive: false,
            create: false
        }
    },
    methods: {
        fetch(page, status) {
            axios.get(`/box-cabinet?page=${page}`,{
                params: {
                    status: status
                }
            }).then(res => {
                if(status == this.pendingStatus) {
                    this.pending.push(...res.data.data)
                    res.data.data.forEach(item => {
                        this.prizeIds.push(false)
                    })
                    this.lastPage = res.data.pagination.total_pages
                    if(this.page <= this.lastPage) {
                        this.page++
                    }
                    else this.pendingEnd = true
                }
                if(status == this.recycleStatus) {
                    this.recycle.push(...res.data.data)
                    this.lastPage = res.data.pagination.total_pages
                    if(this.page <= this.lastPage) {
                        this.page++
                    }
                    else this.recycleEnd = true
                }
            })
        },
        reset() {
            this.page = 1
            this.lastPage = 1
        },
        fetchPending() {
            this.reset()
            this.pTabActive = true
            if(this.pending.length == 0) {
                this.fetch(this.page, this.pendingStatus)
            }
        },
        fetchRecycle() {
            this.reset()
            this.pTabActive = false
            // if(this.recycle.length == 0) {
                this.fetch(this.page, this.recycleStatus)
            // }
        },
        tick(i) {
            if(this.prizeIds[i] == false) {
                this.selects[i] = this.pending[i].id
            }
            else {
                this.selects[i] = false
            }
        },
        recycleSubmit() {
            axios.post('/recycle', {
                prizeIds: this.selects.filter(Boolean)
            }).then(res => {
                // location.reload()
                this.create = true
            })
        },
        shipSubmit() {
            this.addressModalActive = !this.addressModalActive
        }
    },
    watch: {
        selectAll: {
            handler() {
                if(this.selectAll) {
                    this.prizeIds = []
                    this.selects = []
                    this.pending.forEach(item => {
                        this.prizeIds.push(item.id)
                        this.selects.push(item.id)
                    })
                }
                else {
                    this.prizeIds= []
                    this.pending.forEach(item => {
                        this.prizeIds.push(false)
                    })
                    this.selects = []
                }
            }
        }
    },
    mounted() {
        tab()
        this.fetchPending()
        window.onscroll = () => {
            var isEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
            if(this.pTabActive && isEnd && !this.pendingEnd) {
                this.fetch(this.page, this.pendingStatus)
            }
            if(!this.pTabActive && isEnd && !this.recycleEnd) {
                this.fetch(this.page, this.recycleStatus)
            }
        }
    }
}
</script>
