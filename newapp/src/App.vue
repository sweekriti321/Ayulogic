<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <ToDoList></ToDoList> -->
  <!-- <ShoppingList /> -->
  <!-- <ForProps></ForProps> -->
  <WeatherApp></WeatherApp>

  <!-- <div>
    <router-link to="/">Home</router-link>
    <router-view></router-view>
  </div> -->
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ToDoList from './components/ToDoList.vue'
// import ShoppingList from './components/ShoppingList.vue';
// import ForProps from './ForProps.vue'
import WeatherApp from './components/WeatherApp.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ToDoList,
    // ShoppingList,
    //  ForProps
    WeatherApp
  }
}
</script>

