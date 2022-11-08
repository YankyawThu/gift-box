<template>
     <div v-show="modelActive" class="boxModal">
        <div class="boxModal-content">
            <span class="close-modal" @click="$emit('update:model-active', false)"><img :src="$assetUrl+'image/ui/Cross.svg'"></span>
            <div class="overflow-auto max-h-96">
                <div>Hello,123</div>
                <div>Save the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prizeSave the wish value and redeem the happy wish prize</div>
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
        }
    },
}
</script>

