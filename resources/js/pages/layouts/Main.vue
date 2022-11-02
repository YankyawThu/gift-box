<template>
    <main class="h-screen bg-gray-50">
        <!-- <header>
            <top></top>
        </header> -->
        <main class="pb-20 pt-4 px-3">
            <slot></slot>
        </main>
        <footer>
            <bot></bot>
        </footer>
    </main>
</template>

<script>

import top from './Header.vue'
import bot from './Footer.vue'

export default {
    components: {
        top,
        bot
    }
}
</script>
