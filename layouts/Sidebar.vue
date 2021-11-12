<template>
    <header id="sidebar_header" class="lg:relative lg:translate-x-0 absolute transform custom-scrollbar" :class="{'-translate-x-full' : !isSidebarOpen}">
        <div class="">
            <h3 class="text-2xl text-center mt-2 mb-6 font-bold tracking-wide">Hasib</h3>
            <!-- Image -->
            <div class="rounded-full overflow-hidden w-36 h-36 mx-auto">
                <img src="/images/fb-me.jpg" alt="Hasibur Rahman">
            </div>
            <!-- Bio -->
            <p class="text-center mt-6 ">I'm a web developer specialised in frontend for complex scalable web apps. And also I have a very good understanding of backend technologies as well.</p>

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

        <!-- Divider -->
        <div class="border-b border-gray-400 w-11/12 my-5"></div>

        <!-- Navigation -->
        <nav class="flex flex-col text-gray-100">
            <nuxt-link to="/" class="p-1 mb-1 hover:text-primary-dark transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">About Me</span>
            </nuxt-link>
            <nuxt-link to="/portfolio" class="p-1 mb-1 hover:text-primary-dark transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'laptop-code']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">Portfolio</span>
            </nuxt-link>
            <!-- <nuxt-link to="/services" class="p-1 mb-1 hover:text-primary-dark transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'briefcase']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">Services &amp; Pricing</span>
            </nuxt-link> -->
            <nuxt-link to="/resume" class="p-1 mb-1 hover:text-primary-dark transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'file-alt']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">Resume</span>
            </nuxt-link>
            <nuxt-link to="/blog" class="p-1 mb-1 hover:text-primary-dark transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'blog']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">Blog</span>
            </nuxt-link>
            <nuxt-link to="/contact" class="p-1 mb-1 hover:text-primary-dark transition-colors duration-300">
                <span class="inline-block w-8 text-center">
                    <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
                </span>
                <span class="text-md font-semibold">Contact</span>
            </nuxt-link>
        </nav>

        <!-- Divider -->
        <div class="border-b border-gray-400 w-11/12 my-5"></div>

        <!-- Dark Mode -->

        <div>
            <div>
                <font-awesome-icon :icon="['fas', 'adjust']"></font-awesome-icon> {{!isDarkMode?'Dark':'Light'}} Mode
            </div>

            <!-- Toggled switch -->
            <div class="flex justify-center items-center mt-4 cursor-pointer">
                <!-- Switch Container -->
                <div class="w-14 h-7 flex items-center rounded-full mx-3 px-1" :class="`${isDarkMode?'bg-primary':'bg-navy'}`" @click="$emit('toggleDarkMode')">
                    <!-- Switch -->
                    <div class=" bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 " :class="{'translate-x-7': isDarkMode}"></div>
                </div>
            </div>
        </div>

    </header>
</template>

<script>
export default {
    props: {
        isDarkMode: {
            type: Boolean,
            required: true
        },
        isSidebarOpen: {
            type: Boolean,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
#sidebar_header {
    // width: 300px !important;
    @apply z-20 lg:w-96 w-72 text-white bg-primary p-4 flex flex-col items-center h-screen overflow-x-hidden overflow-y-auto dark:bg-navy transition-all duration-300;

    .social-icon {
        @apply p-2 mx-1 text-lg bg-gray-200 rounded-full w-10 h-10 inline-block text-green-600 text-center hover:text-green-800 transition-colors duration-300;
    }
}
</style>