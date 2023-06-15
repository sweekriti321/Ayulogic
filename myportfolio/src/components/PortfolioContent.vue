<template>
    <v-parallax src="./Images/bgimg.jpg" style="opacity: 0.8;">
        <div class="mainpgTxt">
            <h2>Hello, I am</h2>
            <br />
            <h1>Sweekriti Parajuli!</h1>
            <a href="https://www.linkedin.com/in/sweekriti-parajuli-138542237/"><v-icon icon="mdi-linkedin"
                    class="iconClass" /> </a>
            <a href="https://github.com/sweekriti321"><v-icon icon="mdi-github" class="iconClass" /></a>
            <div style="padding-top:20px">
                <v-btn style="background-color: black; color: bisque;" to="/ContactPage">Contact Me</v-btn>
            </div>

        </div>

    </v-parallax>
    <v-card>
     <div class="secondPage">
      <h1>My name is Sweekriti</h1>
      <br />
      <p>I'm your new social media bestie. My mission is to help small and medium-sized businesses grow<br> their audience and brand recognition through social media. To do that, I believe it's paramount to <br>create a committed and genuine community that has a positive influence on people’s lives beyond<br> the online sphere. My goal is to help you understand the power of social media and create<br> connections that go beyond the internet.</p>
     </div>
    </v-card>
    <v-parallax src="./Images/bgimg.jpg" style="opacity: 0.8;">
        <div class="servicestxt flex float-left">
         <h1>Services</h1>
         <br>
         <p>From campaign planning and consultation to content <br>creation and extended social media campaigning, I'm here to <br>help your brand sound like you online.</p>
        </div>
        <v-img src="./Images/serves.png" height="350px" class="serveImgCLass float-right"></v-img>
    </v-parallax>
</template>
  
<script>

</script>
  
<style>

.mainpgTxt {
    text-align: right;
    margin-top: 18rem;
    padding-left: 30rem;
    padding-right: 10rem;
    color:rgb(12, 11, 10);


}

.mainpgTxt h1 {
    font-size: calc(30px + (100 - 50) * ((100vw - 400px) / (1700 - 400)));
    font-weight: bold;
    line-height: .7;
    margin-bottom: 25px;
    color: inherit;
}

.mainpgTxt h2 {
    font-weight: 400;
    font-size: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
}

.iconClass {
    cursor: pointer;
    color: rgb(46, 40, 32);
}
.secondPage{
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
}
.secondPage h1{
    font-weight: 400;
    font-size: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
}
.serveImgCLass{
    padding-right: 100px;
    margin-top: 200px;
    animation: fadeIn 5s; 
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.servicestxt h1{
    font-weight: 400;
    font-size: calc(20px + (45 - 20) * ((100vw - 300px) / (1000 - 300)));
}
.servicestxt{
    margin-top:200px;
    padding-left:300px;
}

</style>