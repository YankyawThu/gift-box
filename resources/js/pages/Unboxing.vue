<template>
    <div class="h-screen">
        <main class="pb-20 px-4">
            <div class="flex justify-between pt-6 pb-4">
                <div class="self-center font-bold text-white text-lg">
                    {{__('Unboxing Records')}}
                    <div class="w-10 h-1 rounded-full" style="background: linear-gradient(97.86deg, #FF8D8D -38.38%, #F7FC0E 71.88%);"></div>
                </div>
                <div class="">
                    <!-- <img :src="$asset+'/image/ui/Service.svg'"> -->
                </div>
            </div>
            <div v-if="unboxes.length == 0" class="text-center text-gray-500 py-5">
                No data
            </div>
            <div v-else>
                <div v-for="(prize,i) in unboxes" :key="i" class="flex flex-row border_grad2_show my-3 p-2 before:rounded-lg rounded-lg w-full bg_grad1">
                    <div class="p-2 rounded mr-3"><img :src="prize.box.image" width="50" height="50"></div>
                    <div class="self-center">
                        <div class="text-sm truncate text-white w-36">{{prize.box.name}}</div>
                        <div class="text-sm py-1 text_gradient">{{prize.box.price}} {{__('Ks')}}</div>
                        <div class="text-xs text-gray-400">{{__('Time')}} : {{prize.time}}</div>
                    </div>
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
import axios from 'axios'

export default {
    components: {
        bot
    },
    data() {
        return {
            page: 1,
            lastPage: 1,
            unboxes: [],
        }
    },
    methods: {
        fetch() {
            axios.get(`/unbox-list?page=${this.page}`)
                .then((res) => {
                    this.unboxes.push(...res.data.data)
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