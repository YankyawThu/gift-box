<template>
     <div v-show="modelActive" class="boxModal">
        <div class="dataModal-content">
            <div class="">
                <div class="mt-5"><img :src="$asset+'/image/ui/Warning.svg'" class="m-auto"></div>
                <div class="text_warning text-center font-bold text-xl py-3 mt-3 my-5">{{__('Something went wrong')}}!</div>
                <div v-for="(error,i) in errors" :key="i" class="px-8 text-center my-2 text-xs text-white">
                    {{error[0]}}
                </div>
                <div class="w-full mb-5 mt-10">
                    <div class="btn_gradient rounded-full py-3 text-center w-40 m-auto text-white" @click="submit()">{{__('OK')}}</div>
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
        errors: {
            type: Object
        }
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