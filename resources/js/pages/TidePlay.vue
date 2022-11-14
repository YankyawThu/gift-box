<template>
    <div class="p-4">
        <div class="flex justify-between my-5">
            <div class="flex flex-row">
                 <Link :href="$url+'/box'" as="button">
                    <div class="p-2 pl-0 mr-2">
                        <img :src="$asset+'/image/ui/BackArrow.svg'">
                    </div>
                </Link>
                <div class="font-bold text-xl self-center text-white">
                    Tide Play
                </div>
            </div>
            <div class="self-center pr-2">
                <img :src="$asset+'/image/ui/Search.svg'">
            </div>
        </div>
        <div class="flex flex-row">
            <div class="mr-3 py-1 px-4 before:rounded-full border_grad1 filter_menu filter_menu_active">
                All 
            </div>
            <div class="mr-3 py-1 px-4 before:rounded-full border_grad1 filter_menu">
                New
            </div>
            <div class="mr-3 py-1 px-4 before:rounded-full border_grad1 filter_menu">
                Price <img :src="$asset+'/image/ui/DropDown.svg'" class="inline-block -mt-1 ml-1">
            </div>
        </div>
        <div class="flex flex-wrap justify-around py-4">
            <Link :href="$url+'/box/'+box.id" v-for="(box,i) in boxes" :key="i" class="box_layout border_grad2 before:rounded-3xl shadow-sm my-2 px-3" as="button">
                <div class="mt-8">
                    <div v-for="(item,j) in (box.items).slice(0,1)" :key="j" class="inline-block pr-1">
                        <img :src="item.image" width="80" height="80">
                    </div>
                    <img :src="$asset+'/image/new_ui/Shadow.svg'" class="m-auto mt-2">
                </div>
                <div class="text-left text-white py-1 truncate" style="font-size:12px;">{{box.name}}</div>
                <div class="flex justify-between mb-3">
                    <div class="text-xs" style="color: #FFC042;">$ {{box.price}}</div>
                    <div class="text-gray-300" style="font-size:10px;">{{ box.items.length }} products</div>
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