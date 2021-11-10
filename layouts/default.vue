<template>
    <client-only>
        <div class="flex min-h-screen" :class="{'dark' : isDarkMode}">
            <!-- Sidebar -->
            <sidebar :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode"></sidebar>

            <!-- Main Content -->
            <main class="main-content">
                <Nuxt />
            </main>
        </div>
    </client-only>
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
.main-content {
    @apply w-full text-black dark:text-white dark:bg-black transition-all duration-300;
}
</style>