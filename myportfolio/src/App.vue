<template>
<!-- 
      <PortfolioContent/> -->
      <NavBar />
      
<!--      
  <router-link to="/"></router-link> -->
  <router-view></router-view>

  <FooterBar />
  
</template>

<script>
//  import PortfolioContent from './components/PortfolioContent.vue';
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',

  components: {
    // PortfolioContent
    NavBar,
    FooterBar,
  },

  data: () => ({
    //
  }),
}
</script>
