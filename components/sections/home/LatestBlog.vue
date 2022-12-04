<template>
  <div class="p-14">
    <h1 class="text-3xl border-l-4 pl-6 border-primary">
      Latest Blog Posts (Comming soon)
    </h1>

    <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
      <div
        v-for="item in 3"
        :key="item"
        class="bg-gray-10 dark:bg-gray-800 transition-colors duration-300"
      >
        <div>
          <img src="/images/blog-post-thumb-card-1.jpg" alt="" />
        </div>
        <div class="p-4">
          <h3 class="text-xl">Top 3 JavaScript Frameworks</h3>
          <p class="mb-5 mt-3 text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient...
          </p>

          <button class="text-primary flex items-center">
            <span>Read More</span>
            <font-awesome-icon
              :icon="['fas', 'long-arrow-alt-right']"
              class="ml-2"
            ></font-awesome-icon>
          </button>

          <p class="mt-8 text-xs text-gray-500">Published 2 days ago</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-14">
      <nuxt-link
        class="px-5 py-2 rounded inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
        to="/blog"
      >
        <font-awesome-icon
          class="mr-2"
          :icon="['fas', 'arrow-circle-right']"
        ></font-awesome-icon>
        View Blogs
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
