<template>
    <div class="h-screen">
        <main class="pb-20">
            <div class="flex justify-between pt-6 pb-4 px-4">
                <div class="self-center font-bold text-lg text-white">
                    {{__('My Box Cabinet')}}
                    <div class="w-10 h-1 rounded-full" style="background: linear-gradient(97.86deg, #FF8D8D -38.38%, #F7FC0E 71.88%);"></div>
                </div>
                <div class="">
                    <!-- <img :src="$asset+'/image/ui/Service.svg'"> -->
                </div>
            </div>
            <div id="tabs">
                <div class="grid grid-cols-2 text-center mx-4" role="tablist" aria-label="Free HTML Tabs">
                    <div class="py-2" role="tab" aria-selected="true" aria-controls="panel-pending" id="tab-pending" tabindex="0" @click="fetchPending()">
                        {{__('Pending Delivery')}}
                    </div>
                    <div class="py-2" role="tab" aria-selected="false" aria-controls="panel-recycle" id="tab-recycle" tabindex="-1" @click="fetchRecycle()">
                        {{__('Recycling')}}
                    </div>
                </div>
                <div class="divider"></div>
                <div class="my-2">
                    <section id="panel-pending" role="tabpanel" tabindex="0" aria-labelledby="tab-pending" class="overflow-auto pb-16">
                        <div class="flex justify-between m-4">
                            <label class="form-check-label flex flex-row" for="allChecked">
                                <div>
                                    <input class="form-check-input h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" v-model="selectAll" id="allChecked" hidden>
                                    <img :src="imgSelectAll" class="mr-2">
                                </div>
                                <div>
                                    <span class="text_c2">
                                        {{__('Select All')}}
                                    </span>
                                </div>
                            </label>
                            <div class="text-white" @click="clearAll()">{{__('Clear All')}}</div>
                        </div>
                        <div v-if="pending.length == 0" class="text-center text-gray-500 py-5">
                            No data
                        </div>
                        <div v-else>
                            <label v-for="(prize,i) in pending" :key="i" class="form-check-label flex flex-row px-4" :for="'itemChecked'+i">
                                <div class="self-center mr-3">
                                    <input :id="'itemChecked'+i" @click="tick(i)" v-model="prizeIds[i]" class="form-check-input h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" hidden>
                                    <img :src="imgSelect[i]">
                                </div>
                                <div class="w-full">
                                    <div class="w-full">
                                        <div class="border_grad2_show flex flex-row before:rounded-lg my-3 p-2 w-full bg_grad1">
                                            <div class="p-2 rounded mr-3"><img :src="prize.item.image" width="50" height="50"></div>
                                            <div class="self-center">
                                                <div class="text-sm truncate text-white w-36">{{prize.item.name}} {{prize.id}}</div>
                                                <div class="text-sm py-1 text_gradient">{{prize.price}} {{__('Ks')}}</div>
                                                <div class="text-xs text-gray-400">{{__('Time')}} : {{prize.time}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div class="fixed flex justify-around bottom-24 w-full">
                            <div>
                                <div class="btn2_gradient py-3 text-center w-44 text-white rounded-full" @click="recycleModal()">{{__('Recycling')}}</div>
                            </div>
                            <div>
                                <div class="btn_gradient py-3 text-center w-44  text-white rounded-full" @click="shipModal()">{{__('Shipment Apply')}}</div>
                            </div>
                        </div>
                    </section>
                    <section id="panel-recycle" role="tabpanel" tabindex="0" aria-labelledby="tab-recycle" hidden class="overflow-auto px-4">
                        <div v-if="recycle.length == 0" class="text-center text-gray-500 py-5">
                            No data
                        </div>
                        <div v-else>
                            <div v-for="(prize,i) in recycle" :key="i" class="flex justify-between border_grad2_show my-3 p-2 before:rounded-lg w-full bg_grad1">
                                <div class="flex flex-row">
                                    <div class="p-2 rounded mr-3"><img :src="prize.item.image" width="50" height="50"></div>
                                    <div class="self-center">
                                        <div class="text-sm truncate text-white w-36">{{prize.item.name}}</div>
                                        <div class="text-sm py-1 text_gradient">{{prize.price}} {{__('Ks')}}</div>
                                        <div class="text-xs text-gray-400">{{__('Time')}} : {{prize.time}}</div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="!prize.isApprove" class="border_grad2_show before:rounded-full rounded-full px-3 py-2 text-xs mt-1 bg_grad" style="color: #FFC83C;">{{__('Pending')}}</div>
                                    <div v-else class="border_grad2_show before:rounded-full rounded-full px-3 py-2 text-xs mt-1 bg_grad" style="color: #CE25F0;">{{__('Completed')}}</div>
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
        <recycle-modal v-model="recycleModalActive" :prizes="recyclePrizes" @validate="validate" :index="1" @submit="recycleSubmit"></recycle-modal>
        <address-modal v-model="addressModalActive" :prizes="shipPrizes" @validate="validate" :index="1" @submit="shipSubmit"></address-modal>
        <create-alert v-model="create"></create-alert>
        <validate-alert v-model="errorModal" :errors="errors"></validate-alert>
    </div>
</template>

<script>
import bot from './layouts/Footer.vue'
import {Link} from '@inertiajs/inertia-vue'
import tab from '../tab.js'
import axios from 'axios'
import addressModal from './modals/Address.vue'
import recycleModal from './modals/Recycle.vue'

export default {
    components: {
        bot,
        Link,
        addressModal,
        recycleModal
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
            recycleModalActive: false,
            create: false,
            errors: {},
            errorModal: false,
            imgSelectAll: this.$asset+'/image/ui/SelectAll.svg',
            imgSelect: [],
            shipPrizes: [],
            recyclePrizes: []
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
                        this.imgSelect.push(this.$asset+'/image/ui/Select.svg')
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
            if(this.recycle.length == 0) {
                this.fetch(this.page, this.recycleStatus)
            }
        },
        tick(i) {
            if(this.prizeIds[i] == false) {
                this.imgSelect[i] = this.$asset+'/image/ui/SelectTick.svg'
                this.selects[i] = this.pending[i]
            }
            else {
                this.imgSelect[i] = this.$asset+'/image/ui/Select.svg'
                this.selects[i] = false
            }
        },
        recycleModal() {
            this.recyclePrizes = this.selects.filter(function (el) {
                return el != null;
            });
            this.recyclePrizes = this.recyclePrizes.filter(Boolean)
            this.recycleModalActive = !this.recycleModalActive
        },
        shipModal() {
            this.selects.filter(Boolean).forEach(select => {
                this.shipPrizes.push(select.id)
            })
            this.addressModalActive = !this.addressModalActive
        },
        validate(data) {
            this.errors = data
            this.errorModal = true
        },
        clearAll() {
            this.selects = []
            this.prizeIds = []
            this.selectAll = false
            this.imgSelect = []
            this.pending.forEach(item => {
                this.prizeIds.push(false)
                this.imgSelect.push(this.$asset+'/image/ui/Select.svg')
            })
        },
        recycleSubmit() {
            var ids = []
            this.selects.filter(Boolean).forEach(select => {
                ids.push(select.id)
            })
            axios.post('/recycle', {
                prizeIds: ids
            }).then(res => {
                // location.reload()
                this.create = true
            }).catch(error => {
                if(error.response.data.errors) {
                    this.errors = error.response.data.errors
                }
                else {
                    let message = []
                    message.push(error.response.data.message)
                    this.errors['message'] = message
                }
                this.errorModal = true
            })
        },
        shipSubmit(address) {
            var ids = []
            this.selects.filter(Boolean).forEach(select => {
                ids.push(select.id)
            })
            axios.post(`/shipment-apply`, {
                'addressId': address,
                'prizeIds': ids
            }).then(res => {
                this.create = true
                // location.reload()
            }).catch(error => {
                if(error.response.data.errors) {
                    this.errors = error.response.data.errors
                }
                else {
                    let message = []
                    message.push(error.response.data.message)
                    this.errors['message'] = message
                }
                this.errorModal = true
            })
        }
    },
    watch: {
        selectAll: {
            handler() {
                if(this.selectAll) {
                    this.imgSelectAll = this.$asset+'/image/ui/SelectAllTick.svg'
                    this.prizeIds = []
                    this.selects = []
                    this.imgSelect = []
                    this.pending.forEach(item => {
                        this.prizeIds.push(item.id)
                        this.selects.push(item)
                        this.imgSelect.push(this.$asset+'/image/ui/SelectTick.svg')
                    })
                }
                else {
                    this.imgSelectAll = this.$asset+'/image/ui/SelectAll.svg'
                    this.prizeIds = []
                    this.imgSelect = []
                    this.pending.forEach(item => {
                        this.prizeIds.push(false)
                        this.imgSelect.push(this.$asset+'/image/ui/Select.svg')
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
