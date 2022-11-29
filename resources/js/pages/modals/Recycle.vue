<template>
    <div v-show="modelActive" class="boxModal">
        <div :class="modalFrame[index]" class="text-white">
            <div class="close-dataModal" @click="$emit('update:model-active', false)"><img :src="$asset+'/image/ui/Cross.svg'"></div>
            <div :class="index == 0 ? 'text-black' : 'text-white'">
                {{__('Recycling')}}
                <div class="w-10 h-1 rounded-full" style="background: linear-gradient(97.86deg, #FF8D8D -38.38%, #F7FC0E 71.88%);"></div>
            </div>
            <div class="overflow-auto h-96 my-5">
                <div v-if="prizes.length == 0" class="w-full">
                </div>
                <div v-else>
                    <div v-for="(prize,i) in prizes" :key="i" class="flex flex-row border_grad2_show my-3 p-2 before:rounded-lg w-full bg_grad1">
                        <div class="p-2 rounded mr-3"><img :src="prize.item.image" width="50" height="50"></div>
                        <div class="self-center">
                            <div class="text-sm truncate text-white w-36">{{prize.item.name}}</div>
                            <div class="text-sm py-1 text_gradient">{{prize.price}} {{__('Ks')}}</div>
                            <div class="text-xs text-gray-400">{{__('Time')}} : {{prize.time}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-xs pb-5 text-center">{{__('Are you sure you want to recycle this selected items ?')}}</div>
            <div class="flex justify-around">
                <div class="border_grad1 py-2 px-8 text-sm text-center before:rounded-full text-white" @click="submit()">
                    {{__('Cancel')}}
                </div>
                <div class="btn_gradient py-2 px-8 text-sm text-center rounded-full text-white" @click="submit()">
                    {{__('Recycle')}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {Link} from '@inertiajs/inertia-vue'

export default {
    components: {
        Link
    },
    model: {
        prop: 'modelActive',
        event: 'update:model-active',
    },
    props: {
        modelActive: {
            type: Boolean,
        },
        prizes: {
            type: Array
        },
        index: ''
    },
    data() {
        return {
            modalFrame: [
                'boxModal-content',
                'dataModal-content'
            ]
        }
    },
    methods: {
        submit() {
            this.$emit('update:model-active', false)
            this.$emit('submit')
        }
    }
}
</script>