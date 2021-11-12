<template>
    <section class="p-14 testimonials-slider">
        <h2 class="text-3xl border-l-4 pl-6 border-primary">Testimonials</h2>

        <div class="mt-10">
            <VueSlickCarousel v-bind="sliderConfig">
                <div v-for="item in 6" :key="item">
                    <div class=" text-black bg-gray-10 dark:text-white dark:bg-gray-800 p-4 mx-2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus cum quisquam, debitis ut omnis facere inventore magni ipsam. Exercitationem, cum.</p>

                        <!-- Author -->
                        <div>
                            James Lee
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
</style>