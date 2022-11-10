<template>
     <div v-show="modelActive" class="boxModal">
        <div class="boxModal-content">
            <span class="close-modal" @click="$emit('update:model-active', false)"><img :src="$asset+'/image/ui/Cross.svg'"></span>
            <div><img :src="$asset+'/image/ui/Gift.svg'" class="modal_header_img"></div>
            <div class="-mt-3"><img :src="$asset+'/image/ui/Congratz.svg'" class="m-auto"></div>
            <div class="text-center px-5 -mt-5">You have won special prize<span v-for="(prize,j) in prizes" :key="j"> {{prize.itemName}}<span v-if="j == prizes.length-1"></span><span v-else>,</span></span>.</div>
            <!-- <div class="overflow-x-auto overflow-y-hidden w-auto max-h-40"> -->
                <div class="flex flex-wrap justify-center my-4">
                    <div v-for="(prize,i) in prizes" :key="i" class="congratz_item_card">
                        <div class="congratz_item_card_header">
                            <img :src="$asset+'/image/ui/Mark.svg'" class="mark_img" alt="">
                        </div>
                        <div class="congratz_item_card_body">
                            <img :src="prize.image" width="50" height="50" class="m-auto">
                        </div>
                        <div class="congratz_item_card_footer text-center">
                            <div class="truncate px-2">{{prize.itemName}}</div>
                            <div>($ {{prize.price}})</div>
                        </div>
                    </div>
                </div>
            <!-- </div> -->
            <div class="flex justify-around">
                <div class=""><button class="btn_two rounded-full py-2 w-32 m-2 text-white">Sell</button></div>
                <div class=""><button class="btn_one rounded-full py-2 w-32 m-2 text-white">Collect</button></div>
            </div>
            <div class="flex justify-center mt-4 text-center text-sm" style="color:#8064E1;">
                <div class="self-center mr-3">
                    <img :src="$asset+'/image/ui/Share.svg'">
                </div>
                <div>Share your friends</div>
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
        prizes: {
            type: Array
        }
    },
}
</script>