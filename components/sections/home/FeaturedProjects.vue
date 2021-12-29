<template>
    <section class="p-14">
        <h2 class="text-3xl border-l-4 pl-6 border-primary">Featured Projects</h2>

        <div class="mt-8">
            <div class="grid lg:grid-cols-2 gap-5">
                <!-- Item -->
                <div class="group 2xl:flex bg-gray-10 text-black dark:text-white dark:bg-gray-800 transition-colors duration-300 relative">
                    <div class="2xl:w-2/5 max-h-72 overflow-hidden">
                        <img src="/images/project-1.jpg" alt="" class="w-full">
                    </div>
                    <div class="p-3 2xl:w-3/5">
                        <h4 class="text-xl mb-2">Sozashop</h4>
                        <p>This is an Inventory management application. Our team uses Laravel API for backend and Nuxt JS to manage front-end. This is the most complecated project I'have ever done. I enjoyed and learnd lots of thinks from this project.</p>
                        <p class="mt-4">Client: Shamim Ahmed</p>
                    </div>

                    <!-- Overlay -->
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute w-full h-full left-0 top-0 bg-gray-50 bg-opacity-70 flex justify-center items-center">
                        <a href="https://sozashop-dev.ahmedshakil.com" target="_blank" class="px-5 py-2 rounded my-1 inline-block text-white bg-gray-700 hover:bg-gray-800  transition-colors duration-300">
                            <font-awesome-icon class="mr-2" :icon="['fas', 'eye']"></font-awesome-icon> Visit Site
                        </a>
                    </div>
                </div>
                <!-- Item -->
                <div class="group 2xl:flex bg-gray-10 text-black dark:text-white dark:bg-gray-800 transition-colors duration-300 relative">
                    <div class="2xl:w-2/5 max-h-72 overflow-hidden">
                        <img src="/images/project-4.jpg" alt="" class="w-full">
                    </div>
                    <div class="p-3 2xl:w-3/5">
                        <h4 class="text-xl mb-2">OutChimp</h4>
                        <p>This is similar to an online marketplace where a buyer can post their job offer and user can apply for the job. Our team uses Laravel API for backend and Nuxt JS to manage front-end. Here I learned how a marketplace actually works and manage multiple authenticated user.</p>
                        <p class="mt-4">Client: Niloy Khan</p>
                    </div>

                    <!-- Overlay -->
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute w-full h-full left-0 top-0 bg-gray-50 bg-opacity-70 flex justify-center items-center">
                        <a href="https://outchimp.com" target="_blank" class="px-5 py-2 rounded my-1 inline-block text-white bg-gray-700 hover:bg-gray-800  transition-colors duration-300">
                            <font-awesome-icon class="mr-2" :icon="['fas', 'eye']"></font-awesome-icon> Visit Site
                        </a>
                    </div>
                </div>
                <!-- Item -->
                <div class="group 2xl:flex bg-gray-10 text-black dark:text-white dark:bg-gray-800 transition-colors duration-300 relative">
                    <div class="2xl:w-2/5 max-h-72 overflow-hidden">
                        <img src="/images/wrapmotif.png" alt="" class="w-full">
                    </div>
                    <div class="p-3 2xl:w-3/5">
                        <h4 class="text-xl mb-2">Wrapmotif</h4>
                        <p>This project was made for a company who wants to grow their company and satisfy their clients. This project made with Laravel jetstream for backend admin panel Nuxt JS to manage front-end.</p>
                        <p class="mt-4">Client: Navid</p>
                    </div>

                    <!-- Overlay -->
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute w-full h-full left-0 top-0 bg-gray-50 bg-opacity-70 flex justify-center items-center">
                        <a href="https://wrapstock.ahmedshakil.com/" target="_blank" class="px-5 py-2 rounded my-1 inline-block text-white bg-gray-700 hover:bg-gray-800  transition-colors duration-300">
                            <font-awesome-icon class="mr-2" :icon="['fas', 'eye']"></font-awesome-icon> Visit Site
                        </a>
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
