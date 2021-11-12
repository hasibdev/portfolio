<template>
    <section class="p-14 testimonials-slider">
        <h2 class="text-3xl border-l-4 pl-6 border-primary">Testimonials</h2>

        <div class="mt-10">
            <VueSlickCarousel v-bind="sliderConfig">
                <div v-for="item in 6" :key="item">
                    <div class="relative overflow-hidden text-black bg-gray-10 dark:text-white dark:bg-gray-800 px-8 py-10 mx-2 transition-colors duration-300">
                        <div class="slide-quote-icon">
                            <font-awesome-icon :icon="['fas', 'quote-left']" class="text-gray-50"></font-awesome-icon>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus cum quisquam, debitis ut omnis facere inventore magni ipsam. Exercitationem, cum.</p>

                        <!-- Author -->
                        <div class="flex items-center mt-10">
                            <div class="w-16">
                                <img src="/images/profile-4.png" alt="">
                            </div>
                            <div class="ml-6">
                                <p>James Lee</p>
                                <p> Project Manager, <br> Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </VueSlickCarousel>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel },
    data() {
        return {
            sliderConfig: {
                arrows: false,
                dots: true,
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            },
        }
    },
}
</script>

<style lang="scss">
.testimonials-slider {
    .slide-quote-icon {
        @apply absolute bg-primary flex justify-end items-center;
        top: -35px;
        left: -10px;
        padding: 38px 7px 51px 15px;
        transform: rotate(45deg);
        > * {
            transform: rotate(-45deg);
        }
    }

    .slick-dots {
        bottom: -55px;
    }
}
</style>