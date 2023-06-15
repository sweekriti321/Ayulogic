<template>
    <!-- <v-app> -->
       <v-card style="z-index: 9999;">
       <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
       <v-layout>
       <v-app-bar flat= true color="transparent" >


           <v-toolbar-title class="navTitle">PORTFOLIO</v-toolbar-title>

           <v-spacer></v-spacer>

           <div class="navRemaining">
               
               <v-btn variant="text" to="/" >Home</v-btn>
               <v-btn variant="text" to="/AboutPage">About</v-btn>
               <v-btn variant="text" to="/ContactPage">Contact</v-btn>
           </div>

       </v-app-bar>
    </v-layout>
    </v-card>
   <!-- </v-app> -->
</template>
<script>
export default{
    name: "Nav-Bar"
}
</script>
<style>
.navTitle {
    text-align: center;
    font-size: x-large;
    /* text-shadow: 2px 2px rgba(247, 242, 242, 0.726); */
    color: rgb(61, 49, 49);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.navRemaining {
    padding-right: 10%;
    color:rgb(61, 49, 49);
}
</style>