<template>
     <div v-show="modelActive" class="boxModal">
        <div class="boxModal-content">
            <span class="close-modal" @click="$emit('update:model-active', false)"><img src="/image/ui/Cross.svg"></span>
            <div>Congratulations</div>
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