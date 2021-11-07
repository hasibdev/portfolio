<template>
    <div class="flex min-h-screen" :class="{'dark' : isDarkMode}">
        <!-- Sidebar -->
        <sidebar :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode"></sidebar>

        <!-- Main Content -->
        <main class="flex-grow dark:bg-gray-600">
            <Nuxt />
        </main>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
    components: {
        Sidebar,
    },
    data() {
        return {
            isDarkMode: false
        }
    },

    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode
        }
    },
}
</script>

<style lang="scss" scoped>
</style>