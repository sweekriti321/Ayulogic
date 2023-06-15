<template>
    <v-layout >
    <v-footer class="d-flex flex-column pa-0">
      <div class="d-flex w-100 align-center px-4 " style="background-color:#95591f ;">
        <strong>Get connected with us on social networks!</strong>
  
        <v-spacer></v-spacer>
  
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"
        ></v-btn>
      </div>
  
      <div class="px-4 py-2 bg-black text-center w-100" >
        {{ new Date().getFullYear() }} — <strong><a href="/terms" style="color:antiquewhite">Terms Of Service</a></strong>
      </div>
    </v-footer>
</v-layout>
  </template>
  
  <script>
    export default {
        name:"Footer-Bar",
      data: () => ({
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
      }),
    }
  </script>
 