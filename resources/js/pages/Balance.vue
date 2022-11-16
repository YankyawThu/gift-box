<template>
    <div class="p-4">
        <div class="flex flex-row my-5">
           <Link :href="$url+'/user'" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl text-white self-center">
                My Balance
            </div>
        </div>
        <div class="border_grad1 flex justify-between p-5 mb-4 mt-2 before:rounded-xl">
            <div>
                <div class="text-white text-xs">Balance: (Gold Coins)</div>
                <div class="text-2xl text_c2 font-bold">{{ balance }}</div>
            </div>
            <div class="self-end mb-1">
                <Link :href="$url+'/recharge'" as="button" class="px-4 py-2 mr-1 btn_gradient rounded-full text-xs text-white">
                    Recharge
                </Link>
                <Link :href="$url+'/user/wallet'" as="button" class="px-4 py-2 ml-1 btn_gradient rounded-full text-xs text-white">
                    Go to Wallet
                </Link>
            </div>
        </div>
        <div id="tabs">
            <div class="grid grid-cols-2 text-center" role="tablist" aria-label="Free HTML Tabs">
                <div class="py-2" role="tab" aria-selected="true" aria-controls="panel-income" id="tab-income" tabindex="0" @click="fetchIncome()">
                    Income
                </div>
                <div class="py-2" role="tab" aria-selected="false" aria-controls="panel-expend" id="tab-expend" tabindex="-1" @click="fetchExpend()">
                    Expenditure
                </div>
            </div>
            <div class="divider"></div>
            <div class="my-4">
                <section id="panel-income" role="tabpanel" tabindex="0" aria-labelledby="tab-income" class="overflow-auto">
                    <div v-for="(data,i) in incomes" :key="i" class="flex justify-between py-3 w-full border-b">
                        <div>
                            <div class="text-white">{{data.type}}</div>
                            <div class="text-sm text-gray-400">Time: {{data.time}}</div>
                        </div>
                        <div class="self-center text_c2">
                            -{{data.money}}
                        </div>
                    </div>
                </section>
                <section id="panel-expend" role="tabpanel" tabindex="0" aria-labelledby="tab-expend" hidden class="overflow-auto px-1">
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
            incomes: [],
            expends: [],
            incomeEnd: false,
            expendEnd: false,
            incomeStatus: 'in',
            expendStatus: 'out',
            balance: 0
        }
    },
    methods: {
        fetch(page, status) {
            axios.get(`/user/balance/get?page=${page}`,{
                params: {
                    type: status
                }
            }).then(res => {
                this.balance = res.data.balance
                if(status == this.incomeStatus) {
                    this.incomes.push(...res.data.data)
                    this.lastPage = res.data.pagination.total_pages
                    if(this.page <= this.lastPage) {
                        this.page++
                    }
                    else this.incomeEnd = true
                }
                if(status == this.expendStatus) {
                    this.incomes.push(...res.data.data)
                    this.lastPage = res.data.pagination.total_pages
                    if(this.page <= this.lastPage) {
                        this.page++
                    }
                    else this.expendEnd = true
                }
            })
        },
        reset() {
            this.page = 1
            this.lastPage = 1
        },
        fetchIncome() {
            this.reset()
            if(this.incomes.length == 0) {
                this.fetch(this.page, this.incomeStatus)
            }
        },
        fetchExpend() {
            this.reset()
            if(this.expends.length == 0) {
                this.fetch(this.page, this.expendStatus)
            }
        }
    },
    mounted() {
        tab()
        this.fetchIncome()
        var income = document.querySelector("#panel-income");
        income.onscroll = () => {
            var isEnd = income.scrollTop + income.clientHeight >= income.scrollHeight - 1;
            if(isEnd && !this.incomeEnd) {
                this.fetch(this.page, this.incomeStatus)
            }
        }
        var expend = document.querySelector("#panel-expend");
        expend.onscroll = () => {
            var isEnd = expend.scrollTop + expend.clientHeight >= expend.scrollHeight - 1;
            if(isEnd && !this.expendEnd) {
                this.fetch(this.page, this.expendStatus)
            }
        }
    }
}
</script>