<template>
    <div class="h-screen">
        <main class="pb-20 px-4">
            <div class="flex justify-between pt-6 pb-4">
                <div class="self-center font-bold text-lg">
                    My Wallet
                    <div class="w-10 h-1 rounded-full" style="background: linear-gradient(146.62deg, #8481FF 4.17%, #6D41CB 95.36%);"></div>
                </div>
                <div class="">
                    <img :src="$asset+'/image/ui/Service.svg'">
                </div>
            </div>
            <div class="flex justify-between user_header p-5 mb-4 mt-2 rounded-xl">
                <div>
                    <div class="text-white text-xs">Balance: (Gold Coins)</div>
                    <div class="text-2xl" style="color: #FFC042;">9,000,000</div>
                </div>
                <div class="self-end mb-1">
                    <Link :href="$url+'/recharge'" as="button" class="px-3 py-1 btn_one rounded-full text-xs text-white">
                        Recharge
                    </Link>
                </div>
            </div>
            <div class="text-center py-3">Billing Details</div>
            <div v-for="(data,i) in wallets" :key="i" class="flex justify-between py-3 w-full border-b">
                <div>
                    <div>{{data.type}}</div>
                    <div class="text-sm text-gray-400">Time: {{data.time}}</div>
                </div>
                <div class="self-center" style="color: #D9761A;">
                    $ {{data.coin}}
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
            wallets: []
        }
    },
    methods: {
        fetch () {
            axios.get(`/wallet-list?page=${this.page}`)
                .then((res) => {
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