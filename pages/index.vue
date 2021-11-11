<template>
    <div>
        <!-- About Section -->
        <about-section></about-section>

        <!-- Divider -->
        <div class="border-b border-gray-400"></div>

        <!-- Overview -->
        <overview-section></overview-section>

        <!-- Divider -->
        <div class="border-b border-gray-400 w-11/12 mx-auto"></div>

        <!-- Featured Projects -->
        <featured-projects></featured-projects>
    </div>
</template>

<script>
import AboutSection from '@/components/sections/home/About.vue'
import OverviewSection from '@/components/sections/home/Overview.vue'
import FeaturedProjects from '@/components/sections/home/FeaturedProjects.vue'


export default {
    components: {
        AboutSection,
        OverviewSection,
        FeaturedProjects
    },
}
</script>
