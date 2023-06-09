<!-- <script setup>
  
  
  const count = ref(0);
  
  function increment(){
    count.value++
  }
  
  onMounted(()=>{
    console.log(`the initial count is ${count.value}`)
  })
  
</script>
<template>
  <button @click = "increment">
    Count is : {{count}}
  </button>
</template> -->

<!-- <script>
export default{
  data(){
  return{
        datas: [
            'Hello', 
            'World', 
            
        ]}
    
}
  }

</script>
<template>
  <ul>
  <li v-for="item in datas" v-bind:key = "item.id">
                {{item}}
            </li>
          </ul>
</template> -->

<!-- <script>
  export default{
    data(){
      return{
        firstName:"Sweekriti",
        lastName:"Parajuli",
      }
    },
  computed:{
    fullName:{
      get(){
      return this.firstName + " " + this.lastName
    },
      set(newValue){
        [this.firstName , this.lastName] = newValue.split(' ')
      }
      }
  }
  }
</script>
<template>
  <p>
    {{fullName}}
  </p>
</template> -->


<script>
import Table from './Table.vue'
export default {
  data(){    //data() is built-in function
    return{
      name:'',
      address:'',
      email:'',
      
      arr:[],

      infos:[
        'Name',
        'Address',
        'Email'
      ]
    }
  },
  components:{
    Table
  },
  methods:{
    btnclick(){
      this.arr.push(this.name,this.address,this.email)
    }
  }

}
</script>
<template>
  <div class="form">
  <h3>{{ infos[0] }}<input type="text" v-model="name"></h3>
  <h3>{{ infos[1] }}<input type="text" v-model ="address"></h3>
  <h3>{{ infos[2] }}<input type="text" v-model ="email"></h3>
  <button type="button" @click="btnclick">Add</button>
</div>
<div>
  
  <Table :name="name" :address="address" :email="email" :arr="arr"/>
</div>
</template>
<style>
.form{
  display: flex;
  justify-content: space-around;
}
.form button{
  border-radius: 10px;
}
</style>
  
