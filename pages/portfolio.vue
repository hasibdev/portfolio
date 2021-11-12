<template>
    <div class="">
        <div class="text-center p-14 bg-gray-10 dark:bg-black">
            <h2 class="text-2xl">Portfolio Page</h2>
            <p class="mt-3 mb-10">Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <br> I'm taking on freelance work at the moment. Want some help building your software?</p>
            <nuxt-link class="px-5 py-2 rounded my-1 inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300" to="/portfolio">
                <font-awesome-icon class="mr-2" :icon="['fas', 'paper-plane']"></font-awesome-icon> Hire Me
            </nuxt-link>
        </div>

        <!-- Divider -->
        <div class="border-b border-gray-200 dark:border-gray-800"></div>

    </div>
</template>

<script>
// import isotope from 'vueisotope'

export default {
    // components: {
    //     isotope,
    // },
}
</script>

<style lang="scss" scoped>
</style>