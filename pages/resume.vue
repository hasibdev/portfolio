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
            <div class="resume-container">
                <!-- Header -->
                <div class="sm:flex justify-between">
                    <div>
                        <h2 class="text-3xl font-bold tracking-widest text-primary">Hasibur Rahman</h2>
                        <p class="font-thin text-lg mt-1">Senior Front-end Developer</p>
                    </div>
                    <div>
                        <ul class="sm:border-l sm:pl-6 sm:mt-0 text-sm mt-6">
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