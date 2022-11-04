<template>
     <div class="boxModal">
        <div class="boxModal-content">
            <span class="close-button close-modal"><img src="/image/ui/Cross.svg"></span>
            <div><img src="/image/ui/Pocket.svg" class="absolute -top-6 left-36"></div>
            <div class="text-lg py-2 font-bold text-center">
                Payment
            </div>
            <div class="px-10 py-2" v-if="order.data">
                <div v-if="order.data.items">
                    <img :src="item.image" v-for="(item,i) in order.data.items" :key="i" width="50" height="50" class="m-auto">
                </div>
            </div>
            <div v-if="order.data" class="pt-2 text-center" style="color: #DF8E44;">{{order.data.name}}</div>
            <div v-if="order.data" class="py-1 text-center text-sm" style="color: #E74549;">({{order.data.price}} gold coins) <span v-if="order.coinNotEnough">Insufficient coin!</span></div>
            <div class="mt-7 text-sm px-2">
                ! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit faucibus lobortis phasellus.
            </div>
            <div class="flex flex-row text-sm rounded-lg px-3 py-2 my-4" style="background: #ECECFF;">
                <div class="self-center mr-3">
                    <input type="checkbox" class="w-5 h-5">
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                </div>
            </div>
            <div class="w-full mt-5 mb-2">
                <div class="ok_btn rounded-full py-3 text-center m-auto text-white close-button" @click="submit()">Gold Coin Payment</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        order: {
            type: Object
        }
    },
    methods: {
        submit() {
            this.$emit('openBox')
        }
    }
}
</script>