<template>
    <table  border="1px">
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
        </tr>
        <tr>
            <td>{{ name }}</td>
            <td>{{address}}</td>
            <td>{{email}}</td>
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
        infos:Array,
    }
}
</script>