<template>
     <div v-show="modelActive" class="boxModal">
        <div class="dataModal-content">
            <div class="overflow-auto max-h-96">
                <div><img :src="$asset+'/image/ui/Success.svg'" class="m-auto"></div>
                <div class="text_c2 text-center font-bold text-xl py-3 mt-3 my-5">Created Successfully!</div>
                <!-- <div class="px-8 text-center my-5 text-xs text-white"></div> -->
                <div class="w-full my-5">
                    <div class="btn_gradient rounded-full py-3 text-center w-40 m-auto text-white" @click="submit()">OK</div>
                </div>
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
    },
    data() {
        return {
        }
    },
    methods: {
        submit() {
            this.$emit('update:model-active', false)
            location.reload()
        }
    }
}
</script>