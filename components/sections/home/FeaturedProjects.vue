<template>
    <section class="p-14">
        <h2 class="text-3xl border-l-4 pl-6 border-primary">Featured Projects</h2>

        <div class="mt-8">
            <div class="grid lg:grid-cols-2 gap-5">
                <div class="group 2xl:flex bg-gray-10 text-black dark:text-white dark:bg-gray-800 transition-colors duration-300 relative">
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
                <div class="group 2xl:flex bg-gray-10 text-black dark:text-white dark:bg-gray-800 transition-colors duration-300 relative">
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
                <div class="group 2xl:flex bg-gray-10 text-black dark:text-white dark:bg-gray-800 transition-colors duration-300 relative">
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
                <div class="group 2xl:flex bg-gray-10 text-black dark:text-white dark:bg-gray-800 transition-colors duration-300 relative">
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

            <div class="flex justify-center mt-14">
                <nuxt-link class="px-5 py-2 rounded inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300" to="/portfolio">
                    <font-awesome-icon class="mr-2" :icon="['fas', 'arrow-circle-right']"></font-awesome-icon> View Portfolio
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>