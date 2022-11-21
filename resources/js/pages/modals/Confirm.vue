<template>
    <div v-show="modelActive" class="boxModal">
        <div class="dataModal-content">
            <div class="py-5">
                <div><img :src="$asset+'/image/ui/Trash.svg'" class="m-auto"></div>
                <div class="text_c2 text-center font-bold text-xl py-3 mt-3 my-5">Delete Item</div>
                <div class="px-8 text-center my-5 text-xs text-white">Are you sure you want to delete?</div>
                <div class="flex justify-around">
                    <div class=""><button class="border_grad1 before:rounded-full py-2 w-32 m-2 text-white" @click="$emit('update:model-active', false)">Cancel</button></div>
                    <div class=""><button class="btn_gradient rounded-full py-2 w-32 m-2 text-white" @click="submit()">Delete</button></div>
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
    methods: {
        submit() {
            this.$emit('update:model-active', false)
            this.$emit('submit')
            // location.reload()
        }
    }
}
</script>