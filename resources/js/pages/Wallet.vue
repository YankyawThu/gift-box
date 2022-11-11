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
        </main>
        <footer>
            <bot></bot>
        </footer>
    </div>
</template>

<script>
import bot from './layouts/Footer.vue'
import {Link} from '@inertiajs/inertia-vue'

export default {
    components: {
        bot,
        Link
    },
    methods: {
    }
}
</script>