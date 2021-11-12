<template>
    <div>
        <!-- Header -->
        <div class="p-10 bg-gray-10 dark:bg-gray-800">
            <div class="text-center">
                <h2 class="text-3xl">Contact</h2>
                <p class="my-3">Interested in hiring me for your project or just want to say hi? You can fill in the contact form below <br> or send me an email to simon.doe@yourwebsite.com</p>

                <p>Want to get connected? Follow me on the social channels below.</p>
            </div>

            <!-- Social Icons -->
            <div class="flex justify-center items-center my-4">
                <a href="https://twitter.com/Hasibur40252192" target="_blank" class="social-icon">
                    <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
                </a>

                <a href="https://www.facebook.com/Hasibur.Rahman.web" target="_blank" class="social-icon">
                    <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon>
                </a>

                <a href="https://github.com/hasibDev" target="_blank" class="social-icon">
                    <font-awesome-icon :icon="['fab', 'github-alt']"></font-awesome-icon>
                </a>

                <a href="https://stackoverflow.com/users/16370387/hasibur-rahman" target="_blank" class="social-icon">
                    <font-awesome-icon :icon="['fab', 'stack-overflow']"></font-awesome-icon>
                </a>
            </div>
        </div>

        <!-- Main content -->
        <div class="p-10">
            <h3 class="text-2xl mb-6 text-center">Get In Touch</h3>
            <form class="lg:w-3/5 mx-auto">
                <div class="grid grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Name" class="px-3 py-2 rounded border border-gray-400">
                    <input type="email" name="email" placeholder="Email" class="px-3 py-2 rounded border border-gray-400">
                </div>

                <div class="mt-5">
                    <textarea name="message" cols="30" rows="10" class="w-full px-3 py-2 rounded border border-gray-400" placeholder="Enter Your message"></textarea>
                </div>

                <button type="submit" class="px-10 py-2 rounded my-1 inline-block text-white bg-primary hover:bg-primary-dark transition-colors duration-300">Send</button>
            </form>

        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.social-icon {
    @apply p-2 mx-1 text-lg w-10 h-10 inline-block text-green-600 text-center hover:text-green-800 transition-colors duration-300;
}
</style>