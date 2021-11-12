<template>
    <div>
        <div class="text-center p-14 bg-gray-10 dark:bg-black">
            <h2 class="text-2xl mb-6">Online Resume</h2>
            <nuxt-link class="px-5 py-2 rounded my-1 inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300" to="/portfolio">
                <font-awesome-icon class="mr-2" :icon="['fas', 'file-pdf']"></font-awesome-icon> Download PDF
            </nuxt-link>
        </div>

        <!-- Resume -->

        <div class="p-10">
            <div class="resume-container text-sm">
                <!-- Header -->
                <div class="sm:flex justify-between">
                    <div>
                        <h2 class="text-3xl font-bold tracking-widest text-primary">Hasibur Rahman</h2>
                        <p class="font-thin text-lg mt-1">Senior Front-end Developer</p>
                    </div>
                    <div>
                        <ul class="sm:border-l sm:pl-6 sm:mt-0 mt-6 text-gray-600">
                            <li class="mb-1">
                                <font-awesome-icon class="mr-2" :icon="['fas', 'phone-square']"></font-awesome-icon> <a class="underline" href="tel:+8801 580 919 000">+8801 580 919 000</a>
                            </li>
                            <li class="mb-1">
                                <font-awesome-icon class="mr-2" :icon="['fas', 'envelope-square']"></font-awesome-icon> <a class="underline" href="mailto:hasib.active@gmail.com">hasib.active@gmail.com</a>
                            </li>
                            <li class="mb-1">
                                <font-awesome-icon class="mr-2" :icon="['fas', 'globe']"></font-awesome-icon> <a class="underline" href="https://hasibapp.com" target="_blank">hasibapp.com</a>
                            </li>
                            <li>
                                <font-awesome-icon class="mr-2" :icon="['fas', 'map-marker-alt']"></font-awesome-icon> <span>315/8 Ulon, Rampura</span> <br> <span class="ml-6">Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Divider -->
                <div class="border-b border-gray-300 my-6"></div>

                <!-- Bio -->
                <div class="md:flex md:items-center">
                    <div class="md:w-1/5">
                        <img class="rounded-full w-36 mx-auto" src="/images/me-croped.jpg" alt="">
                    </div>
                    <p class="md:w-4/5 pl-4 mt-4 md:mt-0">
                        Starting out at the age of 17 I never stopped learning new programming skills and languages. Early I started creating websites for curiosity and just for fun as well. And then I became a good web designer with HTML, CSS, and jQuery (jQuery was a hero!). Besides Front-end development, I also explored Backend and other non-web-only technologies. This passion has since lasted and led to my decision to work as a freelance web developer. The success and fun I have in this job are immense and really keep that passion burningly alive.
                    </p>
                </div>

                <!-- Divider -->
                <div class="border-b border-gray-300 my-6"></div>

                <!-- main content -->
                <div class="lg:flex mt-10">
                    <!-- Left -->
                    <div class="lg:w-9/12">
                        <h3 class="text-xl border-l-4 pl-6 border-primary text-primary">Work Experiences</h3>

                        <h4 class="text-lg font-bold mt-5 mb-2">Front-end Developer</h4>
                        <p>Starting web development on the frontend using modern frameworks like (ReactJS and VueJS) I also became more and more of a Backend developer with (Node JS and Laravel) frameworks. I love both worlds nowadays!</p>
                        <p>Want to know how I may help your project? Check out my project <nuxt-link class="text-primary" to="/portfolio">portfolio</nuxt-link> and online <nuxt-link class="text-primary" to="/resume">resume</nuxt-link>.</p>

                        <ul class="list-disc pl-8 mt-4">
                            <li>List Item One</li>
                            <li>Example List Item Two</li>
                            <li>Text List Item Lorem</li>
                        </ul>

                        <h4 class="text-lg font-bold mt-5 mb-2">Front-end Developer</h4>
                        <p>Starting web development on the frontend using modern frameworks like (ReactJS and VueJS) I also became more and more of a Backend developer with (Node JS and Laravel) frameworks. I love both worlds nowadays!</p>
                        <p>Want to know how I may help your project? Check out my project <nuxt-link class="text-primary" to="/portfolio">portfolio</nuxt-link> and online <nuxt-link class="text-primary" to="/resume">resume</nuxt-link>.</p>

                        <ul class="list-disc pl-8 mt-4">
                            <li>List Item One</li>
                            <li>Example List Item Two</li>
                            <li>Text List Item Lorem</li>
                        </ul>

                        <!-- Projects -->
                        <h3 class="text-xl border-l-4 pl-6 border-primary text-primary mt-10">Projects</h3>

                        <h4 class="text-lg font-bold mt-5 mb-2">Project Lorem Ipsum</h4>
                        <p>You can use this section for your side projects. You can provide a project link here as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                        <h4 class="text-lg font-bold mt-5 mb-2">Project Sed Fringilla</h4>
                        <p>You can use this section for your side projects. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

                        <h4 class="text-lg font-bold mt-5 mb-2">Project Sed Fringilla</h4>
                        <p>You can use this section for your side projects. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                    </div>

                    <!-- Right -->
                    <div class="lg:w-3/12 lg:pl-8 lg:ml-8 lg:border-l mt-8 lg:mt-0">
                        <h3 class="text-xl border-l-4 pl-4 border-primary text-primary">Skills</h3>

                        <h4 class="text-lg font-bold mt-5 mb-2">Technical</h4>
                        <ul>
                            <li>JavaScript/React/Vue</li>
                            <li>Node.js</li>
                            <li>PHP/Laravel</li>
                            <li>MySQL/PostgreSQL</li>
                            <li>Object-oriented design</li>
                            <li>Design and implement database structures</li>
                            <li>Lead and deliver complex software systems</li>
                        </ul>

                        <h4 class="text-lg font-bold mt-5 mb-2">Professional</h4>
                        <ul>
                            <li>Effective communication</li>
                            <li>Team player</li>
                            <li>Strong problem solver</li>
                            <li>Good time management</li>
                        </ul>

                        <!-- Education -->
                        <h3 class="text-xl border-l-4 pl-4 border-primary text-primary mt-8">Education</h3>
                        <div class="mt-3">
                            <p>MSc in Computer Science</p>
                            <p class="text-gray-600">University College Dhaka</p>
                            <p class="text-gray-500 text-xs">2020 - 2021</p>
                        </div>
                        <div class="mt-3">
                            <p>BSc Maths and Physics</p>
                            <p class="text-gray-600">Imperial College Dhaka</p>
                            <p class="text-gray-500 text-xs">2015 - 2019</p>
                        </div>

                        <!-- Languages -->
                        <h3 class="text-xl border-l-4 pl-4 border-primary text-primary mt-8">Languages</h3>
                        <ul class="mt-3">
                            <li class="mt-1">Bangla <span class="text-gray-500">(Native)</span></li>
                            <li class="mt-1">English <span class="text-gray-500">(Fluent)</span></li>
                            <li class="mt-1">Hindi <span class="text-gray-500">(Fluent)</span></li>
                        </ul>

                        <!-- Interests -->
                        <h3 class="text-xl border-l-4 pl-4 border-primary text-primary mt-8">Interests</h3>
                        <ul class="mt-3">
                            <li class="mt-2">Travelling</li>
                            <li class="mt-2">Swimming</li>
                            <li class="mt-2">Football</li>
                        </ul>
                    </div>
                </div>

                <!-- Divider -->
                <div class="border-b border-gray-300 my-6"></div>

                <!-- Footer -->
                <div class="">
                    <ul class="flex justify-center items-center">
                        <li class="flex items-center text-gray-700">
                            <font-awesome-icon class="mr-2 text-lg" :icon="['fab', 'facebook-square']"></font-awesome-icon>
                            <a href="https://www.facebook.com/Hasibur.Rahman.web" target="_blank" class="text-xs">facebook.com/Hasibur.Rahman.web</a>
                        </li>
                        <li class="flex items-center text-gray-700 mx-3">
                            <font-awesome-icon class="mr-2 text-lg" :icon="['fab', 'github-square']"></font-awesome-icon>
                            <a href="https://github.com/hasibDev" target="_blank" class="text-xs">github.com/hasibDev</a>
                        </li>
                        <li class="flex items-center text-gray-700 mx-3">
                            <font-awesome-icon class="mr-2 text-lg" :icon="['fab', 'twitter-square']"></font-awesome-icon>
                            <a href="https://twitter.com/Hasibur40252192" target="_blank" class="text-xs">twitter.com/Hasibur40252192</a>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.resume-container {
    max-width: 1140px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
    @apply mx-auto p-8;
}
</style>