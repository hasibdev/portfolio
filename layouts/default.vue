<template>
    <div class="flex min-h-screen dark">
        <!-- Sidebar -->
        <sidebar></sidebar>

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
}
</script>

<style lang="scss" scoped>
</style>