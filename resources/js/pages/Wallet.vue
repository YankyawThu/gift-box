<template>
    <div class="h-screen">
        <main class="pb-20 px-4">
            <div class="flex justify-between pt-6 pb-4">
                <div class="self-center font-bold text-white text-lg">
                    My Wallet
                    <div class="w-10 h-1 rounded-full" style="background: linear-gradient(97.86deg, #FF8D8D -38.38%, #F7FC0E 71.88%);"></div>
                </div>
                <div class="">
                    <img :src="$asset+'/image/ui/Service.svg'">
                </div>
            </div>
            <div class="border_grad1 flex justify-between p-5 mb-4 mt-2 before:rounded-xl">
                <div>
                    <div class="text-white text-xs">Balance: (Gold Coins)</div>
                    <div class="text-2xl text_c2 font-black">{{balance}} Ks</div>
                </div>
                <div class="self-end mb-1">
                    <Link :href="$url+'/recharge'" as="button" class="px-4 py-2 mr-1 btn_gradient rounded-full text-xs text-white">
                        Recharge
                    </Link>
                </div>
            </div>
            <div class="text-center py-3 text_c1">Billing Details</div>
            <div v-for="(data,i) in wallets" :key="i" class="flex justify-between py-3 w-full border-b">
                <div>
                    <div class="text-white">{{data.type}}</div>
                    <div class="text-sm text-gray-400">Time: {{data.time}}</div>
                </div>
                <div class="self-center text_c2">
                    {{ data.money > 0 ? '+' : ''}}{{data.money}} Ks
                </div>
            </div>
        </main>
        <footer>
            <bot></bot>
        </footer>
    </div>
</template>

<script>
import bot from './layouts/Footer.vue'
import {Link} from '@inertiajs/inertia-vue'
import axios from 'axios'

export default {
    components: {
        bot,
        Link
    },
    data() {
        return {
            page: 1,
            lastPage: 1,
            wallets: [],
            balance: 0
        }
    },
    methods: {
        fetch () {
            axios.get(`/wallet-list?page=${this.page}`)
                .then((res) => {
                    this.balance = res.data.balance
                    this.wallets.push(...res.data.data)
                    this.lastPage = res.data.pagination.total_pages
                    this.page++
                })
        }
    },
    beforeMount() {
        this.fetch()
    },
    mounted() {
        window.onscroll = () => {
            let isEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1
            if(isEnd && this.page <= this.lastPage) {
                this.fetch()
            }
        }
    }
}
</script>