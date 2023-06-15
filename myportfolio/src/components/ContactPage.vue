<template>
   
        <v-parallax src="./Images/bgimg.jpg" style="opacity: 0.8;">
            <div class="d-flex flex-column fill-height justify-center align-center text-white">
                <div class="contactme">
                <h2>Feel Free To,</h2>
                <br />
                <h1>Contact Me...</h1>
            </div>
                </div>
        </v-parallax>
            <v-card>
            
            <div class="contactTxt d-flex flex-column justify-center align-center mt-15">
                <h1>Leave Me A<br> Message!</h1>
                <!-- <div class="txtField"> -->
                    <br>
                <v-sheet width="300" class="mx-auto mb-1">
                  
                    <v-form fast-fail @submit.prevent class="mt-15">
                        <v-text-field v-model="firstName" label="First name" :rules="firstNameRules"></v-text-field>

                        <v-text-field v-model="email" label="Email Address"></v-text-field>
                        <v-textarea v-model="message" label="Message"></v-textarea>
                       
                       
                        <v-sheet class="position-relative" min-height="450">
    <div
      class="position-absolute d-flex align-center justify-center w-100 h-2"
    >
      <v-btn
        size="x-large"
        color="transparent"
        @click="dialog = !dialog"
      >
        Submit
      </v-btn>
    </div>

    <v-fade-transition hide-on-leave>
      <v-card
        v-if="dialog"
        append-icon="$close"
        class="mx-auto"
        elevation="16"
        max-width="500"
        title="Send a receipt"
      >
        <template v-slot:append>
          <v-btn icon="$close" variant="text" @click="dialog = false"></v-btn>
        </template>

        <v-divider></v-divider>

        <div class="py-12 text-center">
          <v-icon
            class="mb-6"
            color="success"
            icon="mdi-check-circle-outline"
            size="20"
          ></v-icon>

          <div class="text-h4 font-weight-bold">This message was sent</div>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            rounded
            variant="outlined"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </div>
      </v-card>
    </v-fade-transition>
  </v-sheet>
                    
                    </v-form>
                </v-sheet>
            </div>
            <!-- </div> -->
        </v-card>
       

   
</template>
 
<script>
//  import { ref } from 'vue'


export default {
   
    data: () => ({
        message: '',
        email: '',
        firstName: '',
        dialog : true,
        firstNameRules: [
            value => {
                if (value?.length > 3) return true

                return 'First name must be at least 3 characters.'
            },
        ],

        
    }),
 
}
</script>
 
<style>
.contactTxt {
    justify-content: center;
    
}

.contactTxt h1 {
    color: rgb(46, 40, 32);
    font-size: calc(20px + (100 - 50) * ((100vw - 400px) / (1700 - 400)));
    font-weight: 300;
}
.txtField{
    padding-right: 800px;
  
}
.contactme h2{
    font-size: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
    color:rgb(12, 11, 10);
    font-weight: 400;
}
.contactme h1{
    font-size: calc(30px + (100 - 50) * ((100vw - 400px) / (1700 - 400)));
    color:rgb(12, 11, 10);
}
</style>