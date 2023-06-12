<template>
  <div class="mainpg">
    <div class="headingClass">
      <h1 style="color:rgba(199, 193, 207, 0.966)">News Report</h1>
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

  </div>
</template>

<script>


export default {
  name: 'NewsCard',
};

</script>

<style>
.newsCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}

.firstCard {
  border: 3px solid rgba(197, 227, 241, 0);
  width: 30%;
  height: 400px;
  cursor: pointer;

}

.firstCard img {
  width: 100%;
  height: 300px;
}

.firstCard:hover {
  background-color: rgba(199, 193, 207, 0.966);
}

.headingClass {
  text-align: center;
}
</style>