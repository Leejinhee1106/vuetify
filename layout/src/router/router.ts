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

import Otpin from '../components/coms/Otpin.vue';
import Radiobtn from '../components/coms/Radiobtn.vue';
import Rs from '../components/coms/Rs.vue';
import Swit from '../components/coms/Swit.vue';
import Ta from '../components/coms/Ta.vue';
import Tf from '../components/coms/Tf.vue';

import Tbtn from '../components/coms/Tbtn.vue';
import Cslide from '../components/coms/Cslide.vue';
import Cg from '../components/coms/Cg.vue';
import Ig from '../components/coms/Ig.vue';
import Sgr from '../components/coms/Sgr.vue';
import Ste from '../components/coms/Ste.vue';
import Win from '../components/coms/Win.vue';

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

  { path: '/otpin', component: Otpin},
  { path: '/radiobtn', component: Radiobtn},
  { path: '/rs', component: Rs},
  { path: '/swit', component: Swit},
  { path: '/ta', component: Ta},
  { path: '/tf', component: Tf},

  { path: '/tbtn', component: Tbtn},
  { path: '/cslide', component: Cslide},
  { path: '/cg', component: Cg},
  { path: '/ig', component: Ig},
  { path: '/sgr', component: Sgr},
  { path: '/ste', component: Ste},
  { path: '/win', component: Win},


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;