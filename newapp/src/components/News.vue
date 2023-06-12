<template>
    <div class="mainpg">
      <div class="headingClass">
        <h1>News Report</h1>
      </div>
      <div class="newsCards">
        <div class="firstCard">
          <router-link to="/fashionPage">
            <img src="./Images/fashion.jpeg" alt="Fashion" />
            <h3>Fashion!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem corrupti, quasi dolor ad molestias</p>
          </router-link>
        </div>
        <div class="firstCard">
          <router-link to="/onlinePage">
            <img src="./Images/online.jpeg" alt="Online Classes" />
            <h3>Online Classes!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem corrupti, quasi dolor ad molestias</p>
          </router-link>
        </div>
        <div class="firstCard">
          <router-link to="/vacationPage">
            <img src="./Images/sleep.jpeg" alt="Summer Vacation" />
            <h3>Summer Vacation!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem corrupti, quasi dolor ad molestias</p>
          </router-link>
        </div>
      </div>

      <!-- <FashionNews />
    <OnlineNews /> 
    <VacationNews /> -->

    </div>
  </template>

<script>
// import OnlineNews from '@/components/OnlineNews.vue'
// import VacationNews from '@/components/VacationNews.vue'
// import FashionNews from '@/components/FashionNews.vue'

// Vue.use(VueRouter);

export default {
    name: 'NewsCard',
    // components:{
    //   OnlineNews,
    //   FashionNews,
    //   VacationNews

    // }
};

</script>

<style>
.newsCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.firstCard {
    border: 3px solid black;
    width:30%;
    height :400px;
    cursor: pointer;
}
.firstCard img{
    width:100%;
    height:300px;
}
.firstCard:hover{
  background-color: rgb(215, 230, 230);   
}
.headingClass{
   text-align: center;
}
</style>