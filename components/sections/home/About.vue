<template>
    <section class="p-14">
        <div class="lg:w-10/12">
            <h1 class="text-3xl">Hasibur Rahman</h1>
            <h3 class="text-lg font-thin mt-2 mb-6">Senior Front-end Developer</h3>
            <p class="text-lg">Starting out at the age of 17 I never stopped learning new programming skills and languages. Early I started creating websites for curiosity and just for fun as well. And then I became a good web designer with HTML, CSS, and jQuery (jQuery was a hero!). Besides web development, I also explored Python and other non-web-only technologies. This passion has since lasted and led to my decision to work as a freelance web developer. The success and fun I have in this job are immense and really keep that passion burningly alive.</p>
        </div>

        <div class="md:flex mt-10">
            <!-- Left Column -->
            <div class="md:w-7/12 pr-8 mt-8">
                <p class="mb-4">Starting web development on the frontend using modern frameworks like (ReactJS and VueJS) I also became more and more of a Backend developer with (NOdeJS and Laravel) frameworks. I love both worlds nowadays!</p>
                <p>Want to know how I may help your project? Check out my project <nuxt-link class="text-primary" to="/portfolio">portfolio</nuxt-link> and online <nuxt-link class="text-primary" to="/resume">resume</nuxt-link>.</p>

                <div class="mt-20">
                    <nuxt-link class="px-8 py-3 rounded my-1 inline-block text-white dark:text-gray-800 bg-primary" to="/portfolio">View Portfolio</nuxt-link>
                    <nuxt-link class="px-8 py-3 rounded my-1 inline-block text-white dark:text-gray-800 bg-gray-600" to="/resume">View Resume</nuxt-link>
                </div>
            </div>
            <!-- Right Colomn -->
            <div class="md:w-5/12 p-2 my-10 md:my-0">
                <img src="/images/processed.jpeg" alt="Hasibur Rahman">
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