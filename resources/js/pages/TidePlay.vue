<template>
    <div class="p-4">
        <div class="flex justify-between my-5">
            <div class="flex flex-row">
                 <Link :href="$url+'/box'" as="button">
                    <div class="p-2 pl-0 mr-2">
                        <img :src="$asset+'/image/ui/BackArrow.svg'">
                    </div>
                </Link>
                <div v-show="!showSearch" class="font-bold text-xl self-center text-white">
                    {{__('Tide Play')}}
                </div>
                <div v-show="showSearch" class="self-center">
                    <input v-model="search" type="text" class="bg_grad1 placeholder:text-white focus:outline-none rounded-full w-72 px-5 py-2 text-white" placeholder="Search" autofocus>
                </div>
            </div>
            <div class="self-center pr-2">
                <img :src="$asset+'/image/ui/Search.svg'" @click="showSearch = !showSearch">
            </div>
        </div>
        <div class="flex flex-row">
            <div class="border_grad1 mr-3 py-1 px-4 before:rounded-full filter_menu" :class="[isActive=='All' ? 'filter_menu_active rounded-full' : '']" @click="addActive('All')">
                {{__('All')}}
            </div>
            <div class="border_grad1 mr-3 py-1 px-4 before:rounded-full filter_menu" :class="[isActive=='New' ? 'filter_menu_active rounded-full' : '']" @click="addActive('New')">
                {{__('New')}}
            </div>
            <div class="border_grad1 mr-3 py-1 px-4 before:rounded-full filter_menu" :class="[isActive=='Price' ? 'filter_menu_active rounded-full' : '']"  @click="addActive('Price')">
                {{__('Price')}} <img v-if="sort == 'desc' || sort == ''" :src="$asset+'/image/ui/Down.svg'" class="inline-block -mt-1 ml-1"><img v-else :src="$asset+'/image/ui/Up.svg'" class="inline-block -mt-1 ml-1">
            </div>
        </div>
        <div class="flex flex-wrap justify-around py-4">
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
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'
import axios from 'axios'

export default {
    components: {
        Link
    },
    data() {
        return {
            page: 1,
            lastPage: 1,
            boxes: [],
            isActive:'All',
            sort: '',
            showSearch: '',
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
        addActive(active){
            this.page = 1
            this.lastPage = 1
            this.boxes = []
            this.isActive= active
            if(this.isActive == 'Price') {
                if(this.sort == 'asc') {
                    this.sort = 'desc'
                }
                else this.sort='asc'
            }else{
                 this.sort=''
            }
            this.fetchData()
        },
        fetchData () {
            axios.post(`/box?page=${this.page}`, {
                price: this.sort
            })
            .then((res) => {
                // this.boxes = []
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
        window.onscroll = () => {
            let isEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1
            if(isEnd && this.page <= this.lastPage) {
                this.fetchData()
            }
        }
    }
}
</script>
