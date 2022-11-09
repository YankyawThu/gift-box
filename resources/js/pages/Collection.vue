<template>
     <div class="p-4">
        <div class="flex flex-row my-5">
           <Link href="/user" as="button">
                <div class="p-2 pl-0 mr-2">
                    <img src="/image/ui/BackArrow.svg">
                </div>
            </Link>
            <div class="font-bold text-xl self-center">
                My Collection
            </div>
        </div>
        <div>
            <div v-for="(collect,i) in collections" :key="i" class="flex justify-between my-3 p-2 rounded-lg bg-white w-full" style="box-shadow: 1px 2px 4px rgba(38, 39, 60, 0.1);">
                <div class="flex flex-row">
                    <div class="bg-gray-100 p-2 rounded mr-3"><img :src="collect.box.image" width="50" height="50"></div>
                    <div class="self-center">
                        <div class="text-sm truncate w-36">{{collect.box.name}}</div>
                        <div class="text-sm py-1 text_gradient">$ {{collect.box.coin}}</div>
                        <div class="text-xs text-gray-400">Time : {{collect.time}}</div>
                    </div>
                </div>
                <div class="self-end mr-2">
                    <Link :href="`/user/collection/${collect.id}/cancel`" method="delete" as="button"><img src="/image/ui/Delete.svg"></Link>
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