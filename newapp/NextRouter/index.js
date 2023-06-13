import Vue from "vue";
import VueRouter from "vue-router";
import NextOnlineNews from "@/components/NextOnline.vue";
import NextVacationNews from "@/components/NextVacation.vue";
import NextFashionNews from "@/components/NextFashion.vue";
import NextNews from "@/components/NextNews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: NextNews,
  },

  {
    path: "/nxtonlinePage",
    name: "nxtonlinePage",
    component: NextOnlineNews,
  },
  {
    path: "/nxtfashionPage",
    name: "nxtfashionPage",
    component: NextFashionNews,
  },
  {
    path: "/nxtvacationPage",
    name: "nxtvacationPage",
    component: NextVacationNews,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
