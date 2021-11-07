<template>
    <header id="sidebar_header">
        <div class="border-b border-gray-300 mb-6 pb-4">
            <h3 class="text-2xl text-center mt-8 mb-6 font-bold">Hasibur Rahman</h3>
            <!-- Image -->
            <div class="rounded-full overflow-hidden w-36 h-36 mx-auto">
                <img src="/images/fb-me.jpg" alt="Hasibur Rahman">
            </div>
            <!-- Bio -->
            <p class="text-center mt-6 ">Hi, I'm Hasib and I'm a senior Front-end Developer. Welcome to my personal website! </p>

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
        <nav class="flex flex-col text-gray-100">
            <nuxt-link to="/" class="p-1 mb-1 hover:text-gray-800 transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">About Me</span>
            </nuxt-link>
            <nuxt-link to="/portfolio" class="p-1 mb-1 hover:text-gray-800 transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'laptop-code']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">Portfolio</span>
            </nuxt-link>
            <nuxt-link to="/services" class="p-1 mb-1 hover:text-gray-800 transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'briefcase']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">Services &amp; Pricing</span>
            </nuxt-link>
            <nuxt-link to="/resume" class="p-1 mb-1 hover:text-gray-800 transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'file-alt']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">Resume</span>
            </nuxt-link>
            <nuxt-link to="/blog" class="p-1 mb-1 hover:text-gray-800 transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'blog']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">Blog</span>
            </nuxt-link>
            <nuxt-link to="/contact" class="p-1 mb-1 hover:text-gray-800 transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">Contact</span>
            </nuxt-link>
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

    @apply text-white bg-green-600 p-4 flex flex-col items-center h-screen overflow-x-hidden overflow-y-auto;

    .social-icon {
        @apply p-2 mx-1 text-lg bg-gray-200 rounded-full w-10 h-10 inline-block text-green-600 text-center hover:text-green-800 transition-colors duration-300;
    }

    // Scroll bar style
    /* width */
    &::-webkit-scrollbar {
        width: 6px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        @apply bg-green-800 rounded;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        @apply bg-green-900;
    }
}
</style>