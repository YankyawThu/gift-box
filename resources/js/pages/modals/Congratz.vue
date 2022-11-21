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
                            <input :id="'itemChecked'+i" @click="tick(i)" v-model="prizeIds[i]" class="mark_img form-check-input h-3 w-3 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none bg-no-repeat bg-center bg-contain" type="checkbox">
                        </div>
                        <label class="form-check-label" :for="'itemChecked'+i">
                            <div class="congratz_item_card_body">
                                <img :src="prize.image" width="50" height="50" class="m-auto">
                            </div>
                            <div class="congratz_item_card_footer text-center">
                                <div class="truncate px-2" style="font-size:10px;">{{prize.itemName}}</div>
                                <div class="pb-1" style="font-size:9px;">({{prize.price}} Ks)</div>
                            </div>
                        </label>   
                    </div>
                </div>
            <!-- </div> -->
            <div class="flex justify-around">
                <div class=""><button class="btn_two rounded-full py-2 w-32 m-2 text-white" @click="sell()">Sell</button></div>
                <div class=""><button class="btn_one rounded-full py-2 w-32 m-2 text-white" @click="collect()">Collect</button></div>
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

import axios from 'axios'

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
    data() {
        return {
            prizeIds: [],
            selects: []
        }
    },
    watch: {
        prizes: {
            handler() {
                this.$props.prizes.forEach(prize => {
                    this.prizeIds.push(prize.prizeId)
                    this.selects.push(prize.prizeId)
                });
            }
        }
    },
    methods: {
        sell() {
            axios.post('/recycle', {
                prizeIds: this.selects
            }).then(res => {
                this.$emit('update:model-active', false)
            })
        },
        collect() {
            this.$emit('update:model-active', false)
            this.$emit('showAddress', this.selects.filter(Boolean))
        },
        tick(i) {
            if(this.prizeIds[i] == false) {
                // console.log('1')
                this.selects[i] = this.$props.prizes[i].prizeId
            }
            else {
                // console.log('2')
                this.selects[i] = false
            }
        }
    }
}
</script>