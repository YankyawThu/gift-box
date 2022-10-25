<template>
    <div class="h-screen bg-gray-50">
        <header>
            <top></top>
        </header>
        <main class="py-14 px-3">
            <slot></slot>
        </main>
        <footer>
            <bot></bot>
        </footer>
    </div>
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