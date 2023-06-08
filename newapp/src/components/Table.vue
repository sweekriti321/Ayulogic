<template>
    <table  border="1px">
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
        </tr>
        
        <tr v-for="items in arr" v-bind:key="items">
            <td>{{arr[0]}}</td>
            <td>{{arr[1]}}</td>
            <td>{{arr[2]}}</td>
        </tr>
    </table>
    
</template>

<script>



export default{
    name:'table-vue',
    props:{
        name:String,
        address:String,
        email:String,
        arr:Array,

    }
}
</script>