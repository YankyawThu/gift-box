<template>
    <main-layout>
        <div>
            <div class="font-bold text-sm">All</div>
            <div class="flex flex-wrap justify-around">
                <div v-for="(box,i) in boxes" :key="i" class="w-96 rounded-xl shadow-sm my-2">
                    <div class="flex justify-between py-2 bg-gradient-to-r from-blue-100 to-purple-100 px-3 rounded-t-xl">
                        <div>{{box.name}} {{box.id}}</div>
                        <div class="self-end text-yellow-500"><span class="font-bold">{{box.price}}</span><span class="text-xs"> coins/draw</span></div>
                    </div>
                    <div class="px-3">
                        <div v-for="(item,j) in box.items" :key="j" class="inline-block pr-1 py-3">
                            <img :src="item.image" width="50" height="50">
                        </div>
                    </div>
                    <div class="flex justify-between py-2 px-3">
                        <div class="text-xs text-gray-400">A total of products</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </main-layout>
</template>

<script>

import mainLayout from './layouts/Main.vue'
import axios from 'axios'

export default {
    components: {
        mainLayout
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