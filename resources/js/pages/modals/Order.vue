<template>
     <div v-show="modelActive" class="boxModal">
        <div class="boxModal-content">
            <span class="close-modal" @click="close()"><img src="image/ui/Cross.svg"></span>
            <div><img src="image/ui/Pocket.svg" class="modal_header_img"></div>
            <div class="text-lg py-2 font-bold text-center">
                Payment
            </div>
            <div class="px-10 py-2" v-if="order.data">
                <div v-if="order.data.items">
                    <div class="flex flex-wrap justify-center">
                        <div :class="[i == 4 ? 'relative' : '']" v-for="(item,i) in (order.data.items).slice(0,5)" :key="i" style="margin:1px;">
                            <img :src="item.image" width="50" height="50" class="m-auto">
                            <div v-if="i == 4" class="absolute w-full h-full bg-black top-0 opacity-40"></div>
                            <div v-if="i == 4" class="absolute text-white text-center inset-x-1 inset-y-4" style="line-height: 18px;">+{{order.data.items.length - 4}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="order.data" class="pt-2 text-center" style="color: #DF8E44;">{{order.data.name}}</div>
            <div v-if="order.data" class="py-1 text-center text-sm" style="color: #E74549;">({{order.data.price}} gold coins) <span v-if="order.coinNotEnough">Insufficient coin!</span></div>
            <div class="mt-5 text-sm px-2">
                ! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit faucibus lobortis phasellus.
            </div>
            <div class="flex flex-row text-sm rounded-lg px-3 py-2 my-4 agree_term" @click="isAgree = !isAgree">
                <div class="self-center mr-3">
                    <input v-model="isAgree" type="checkbox" class="w-5 h-5">
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                </div>
            </div>
            <div class="w-full mt-5 mb-2">
                <div class="btn_one rounded-full py-3 text-center m-auto text-white" @click="submit()">Gold Coin Payment</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'modelActive',
        event: 'update:model-active',
    },
    props: {
        modelActive: {
            type: Boolean,
        },
        order: {
            type: Object
        }
    },
    data() {
        return {
            isAgree: false,
            submitBtn: false
        }
    },
    methods: {
        submit() {
            if(this.isAgree) {
                this.close()
                this.$emit('openBox')
            }
        },
        close() {
            this.$emit('update:model-active', false)
            this.isAgree = false
        }
    }
}
</script>