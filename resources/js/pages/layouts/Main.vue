<template>
    <div class="h-screen">
        <!-- <header>
            <top></top>
        </header> -->
        <main class="pb-20 pt-4 px-4">
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
