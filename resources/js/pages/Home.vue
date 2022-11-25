<template>
    <main-layout>
        <div>
            <div class="flex justify-between py-2">
                <div class="flex flex-row">
                    <div><img :src="user.avatar" alt="" class="home_avatar"></div>
                    <div class="ml-2 self-center">
                        <div class="text-xs text_c2">{{user.money}} {{__('Ks')}}</div>
                        <div class="font-bold text-lg text-white">{{user.name}}</div>
                    </div>
                </div>
                <div class="self-center">
                    <img :src="$asset+'/image/ui/Service.svg'">
                </div>
            </div>
            <div class="flex my-3 bg_grad1 rounded-full px-5 py-2">
                <div class="self-center w-10">
                    <img :src="$asset+'/image/ui/Search.svg'" alt="">
                </div>
                <div class="grow flex-none">
                    <input v-model="search" type="text" class="home_search bg-transparent placeholder:text-white focus:outline-none text-white w-full py-2" :placeholder="__('Search Box')+'...'">
                </div>
            </div>
            <div class="my-2">
                <div class="carousel h-44 md:h-72 rounded-3xl">
                    <div class="slides">
                        <img :src="img" v-for="(img,i) in banners" :key="i">
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-between py-2 mb-3">
                <Link :href="$url+'/tide-play'" as="button" class="text-left"><div class="border_grad1 w-44 p-3 before:rounded-full m-1 text_c1"><img class="inline-block mr-2" :src="$asset+'/image/ui/TidePlay.svg'">{{__('Tide Play')}}</div></Link>
                <Link :href="$url+'/recharge'" as="button" class="text-left"><div class="border_grad1 w-44 p-3 before:rounded-full m-1 text_c1"><img class="inline-block mr-2" :src="$asset+'/image/ui/Recharge.svg'">{{__('Recharge')}}</div></Link>
                <Link :href="$url+'/shipping/1'" as="button" class="text-left"><div class="border_grad1 w-44 p-3 before:rounded-full m-1 text_c1"><img class="inline-block mr-2" :src="$asset+'/image/ui/Shipping.svg'">{{__('Shipping')}}</div></Link>
                <Link :href="$url+'/helps'" as="button" class="text-left"><div class="border_grad1 w-44 p-3 before:rounded-full m-1 text_c1"><img class="inline-block mr-2" :src="$asset+'/image/ui/Helps.svg'">{{__('Helps')}}</div></Link>
            </div>
            <div class="font-bold text-xl text-white">{{__('Recommended')}}</div>
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
                        <div class="text-xs" style="color: #FFC042;">{{box.price}} {{__('Ks')}}</div>
                        <div class="text-gray-300" style="font-size:10px;">{{ box.items.length }} {{__('products')}}</div>
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
import carousel from '../carousel'

export default {
    components: {
        mainLayout,
        Link
    },
    props: {
        user: {
            type:Object
        },
        banners: {
            type: Array
        }
    },
    data() {
        return {
            page: 1,
            lastPage: 1,
            boxes: [],
            search: ''
        }
    },
    watch: {
        search: {
            handler() {
                this.fetchWithName()
            }
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
        },
        fetchWithName () {
            axios.post(`/box`, {
                name: this.search,
            })
            .then((res) => {
                this.boxes = []
                this.boxes.push(...res.data.data)
            })
        }
    },
    beforeMount () {
        this.fetchData()
    },
    mounted () {
        carousel()
        window.onscroll = () => {
            let isEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1
            if(isEnd && this.page <= this.lastPage) {
                this.fetchData()
            }
        }
    }
}
</script>
