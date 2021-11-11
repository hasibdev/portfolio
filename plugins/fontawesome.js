import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLaptopCode, faBriefcase, faFileAlt, faBlog, faEnvelope, faAdjust, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faGithubAlt, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Init Icon to libreary
library.add(
    faTwitter,
    faFacebookF,
    faGithubAlt,
    faStackOverflow,
    faUser,
    faLaptopCode,
    faBriefcase,
    faFileAlt,
    faBlog,
    faEnvelope,
    faAdjust,
    faArrowCircleRight
)

// Crate font-awesome-icon component
Vue.component('font-awesome-icon', FontAwesomeIcon)
