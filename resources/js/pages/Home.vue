<template>
    <main-layout>
        home
    </main-layout>
</template>

<script>

import mainLayout from './layouts/Main.vue'

export default {
    components: {
        mainLayout
    },
    props: {
        data: {
            type: Array,
            required: true
        }
    }
}
</script>