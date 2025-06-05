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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;