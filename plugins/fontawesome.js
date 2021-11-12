import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faUser,
    faLaptopCode,
    faBriefcase,
    faFileAlt,
    faBlog,
    faEnvelope,
    faAdjust,
    faArrowCircleRight,
    faEye,
    faQuoteLeft,
    faLongArrowAltRight,
    faPaperPlane,
    faFilePdf,
    faPhoneSquare,
    faEnvelopeSquare,
    faGlobe,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faGithubAlt, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

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
    faArrowCircleRight,
    faEye,
    faQuoteLeft,
    faLongArrowAltRight,
    faPaperPlane,
    faFilePdf,
    faPhoneSquare,
    faEnvelopeSquare,
    faGlobe,
    faMapMarkerAlt
)

// Crate font-awesome-icon component
Vue.component('font-awesome-icon', FontAwesomeIcon)
