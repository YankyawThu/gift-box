<template>
    <div v-show="modelActive" class="boxModal">
        <div class="boxModal-content">
            {{addresses}}
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
            addresses: []
        }
    },
    watch: {
        modelActive: {
            handler() {
                axios.get('/user/shipping-address/get')
                    .then(res => {
                        this.addresses = [...res.data]
                    })
            }
        }
    },
    methods: {
        submit() {
            axios.post(`/shipment-apply`, {
                'addressId': '',
                'prizeIds': this.$props.prizes
            }).then(res => {
                console.log(res)
            }) 
        }
    }
}
</script>