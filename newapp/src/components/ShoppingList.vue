<script>



   export default{
       data(){
            return{
              itemNumber : null,
              itemName : null,
              important : false,
              shoppinglist : [
                
              ] 
              

          }
        },
        computed:{
            isImportant(){
              if(this.important){
                return 'yes'
              }else{
                return 'no'
              }
            }
          },
    methods:{
            additem(){
              let item = {
                name:this.itemName,
                quantity:this.itemNumber,
               
              }
              this.shoppinglist.push(item)
              this.itemName = null,
              this.itemNumber = null
              
            },
            removeItem(element){
                console.log(element)
                console.log(this.shoppinglist.indexOf(element))
               this.shoppinglist.splice(this.shoppinglist.indexOf(element),1)
            }
          },
         

   }
</script>
<template>
    <h1>Shopping List</h1>
    <div class="dotted-border">
        <form action="#" v-on:submit.prevent="additem">
            <p>What do you want to buy?<input type="text" v-model="itemName"></p>
            <p>Qunatity Please<input type="number" v-model="itemNumber"/></p>
            Important? 
    <label><input type="checkbox" class=" .impClass
     " v-model = "important" />{{ important }}</label>
            <input type="submit" value="Add Item">
        </form>
    </div>
    <h2>Shopping List</h2>
    <li v-for = "element in shoppinglist" 
    :key="element.id" 
    :name="element.name" 
    :number="element.quantity"
    >
    {{ element.name }}&nbsp;,&nbsp;{{ element.quantity }} &nbsp; <button type="button" @click="removeItem(element)">Remove</button> &nbsp;
    
    </li>
</template>
<style>
 .dotted-border{
    border:2px;
    width:200px;
    border-style:dotted;
    padding:20px;
 }
 p{
    font-size: medium;
 }
 input{
    padding:10px;
 }
 
</style>
