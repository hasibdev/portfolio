<template>
   <section class="p-14">
      <div class="lg:w-10/12">
         <h1 class="text-3xl tracking-wide">Hasibur Rahman</h1>
         <h3 class="text-lg font-thin mt-2 mb-6">Full-stack web developer</h3>
         <p class="text-lg">Starting out at the age of 17 I never stopped learning new programming skills and languages. Early I started creating websites for curiosity and just for fun as well. And then I became a good web designer with HTML, CSS, and jQuery (jQuery was a hero!). Besides Front-end development, I also explored Backend and other non-web-only technologies. This passion has since lasted and led to my decision to work as a freelance web developer. The success and fun I have in this job are immense and really keep that passion burningly alive.</p>
      </div>

      <div class="md:flex mt-10">
         <!-- Left Column -->
         <div class="md:w-7/12 pr-8 mt-8">
            <p class="mb-4">Starting web development on the frontend using modern frameworks like (ReactJS and VueJS) I also became more and more of a Backend developer with (Node JS and Laravel) frameworks. I love both worlds nowadays!</p>
            <p class="mb-4">
               Not only developing, but I'm also very good at deploying web applications into Linux servers. And I have a very good understanding of CI/CD pipeline with Github Actions and Gitlab Runner.
            </p>

            <p class="mb-4">
               Besides Developing and deploying, I explored a little bit of Robotics staff. That's why I bought an Arduino learning kit online. When I feel boring to code then, why not make a Robot!
            </p>

            <p>Want to know how I may help your project? Check out my project <nuxt-link class="text-primary" to="/portfolio">portfolio</nuxt-link> and online <nuxt-link class="text-primary" to="/resume">resume</nuxt-link>.</p>

            <div class="mt-14">
               <nuxt-link class="px-5 py-2 rounded my-1 inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300" to="/portfolio">
                  <font-awesome-icon class="mr-2" :icon="['fas', 'arrow-circle-right']"></font-awesome-icon> View Portfolio
               </nuxt-link>
               <nuxt-link class="px-5 py-2 rounded my-1 inline-block text-white bg-gray-700 hover:bg-gray-800 transition-colors duration-300" to="/resume">
                  <font-awesome-icon class="mr-2" :icon="['fas', 'file-alt']"></font-awesome-icon> View Resume
               </nuxt-link>
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
