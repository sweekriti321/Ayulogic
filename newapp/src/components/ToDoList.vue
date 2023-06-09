<script>

// import AddToDo from './AddToDo.vue';
export default{
  data(){ 
    return{ 
        newTodoList :'',
    todos : [
      {
        id:1,
        Title : "Do house chores",
        
      }
    ],
    nextToDoId : 2 ,
}
},
methods:{
    addNewTodo(){
       
        this.todos.push(
           {id:this.nextToDoId++ , Title:this.newTodoList}
        )
        
    }
},
// components:{
//     AddToDo
// },
}
</script>

<template>
    <form @submit.prevent ="addNewTodo">
        <label for="">Add New TO DO : </label>
        <input type="text" style="padidng:5px" v-model = "newTodoList">
        <input type="submit" value="Add"/>
    </form>
    <ol>
        <li v-for = "todo in todos"
        :key = "todo.id"
        :title = "todo.Title"

        >{{todo.Title }}</li>
    </ol>
    <AddToDo />
</template>