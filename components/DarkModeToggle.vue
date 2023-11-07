<template>
    <div class="fixed top-0 right-0 p-4">
        <button class="dark-mode-toggle" @click="toggleDarkMode">
            <span class="dark:hidden">🌞</span>
            <span class="hidden dark:inline">🌜</span>
        </button>
    </div>
</template>

<script setup>
import useDarkMode from '~/composables/useDarkMode'

const { darkMode, toggleDarkMode } = useDarkMode()
</script>

<style scoped>
.dark-mode-toggle {
    @apply p-2 rounded-full cursor-pointer transition-colors duration-300;
    @apply bg-gray-300 dark:bg-gray-600;
}
</style>