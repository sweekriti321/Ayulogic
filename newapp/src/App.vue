<template>
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


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ToDoList,
    // ShoppingList,

  }
}
</script>

