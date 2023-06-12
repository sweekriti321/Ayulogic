<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <ToDoList></ToDoList> -->
  <!-- <ShoppingList /> -->
  <div>
    <router-link to="/">Home</router-link>
   <router-view></router-view>
  </div>
  


</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ToDoList from './components/ToDoList.vue'
// import ShoppingList from './components/ShoppingList.vue';
// import router from 'Router/main';
// import News from './components/News.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ToDoList,
    // ShoppingList,
    // News,
    // router
}
}
</script>
<!-- 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
