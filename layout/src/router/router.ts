/*npm install vue-router */
import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/coms/Home.vue';
import Nav1 from '../components/nav/Nav1.vue';
import Nav2 from '../components/nav/Nav2.vue';
import Nav3 from '../components/nav/Nav3.vue';
import Nav4 from '../components/nav/Nav4.vue';
import Nav5 from '../components/nav/Nav5.vue';
import Bottom1 from '../components/nav/Bottom1.vue';
import Footer from '../components/coms/Footer.vue';
import Button from '../components/coms/Button.vue';
import Expan from '../components/coms/Expan.vue';
import Tooltip from '../components/coms/Tooltip.vue';
import Bread from '../components/coms/Bread.vue';
import Fbutton from '../components/coms/Fbutton.vue';
import Tabs from '../components/coms/Tabs.vue';
import Page from '../components/coms/Page.vue';
import Dir from '../components/ref/Dir.vue';
import Events from '../components/ref/Events.vue';
import Met from '../components/ref/Met.vue';
import Comp from '../components/ref/Comp.vue';
import Vmodel from '../components/ref/Vmodel.vue';
import Watc from '../components/ref/Watc.vue';

// V-Inputs & Controls
import Auto from '../components/coms/Auto.vue';
import Check from '../components/coms/Check.vue';
import Combo from '../components/coms/Combo.vue';
import File from '../components/coms/File.vue';
import Form from '../components/coms/Form.vue';
import Custom from '../components/coms/Custom.vue';
import Numbs from '../components/coms/Numbs.vue';
import Otp from '../components/coms/Otp.vue';
import Radiobtn from '../components/coms/Radiobtn.vue';
import Rs from '../components/coms/Rs.vue';
import Swit from '../components/coms/Swit.vue';
import Ta from '../components/coms/Ta.vue';
import Tf from '../components/coms/Tf.vue';

// V-Select
import Tbtn from '../components/coms/Tbtn.vue';
import Cslide from '../components/coms/Cslide.vue';
import Cg from '../components/coms/Cg.vue';
import Ig from '../components/coms/Ig.vue';
import Sgr from '../components/coms/Sgr.vue';
import Ste from '../components/coms/Ste.vue';
import Win from '../components/coms/Win.vue';

// V-feedback
import Alerts from '../components/coms/Alerts.vue'
import Badges from '../components/coms/Badges.vue'
import Banner from '../components/coms/Banner.vue'
import Empty from '../components/coms/Empty.vue'
import Hover from '../components/coms/Hover.vue'
import Pc from '../components/coms/Pc.vue'
import Pl from '../components/coms/Pl.vue'
import Ratings from '../components/coms/Ratings.vue'
import Sl from '../components/coms/Sl.vue'
import Snacks from '../components/coms/Snacks.vue'
import Snackq from '../components/coms/Snackq.vue'
import Tl from '../components/coms/Tl.vue'

// V-img*icon
import Ar from '../components/coms/As.vue'
import Ava from '../components/coms/Ava.vue'
import Ic from '../components/coms/Ic.vue'
import Im from '../components/coms/Im.vue'
import Para from '../components/coms/Para.vue'

const routes = [
   { path: '/', redirect: '/home' }, // 기본 리디렉션
  { path: '/home', component: Home },
  { path: '/nav1', component: Nav1 },
  { path: '/nav2', component: Nav2 },
  { path: '/nav3', component: Nav3 },
  { path: '/nav4', component: Nav4 },
  { path: '/nav5', component: Nav5 },
  { path: '/bottom1', component: Bottom1 }, 
  { path: '/footer', component: Footer }, 
  { path: '/button', component: Button },
  { path: '/expan', component: Expan },
  { path: '/tooltip', component: Tooltip },
  { path: '/breadcrumbs', component: Bread },
  { path: '/fbutton', component: Fbutton },
  { path: '/tabs', component: Tabs },
  { path: '/page', component: Page },
  { path: '/dir', component: Dir },
  { path: '/events', component: Events },
  { path: '/met', component: Met},
  { path: '/comp', component: Comp},
  { path: '/vmodel', component: Vmodel},
  { path: '/watc', component: Watc},

// V-Inputs & Controls
  { path: '/auto', component: Auto},
  { path: '/check', component: Check},
  { path: '/combo', component: Combo},
  { path: '/file', component: File},
  { path: '/form', component: Form},
  { path: '/custom', component: Custom},
  { path: '/numbs', component: Numbs},
  { path: '/otp', component: Otp},
  { path: '/radiobtn', component: Radiobtn},
  { path: '/rs', component: Rs},
  { path: '/swit', component: Swit},
  { path: '/ta', component: Ta},
  { path: '/tf', component: Tf},

  // V-Select
  { path: '/tbtn', component: Tbtn},
  { path: '/cslide', component: Cslide},
  { path: '/cg', component: Cg},
  { path: '/ig', component: Ig},
  { path: '/sgr', component: Sgr},
  { path: '/ste', component: Ste},
  { path: '/win', component: Win},

  // V-feedback
  { path: '/alerts', component: Alerts },
  { path: '/badges', component: Badges },
  { path: '/banner', component: Banner },
  { path: '/empty', component: Empty },
  { path: '/hover', component: Hover },
  { path: '/pc', component: Pc },
  { path: '/pl', component: Pl },
  { path: '/ratings', component: Ratings },
  { path: '/sl', component: Sl },
  { path: '/snacks', component: Snacks },
  { path: '/snackq', component: Snackq },
  { path: '/tl', component: Tl },
  
// V-img*icon
  { path: '/ar', component: Ar },
  { path: '/ava', component: Ava },
  { path: '/ic', component: Ic },
  { path: '/im', component: Im },
  { path: '/para', component: Para },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;