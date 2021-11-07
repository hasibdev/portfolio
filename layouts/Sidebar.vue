<template>
    <header id="sidebar_header" class="text-white bg-green-600 p-4 flex flex-col items-center">
        <div class="border-b border-gray-300 mb-6 pb-4">
            <h3 class="text-2xl text-center mt-8 mb-6 font-bold">Hasibur Rahman</h3>
            <!-- Image -->
            <div class="rounded-full overflow-hidden w-36 h-36 mx-auto">
                <img src="/images/fb-me.jpg" alt="Hasibur Rahman">
            </div>
            <!-- Bio -->
            <p class="text-center mt-6">Hi, I'm Hasib and I'm a senior Front-end Developer. Welcome to my personal website! </p>

            <!-- Social Icons -->
            <div class="flex justify-center items-center my-4">
                <a href="https://twitter.com/Hasibur40252192" target="_blank" class="social-icon">
                    <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
                </a>

                <a href="https://www.facebook.com/Hasibur.Rahman.web" target="_blank" class="social-icon">
                    <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon>
                </a>

                <a href="https://github.com/hasibDev" target="_blank" class="social-icon">
                    <font-awesome-icon :icon="['fab', 'github-alt']"></font-awesome-icon>
                </a>

                <a href="https://stackoverflow.com/users/16370387/hasibur-rahman" target="_blank" class="social-icon">
                    <font-awesome-icon :icon="['fab', 'stack-overflow']"></font-awesome-icon>
                </a>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-col">
            <nuxt-link to="/">About Me</nuxt-link>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
            <nuxt-link to="/services">Services &amp; Pricing </nuxt-link>
            <nuxt-link to="/resume">Resume</nuxt-link>
            <nuxt-link to="/blog">Blog</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
        </nav>

    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#sidebar_header {
    width: 280px;

    .social-icon {
        @apply p-2 mx-1 text-lg bg-gray-200 rounded-full w-10 h-10 inline-block text-green-600 text-center;
    }
}
</style>