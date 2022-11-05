<template>
     <div v-show="modelActive" class="boxModal">
        <div class="successModal-content">
            <div class="overflow-auto max-h-96">
                <div><img src="/image/ui/Success.svg" class="m-auto"></div>
                <div class="text-center font-bold text-3xl py-3">Top Up Successful! </div>
                <div class="px-8 text-center my-5">You have successful top up e-wallet for $ {{modalAmount}}</div>
                <div class="w-full my-9">
                    <div class="ok_btn rounded-full py-3 text-center w-40 m-auto text-white" @click="$emit('update:model-active', false)">OK</div>
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
        modalAmount: ''
    }
}
</script>