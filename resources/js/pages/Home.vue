<template>
    <main-layout>
        <div>
            <div class="flex justify-between mx-3 py-2">
                <div class="flex flex-row">
                    <div><img src="https://1.bp.blogspot.com/-VpNN3ROqFSw/WRC7TRlPYfI/AAAAAAAAi3k/8P1JqjBG4186-fVjrjW3v21RnF8fZFRHACLcB/s1600/18221988_435811773439708_638227643630576354_n.jpg" alt="" class="home_avatar"></div>
                    <div class="ml-2 self-center">
                        <div class="text-xs text-gray-400">Hello...</div>
                        <div class="font-bold text-lg">Thinzar Wint Kyaw</div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div class="m-3">
                <input type="text" class="home_search py-2 px-4 rounded-full w-full" placeholder="Search">
            </div>
            <div class="flex flex-wrap justify-between p-2 mb-3">
                <div class="w-40 p-2 rounded-full bg-white m-1 fun_menu_tab">Tide Play</div>
                <div class="w-40 p-2 rounded-full bg-white m-1 fun_menu_tab">Recharge</div>
                <div class="w-40 p-2 rounded-full bg-white m-1 fun_menu_tab">Shipping</div>
                <div class="w-40 p-2 rounded-full bg-white m-1 fun_menu_tab">Helps</div>
            </div>
            <div class="font-bold text-sm ml-3">Recommended</div>
            <div class="flex flex-wrap justify-around">
                <Link :href="'/box/'+box.id" v-for="(box,i) in boxes" :key="i" class="box_layout w-40 rounded-3xl shadow-sm my-2 px-3" as="button">
                    <div class="flex py-2 rounded-t-xl">
                        <div class="grow text-white text-left truncate">{{box.name}}<div class="text-xs text-gray-300">products</div></div>
                        <div class="flex-none w-12 self-center text-right font-bold" style="color:#FFC042;">$ {{box.price}}</div>
                    </div>
                    <div class="">
                        <div v-for="(item,j) in box.items" :key="j" class="inline-block pr-1 py-3">
                            <img :src="item.image" width="35" height="35">
                        </div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div style="color: #FFC042;"><span> coins/draw</span></div>
                        <div></div>
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
            axios.post(`?page=${this.page}`)
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
            let isEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
            if(isEnd && this.page <= this.lastPage) {
                this.fetchData()
            }
        }
    }
}
</script>
