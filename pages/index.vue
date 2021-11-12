<template>
    <div>
        <!-- About Section -->
        <about-section></about-section>

        <!-- Divider -->
        <div class="border-b border-gray-400"></div>

        <!-- Overview -->
        <overview-section></overview-section>

        <!-- Divider -->
        <div class="border-b border-gray-400 mx-auto" style="width: 95%"></div>

        <!-- Featured Projects -->
        <featured-projects></featured-projects>

        <!-- Divider -->
        <div class="border-b border-gray-400 mx-auto" style="width: 95%"></div>

        <!-- Testimonials -->
        <testimonials></testimonials>

        <!-- Divider -->
        <div class="border-b border-gray-400 mx-auto mt-10" style="width: 95%"></div>

        <!-- Latest blog post -->
        <latest-blog></latest-blog>
    </div>
</template>

<script>
import AboutSection from '@/components/sections/home/About.vue'
import OverviewSection from '@/components/sections/home/Overview.vue'
import FeaturedProjects from '@/components/sections/home/FeaturedProjects.vue'
import Testimonials from '@/components/sections/home/Testimonials.vue'
import LatestBlog from '@/components/sections/home/LatestBlog.vue'


export default {
    components: {
        AboutSection,
        OverviewSection,
        FeaturedProjects,
        Testimonials,
        LatestBlog
    },
}
</script>
