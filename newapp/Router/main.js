import Vue from 'vue'
import VueRouter from 'vue-router'
import OnlineNews from '@/components/OnlineNews.vue'
import VacationNews from '@/components/VacationNews.vue'
import FashionNews from '@/components/FashionNews.vue'
import News from '@/components/News.vue'

Vue.use(VueRouter)

const routes= [
  {
    path: '/',
    name: 'home',
    component: News,
  },
  
    {
      path: '/onlinePage',
      name: 'onlinePage',
      component: OnlineNews,
    },
    {
      path: '/fashionPage',
      name: 'fashionPage',
      component: FashionNews,
    },
    {
      path: '/vacationPage',
      name: 'vacationPage',
      component: VacationNews,
    },
  ]
   
const router= new VueRouter({
  mode: 'history',
  routes
})

export default router;
