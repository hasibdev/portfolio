<template>
    <header class="header text-white bg-green-600 p-4">
        <h3 class="text-2xl text-center mt-8 mb-6 font-bold">Hasibur Rahman</h3>
        <!-- Image -->
        <div class="rounded-full overflow-hidden w-36 h-36 mx-auto">
            <img src="/images/fb-me.jpg" alt="Hasibur Rahman">
        </div>
        <!-- Bio -->
        <p class="text-center mt-6">Hi, I'm Hasib and I'm a senior Front-end Developer. Welcome to my personal website!</p>

        <!-- Social Icons -->
        <ul>
            <li>
                <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
            </li>
            <li>
                <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon>
            </li>
        </ul>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
    width: 280px;
}
</style>