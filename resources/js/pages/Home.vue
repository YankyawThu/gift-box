<template>
    <main-layout>
        <div>
            <div class="flex justify-between py-2">
                <div class="flex flex-row">
                    <div><img src="https://1.bp.blogspot.com/-VpNN3ROqFSw/WRC7TRlPYfI/AAAAAAAAi3k/8P1JqjBG4186-fVjrjW3v21RnF8fZFRHACLcB/s1600/18221988_435811773439708_638227643630576354_n.jpg" alt="" class="home_avatar"></div>
                    <div class="ml-2 self-center">
                        <div class="text-xs text-gray-400">Hello...</div>
                        <div class="font-bold text-lg text-white">Thinzar Wint Kyaw</div>
                    </div>
                </div>
                <div class="self-center">
                    <img :src="$asset+'/image/ui/Service.svg'">
                </div>
            </div>
            <div class="my-3 bg_grad1 rounded-full">
                <input type="text" class="home_search bg-transparent focus:outline-none py-2 px-4 rounded-full w-full text-white z-50" placeholder="Search">
            </div>
            <div class="my-2">
                <img :src="$asset+'/image/ui/Banner.svg'" class="w-full">
            </div>
            <div class="flex flex-wrap justify-between py-2 mb-3">
                <Link :href="$url+'/tide-play'" as="button" class="text-left"><div class="border_grad1 w-40 p-3 before:rounded-full m-1 text_c1"><img class="inline-block mr-2" :src="$asset+'/image/ui/TidePlay.svg'">Tide Play</div></Link>
                <Link :href="$url+'/recharge'" as="button" class="text-left"><div class="border_grad1 w-40 p-3 before:rounded-full m-1 text_c1"><img class="inline-block mr-2" :src="$asset+'/image/ui/Recharge.svg'">Recharge</div></Link>
                <Link :href="$url+'/shipping/1'" as="button" class="text-left"><div class="border_grad1 w-40 p-3 before:rounded-full m-1 text_c1"><img class="inline-block mr-2" :src="$asset+'/image/ui/Shipping.svg'">Shipping</div></Link>
                <Link :href="$url+'/helps'" as="button" class="text-left"><div class="border_grad1 w-40 p-3 before:rounded-full m-1 text_c1"><img class="inline-block mr-2" :src="$asset+'/image/ui/Helps.svg'">Helps</div></Link>
            </div>
            <div class="font-bold text-xl text-white">Recommended</div>
            <div class="flex flex-wrap justify-around">
                <Link :href="$url+'/box/'+box.id" v-for="(box,i) in boxes" :key="i" class="box_layout border_grad2 before:rounded-3xl shadow-sm my-2 px-3" as="button">
                    <div class="mt-8">
                        <div v-for="(item,j) in (box.items).slice(0,1)" :key="j" class="inline-block pr-1">
                            <img :src="item.image" width="80" height="80">
                        </div>
                        <img :src="$asset+'/image/ui/Shadow.svg'" class="m-auto mt-2">
                    </div>
                    <div class="text-left text-white py-1 truncate" style="font-size:12px;">{{box.name}}</div>
                    <div class="flex justify-between mb-3">
                        <div class="text-xs" style="color: #FFC042;">$ {{box.price}}</div>
                        <div class="text-gray-300" style="font-size:10px;">{{ box.items.length }} products</div>
                    </div>
                </Link>
            </div>
        </div>
    </main-layout>
</template>

<script>

import mainLayout from './layouts/Main.vue'
import axios from 'axios'
import {Link} from '@inertiajs/inertia-vue'

export default {
    components: {
        mainLayout,
        Link
    },
    data() {
        return {
            page: 1,
            lastPage: 1,
            boxes: []
        }
    },
    methods: {
        fetchData () {
            axios.post(`/box?page=${this.page}`)
                .then((res) => {
                    this.boxes.push(...res.data.data)
                    this.lastPage = res.data.pagination.total_pages
                    this.page++
                })
        }
    },
    beforeMount () {
        this.fetchData()
    },
    mounted () {
        window.onscroll = () => {
            let isEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1
            if(isEnd && this.page <= this.lastPage) {
                this.fetchData()
            }
        }
    }
}
</script>
