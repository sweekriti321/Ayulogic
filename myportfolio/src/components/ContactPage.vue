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
                <h1>Leave Me A Message!</h1>
                <!-- <div class="txtField"> -->
                    <br>
                <v-sheet width="300" class="mx-auto mb-15">
                  
                    <v-form fast-fail @submit.prevent>
                        <v-text-field v-model="firstName" label="First name" :rules="firstNameRules"></v-text-field>

                        <v-text-field v-model="email" label="Email Address"></v-text-field>
                        <v-textarea v-model="message" label="Message"></v-textarea>

                        <v-btn type="submit" block class="mt-2">Submit</v-btn>
                    </v-form>
                </v-sheet>
            </div>
            <!-- </div> -->
        </v-card>
       

   
</template>
 
<script>
export default {
    data: () => ({
        message: '',
        email: '',
        firstName: '',
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
/* .bgimg {
    width: 100%;
    height: 600px;
    /* position: absolute; */
    /* top: 0;
    left: 0;
    background-image: url('./Images/bgimg.jpg');
    background-size: 100% 100%;
    background-color: rgb(250, 250, 250);
    opacity: 0.8;

} */ */

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
    color:rgb(46, 40, 32);
    font-weight: 400;
}
.contactme h1{
    font-size: calc(30px + (100 - 50) * ((100vw - 400px) / (1700 - 400)));
    color:rgb(46, 40, 32);
}
</style>