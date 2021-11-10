<template>
    <div>
        <!-- About Section -->
        <about-section></about-section>

        <!-- Divider -->
        <div class="border-b border-gray-400"></div>

        <!-- Overview -->
        <overview-section></overview-section>
    </div>
</template>

<script>
import AboutSection from '@/components/sections/home/About.vue'
import OverviewSection from '@/components/sections/home/Overview.vue'


export default {
    components: {
        AboutSection,
        OverviewSection,

    },
}
</script>
