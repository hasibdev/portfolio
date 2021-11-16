<template>
    <section class="p-14">
        <h3 class="text-3xl">What I do</h3>
        <p class="mt-4">I have more than 5 year's experience building website for clients all over the world. <br> Below is a quick overview of my main technical skill sets and technologies I use.</p>

        <div class="mt-10">
            <div class="grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
                <!-- Vanilla JavaScript -->
                <div class="">
                    <js-icon class="text-3xl text-yellow-300"></js-icon>
                    <h4 class="text-lg my-3 font-semibold">JavaScript</h4>
                    <p>JavaScript is my first choice. I know JavaScript more than any other programming language. And I love JavaScript because JavaScript is everywhere. We can make both frontend and backend in one language. And also native-like mobile apps. Not only that, with the help of Node.js we can even use JS into IoT devices like Raspberry pi or Arduino. </p>
                </div>
                <!-- React, Vue -->
                <div class="">
                    <react-icon class="text-3xl c-react"></react-icon>
                    <vue-icon class="text-3xl c-vue ml-1"></vue-icon>

                    <h4 class="text-lg my-3 font-semibold">React &amp; Vue</h4>
                    <p>To be honest, I like Vue.js over React because of the way it separates the logic in a component and is also very easy to manage global state. However, React was the first front-end framework I learned. But, I love both of those including jQuery.</p>
                </div>
                <!-- Node JS -->
                <div class="">
                    <node-icon class="text-3xl c-node"></node-icon>
                    <h4 class="text-lg my-3 font-semibold">Node JS</h4>
                    <p>Now, this is the point where Javascript achieves superpower. We can build both frontend and backend in a single language. And also can be installed in some of the popular IoT devices like Raspberry Pi or Arduino. Emagine One day we will program Javascript code in robotics.</p>
                </div>
                <!-- Npm, Webpack -->
                <div class="">
                    <div class="flex items-center">
                        <npm-icon class="text-3xl c-npm"></npm-icon>
                        <webpack-icon class="text-3xl mx-1"></webpack-icon>
                        <gulp-icon class="text-3xl c-gulp"></gulp-icon>
                    </div>
                    <h4 class="text-lg my-3 font-semibold">Npm, Webpack &amp; Gulp</h4>
                    <p>The package manager for Node JS is very good. And Webpack and Gulp is the most popular JavaScript bundler now a day. Both have very different and manageable ways to build production-ready and also developer-friendly workflow.</p>
                </div>
                <!-- PHP Laravel -->
                <div class="">
                    <div class="flex items-center">
                        <php-icon class="text-3xl c-php"></php-icon>
                        <laravel-icon class="text-3xl c-laravel ml-3"></laravel-icon>
                    </div>
                    <h4 class="text-lg my-3 font-semibold">PHP &amp; Laravel</h4>
                    <p>Besides frontend design and development I also explored the backend. But, first I learned the way Node.js server works. The MVC design pattern authentication and authorization system. Connecting and managing Database Etc. Then I switched to PHP Laravel framework and fallen in love with it. </p>
                </div>
                <!-- HTML, CSS -->
                <div class="">
                    <div class="flex items-center">
                        <html-icon class="text-3xl c-html"></html-icon>
                        <css-icon class="text-3xl c-css mx-2"></css-icon>
                        <scss-icon class="text-3xl c-scss"></scss-icon>
                    </div>
                    <h4 class="text-lg my-3 font-semibold">HTML, CSS &amp; SCSS</h4>
                    <p>HTML and CSS are essential for web design and development. I have very strong understanding of html, css and
                        SCSS preprocessor, flexbox, gridlayout and animation as well. In real product application We mostly use Bootstrap CSS or Tailwind CSS.</p>
                </div>
                <!-- Flutter -->
                <div class="">
                    <flutter-icon></flutter-icon>
                    <h4 class="text-lg my-3 font-semibold">Mobile Apps</h4>
                    <p>I'm a front-end developer first, so I also explore some of the famous mobile app frameworks like Ionic, React Native and Flutter. I personally like Flutter. </p>
                </div>
                <!-- Python -->
                <div class="">
                    <!-- <python-icon class="text-3xl c-python"></python-icon> -->
                    <font-awesome-icon class="text-4xl text-red-500" :icon="['fab', 'git-alt']"></font-awesome-icon>
                    <h4 class="text-lg my-3 font-semibold">Git, Github &amp; Gitlab</h4>
                    <p>I always use Git version control to manage and deploy my application. And also I have pretty good experience with Github, Gitlab and Bitbucket.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import JsIcon from '@/components/icons/JsIcon.vue'
import ReactIcon from '@/components/icons/ReactIcon.vue'
import VueIcon from '@/components/icons/VueIcon.vue'
import CssIcon from '@/components/icons/CssIcon.vue'
import GulpIcon from '@/components/icons/GulpIcon.vue'
import HtmlIcon from '@/components/icons/HtmlIcon.vue'
import LaravelIcon from '@/components/icons/LaravelIcon.vue'
import NodeIcon from '@/components/icons/NodeIcon.vue'
import NpmIcon from '@/components/icons/NpmIcon.vue'
import ScssIcon from '@/components/icons/ScssIcon.vue'
import WebpackIcon from '@/components/icons/WebpackIcon.vue'
import PhpIcon from '@/components/icons/PhpIcon.vue'
import FlutterIcon from '@/components/icons/FlutterIcon.vue'
import PythonIcon from '@/components/icons/PythonIcon.vue'
export default {
    components: {
        JsIcon,
        ReactIcon,
        VueIcon,
        CssIcon,
        GulpIcon,
        HtmlIcon,
        LaravelIcon,
        NodeIcon,
        NpmIcon,
        ScssIcon,
        WebpackIcon,
        PhpIcon,
        FlutterIcon,
        PythonIcon,
    },
}
</script>

<style lang="scss" scoped>
</style>