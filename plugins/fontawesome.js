import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Init Icon to libreary
library.add(
    faTwitter,
    faFacebookF,
    faGitAlt
)

// Crate font-awesome-icon component
Vue.component('font-awesome-icon', FontAwesomeIcon)
