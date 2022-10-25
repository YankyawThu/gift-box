<template>
    <div class="p-3 layout postion-relative">
        <header>
            <top></top>
        </header>
        <main>
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