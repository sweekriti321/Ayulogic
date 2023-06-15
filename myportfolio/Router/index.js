// import Vue from "vue";
// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import AboutPage from '@/components/AboutPage.vue';
import ContactPage from '@/components/ContactPage.vue';
import PortfolioContent from '@/components/PortfolioContent.vue';
import Blog from '@/components/Blog.vue';
import Terms from '@/components/TermsService.vue';
// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: PortfolioContent,
  },

  {
    path: "/AboutPage",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/ContactPage",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/Blog",
    name :"Blog",
    component: Blog,
  },
  {
    path:"/terms",
    name:"Terms",
    component:Terms

  }
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
