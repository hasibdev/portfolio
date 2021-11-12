<template>
    <div class="">
        <div class="text-center p-14 bg-gray-10 dark:bg-black">
            <h2 class="text-2xl">Portfolio</h2>
            <p class="mt-3 mb-10">Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <br> I'm taking on freelance work at the moment. Want some help building your software?</p>
            <nuxt-link class="px-5 py-2 rounded my-1 inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300" to="/portfolio">
                <font-awesome-icon class="mr-2" :icon="['fas', 'paper-plane']"></font-awesome-icon> Hire Me
            </nuxt-link>
        </div>

        <!-- Divider -->
        <div class="border-b border-gray-200 dark:border-gray-800"></div>

        <div class="p-14">
            <div class="grid lg:grid-cols-2 gap-5">

                <div v-for="item in 6" :key="item" class="group 2xl:flex bg-gray-10 text-black dark:text-white dark:bg-gray-800 transition-colors duration-300 relative">
                    <div class="2xl:w-2/5 max-h-72 overflow-hidden">
                        <img src="/images/project-3.jpg" alt="" class="w-full">
                    </div>
                    <div class="p-3 2xl:w-3/5">
                        <h4 class="text-xl mb-2">Project Heading</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, sapiente. Ea quam harum voluptas natus ex aperiam, officiis sint quos quasi corrupti fugit dolorum libero laudantium commodi. Nisi, obcaecati esse!</p>
                        <p class="mt-4">Client: Google</p>
                    </div>

                    <!-- Overlay -->
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute w-full h-full left-0 top-0 bg-gray-50 bg-opacity-70 flex justify-center items-center">
                        <nuxt-link class="px-5 py-2 rounded my-1 inline-block text-white bg-gray-700 hover:bg-gray-800  transition-colors duration-300" to="/portfolio">
                            <font-awesome-icon class="mr-2" :icon="['fas', 'eye']"></font-awesome-icon> View More
                        </nuxt-link>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
// import isotope from 'vueisotope'

export default {
    // scrollToTop: true,
    // components: {
    //     isotope,
    // },
}
</script>

<style lang="scss" scoped>
</style>