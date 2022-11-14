<template>
     <div class="p-4">
        <div class="flex flex-row my-5">
           <Link :href="$url+'/user'" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img :src="$asset+'/image/ui/BackArrow.svg'">
                </div>
            </Link>
            <div class="font-bold text-xl text-white self-center">
                My Collection
            </div>
        </div>
        <div>
            <div v-for="(collect,i) in collections" :key="i" class="border_grad2 flex justify-between my-3 p-2 before:rounded-lg w-full">
                <div class="flex flex-row">
                    <div class="p-2 rounded mr-3"><img :src="collect.box.image" width="50" height="50"></div>
                    <div class="self-center">
                        <div class="text-sm truncate text-white w-36">{{collect.box.name}}</div>
                        <div class="text-sm py-1 text_gradient">$ {{collect.box.coin}}</div>
                        <div class="text-xs text-gray-400">Time : {{collect.time}}</div>
                    </div>
                </div>
                <div class="self-end mr-2">
                    <div @click="deleteCollect(collect.id)"><img :src="$asset+'/image/ui/Delete.svg'"></div>
                </div>
            </div>
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
            collections: []
        }
    },
    methods: {
        fetch() {
            axios.get('/user/collection/get')
                .then(res => {
                    this.collections.push(...res.data.data)
                    this.lastPage = res.data.pagination.total_pages
                    this.page++
                }) 
        },
        deleteCollect(id) {
            axios.delete(`/user/collection/${id}/cancel`)
                .then(res => {
                    location.reload()
                })
        }
    },
    beforeMount () {
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