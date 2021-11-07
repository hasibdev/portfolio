<template>
    <div class="flex">
        <!-- Sidebar -->
        <sidebar></sidebar>

        <!-- Main Content -->
        <main class="flex-grow">
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