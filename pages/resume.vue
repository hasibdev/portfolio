<template>
    <div>
        <div class="text-center p-10 bg-gray-10 dark:bg-black">
            <h2 class="text-2xl mb-6">Online Resume</h2>
            <a href="/Hasibur-Rahman-cv.pdf" target="_blank" @click="downloadResume" class="px-5 py-2 rounded my-1 inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300">
                <font-awesome-icon class="mr-2" :icon="['fas', 'file-pdf']"></font-awesome-icon> Download PDF
            </a>
        </div>

        <!-- Resume -->

        <div class="p-10">
            <div class="resume-container text-sm">
                <!-- Print container -->
                <div>
                    <!-- Header -->
                    <div class="sm:flex justify-between">
                        <div>
                            <h2 class="text-3xl font-bold tracking-widest text-primary">Hasibur Rahman</h2>
                            <p class="font-thin text-lg mt-1">Full-stack web developer</p>
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
                            I am a professional full-stack web developer since 2018. I can design and develop any type of website, web-based application using PHP Laravel framework and Vue Js. <br>
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

                            <h4 class="text-lg font-bold mt-5">Full-stack web developer</h4>
                            <h6 class="font-thin mb-2">At - <a href="https://999itsolution.com" target="_blank" rel="noopener noreferrer">999 It Solutions</a></h6>
                            <p>I have been working with 999 It Solutions for more than two year. And I learned lots of things from them. Some of them are, how to work professionally, team management, and better coding structure. Primarily they uses Laravel for their backend and Vue JS for the front-end development.</p>
                            <p>Some of the project I'have done with this team.</p>
                            <ul class="list-disc pl-8 mt-4">
                                <li>Sozashop - (Inventory)</li>
                                <li>OutChimp - (Marketplace)</li>
                                <li>Wrapmotif - (Car wrapping company)</li>
                            </ul>

                            <h4 class="text-lg font-bold mt-5">Front-end Developer</h4>
                            <h6 class="font-thin mb-2">At - Coder Eyes</h6>
                            <p></p>
                            <p>This is a very small team where I worked as a front-end developer. That was my first real-life working experience. They make templates for WordPress and some other CMS management systems.</p>
                            <p>Some of the project I'have done with this team.</p>
                            <ul class="list-disc pl-8 mt-4">
                                <li>Hexa Blog - (Blog template)</li>
                                <li>Contra - (Business template)</li>
                                <li>Agentur - (Personal website)</li>
                            </ul>

                            <!-- Projects -->
                            <h3 class="text-xl border-l-4 pl-6 border-primary text-primary mt-10">Projects</h3>

                            <h4 class="text-lg font-bold mt-5 mb-2">Sozashop - (Inventory)</h4>
                            <p>This is an Inventory management application. Our team uses Laravel API for backend and Nuxt JS to manage front-end. This is the most complecated project I'have ever done. I enjoyed and learnd lots of thinks from this project.</p>

                            <h4 class="text-lg font-bold mt-5 mb-2">OutChimp - (Marketplace)</h4>
                            <p>This is similar to an online marketplace where a buyer can post their job offer and user can apply for the job. Our team uses Laravel API for backend and Nuxt JS to manage front-end. Here I learned how a marketplace actually works and manage multiple authenticated user.</p>

                            <h4 class="text-lg font-bold mt-5 mb-2">Wrapmotif - (Car wrapping company)</h4>
                            <p>This project was made for a company who wants to grow their company and satisfy their clients. This project made with Laravel jetstream for backend admin panel Nuxt JS to manage front-end.</p>
                        </div>

                        <!-- Right -->
                        <div class="lg:w-3/12 lg:pl-8 lg:ml-8 lg:border-l mt-8 lg:mt-0">
                            <h3 class="text-xl border-l-4 pl-4 border-primary text-primary">Skills</h3>

                            <h4 class="text-lg font-bold mt-5 mb-2">Technical</h4>
                            <ul>
                                <li>JavaScript</li>
                                <li>React/Vue</li>
                                <li>Node.js</li>
                                <li>PHP/Laravel</li>
                                <li>MySQL/PostgreSQL</li>
                                <li>Object-oriented design</li>
                                <li>Git, Github and Gitlab</li>
                                <li>Dart/Flutter</li>
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
                                <p>HSC in Computer Operation</p>
                                <p class="text-gray-600">Abujar Giffahri University College.</p>
                                <p class="text-gray-500 text-xs">2017 - 2018</p>
                            </div>
                            <div class="mt-3">
                                <p>SSC in Electrical</p>
                                <p class="text-gray-600">Sherpur Technical school & College.</p>
                                <p class="text-gray-500 text-xs">2015 - 2016</p>
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
    </div>
</template>

<script>
export default {
    methods: {
        downloadResume() {
            // this.$refs.html2Pdf.generatePdf()
        }
    },

}
</script>

<style lang="scss" scoped>
.resume-container {
    max-width: 1140px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
    @apply mx-auto p-8;
}
</style>