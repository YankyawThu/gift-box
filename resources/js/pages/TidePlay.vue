<template>
    <div class="p-4">
        <div class="flex justify-between my-5">
            <div class="flex flex-row">
                 <Link href="/box" as="button">
                    <div class="p-2 pl-0 mr-2">
                        <img src="image/ui/BackArrow.svg">
                    </div>
                </Link>
                <div class="font-bold text-xl self-center">
                    Tide Play
                </div>
            </div>
            <div class="self-center pr-2">
                <img src="image/ui/Search.svg">
            </div>
        </div>
        <div class="flex flex-row">
            <div class="mr-3 py-1 px-4 rounded-full filter_menu filter_menu_active">
                All 
            </div>
            <div class="mr-3 py-1 px-4 rounded-full filter_menu">
                New
            </div>
            <div class="mr-3 py-1 px-4 rounded-full filter_menu">
                Price <img src="image/ui/DropDown.svg" class="inline-block -mt-1 ml-1">
            </div>
        </div>
        <div class="flex flex-wrap justify-around py-4">
            <Link :href="'/box/'+box.id" v-for="(box,i) in boxes" :key="i" class="box_layout rounded-3xl shadow-sm my-2 px-3" as="button">
                <div class="flex py-2 rounded-t-xl">
                    <div class="grow text-white text-left truncate">{{box.name}}<div class="text-xs text-gray-300">products</div></div>
                    <div class="flex-none w-12 self-center text-right font-bold" style="color:#FFC042;">$ {{box.price}}</div>
                </div>
                <div class="">
                    <div v-for="(item,j) in (box.items).slice(0,3)" :key="j" class="inline-block pr-1 py-3">
                        <img :src="item.image" width="35" height="35">
                    </div>
                </div>
                <div class="flex justify-between py-2">
                    <div style="color: #FFC042;"><span>{{box.coin}} coins/draw</span></div>
                    <div class="self-center"><img src="image/ui/Arrow.svg"></div>
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