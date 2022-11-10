<template>
    <div class="h-screen">
        <main class="pb-20 px-4">
            <div class="flex justify-between pt-7 pb-4">
                <div class="self-center font-bold text-lg">
                    Wallet
                    <div class="w-10 h-1 rounded-full" style="background: linear-gradient(146.62deg, #8481FF 4.17%, #6D41CB 95.36%);"></div>
                </div>
                <div class="">
                    <img :src="$asset+'/image/ui/Service.svg'">
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

export default {
    components: {
        bot,
        Link
    },
    methods: {
    }
}
</script>