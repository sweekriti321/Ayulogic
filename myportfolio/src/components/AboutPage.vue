<template>
    <v-parallax src="./Images/bgimg.jpg" style="opacity: 0.8;">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <div class="aboutme">
                <h2>Welcome To,</h2>
                <br />
                <h1>About Page</h1>

                <h3>Get To Know More About Me...</h3>
            </div>

        </div>
    </v-parallax>
    <v-card>
    <div class="secondpage flex">
    <div class="profiletxt flex float-left">
        <h1>So, who am I?</h1>

      <br>
        <p>I'm your new social media bestie. My mission is to help small<br> and medium-sized businesses grow their audience and brand <br>recognition through social media. To do that, I believe it's<br> paramount to create a committed and genuine community <br>that has a positive influence on people’s lives beyond the <br>online sphere. My goal is to help you understand the power <br>of social media and create connections that go beyond <br> the internet.</p>
    </div>
        <div class="profileimg">
      <v-img src="./Images/profiles.png" alt="profile" height="480px" class="float-right"></v-img>
    </div>
</div>
</v-card>
<v-parallax src="./Images/bgimg.jpg" style="opacity: 0.8;">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <div class="thirdpagetxt">
                <h1>Changing the digital world</h1>
                <br>
                <p>I believe it's paramount to create a committed and genuine community that has a positive influence<br> on people’s lives beyond the online sphere. With more people online than ever before, <br>the competition for attention is fierce, and you have to work hard to appeal to the masses. That's why<br>it's my goal to help you understand the power of social media and create connections that go<br> beyond the internet.</p>
            </div>

        </div>
    </v-parallax>
<v-card>
    <div class="fourthpage flex">
    <div class="blogtext flex float-right">
    <h1>My Blog!</h1>
    <br>
    <p>I'll let you in on some trade secrets and share my top tips on<br> how to successfully promote your brand online.</p>
    <br>
    <v-btn style="background-color: black; color: bisque;" to="/Blog">Read Blog</v-btn>
    </div>
    <div class="blogimg">
        <v-img src="./Images/blogimg.png" alt="blog" height="450px" class="float-left"></v-img>
    </div>
    </div>
</v-card>
<v-parallax src="./Images/bgimg.jpg" style="opacity: 0.8;">
    <div class="d-flex flex-column fill-height">
        <div class="projectsClass">
        <h1>Projects</h1>
        
        <!-- <v-carousel hide-delimiters class="CarouselClass">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="require('./Images/'+item.src)"
      
      cover
    ></v-carousel-item>
  </v-carousel>

   -->
   <v-sheet
    class="mx-auto mt-16"
    elevation="6"
    max-width="700"
    
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-group-item
      v-for="item in items"
          :key="item"
          class="mx-4 "
           
          
        v-slot="{ isSelected, toggle }"
      >
        <v-card
          :color="isSelected ? 'primary' : 'grey-lighten-1'"
          class="ma-4"
          height="250"
          width="300"
          @click="toggle"
        >
       <a :href="item.link"><v-img width="300" height="80%" cover :src="require('./Images/'+item.src)"></v-img></a>
        <v-card-title class="text-h6">{{ item.caption }}</v-card-title>
          <div class="d-flex fill-height align-center justify-center">
           
            <v-scale-transition>
              <v-icon 
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
  

    </div>
    </div>
</v-parallax>

</template>
<script>
  export default {
    data : () =>({
     items : [
       {
        src:"furniture.jpg",
        caption: "Dream World Furniture",
        link:"https://sweekriti321.github.io/Ayulogic/static-website/",
       },
       {
        src:"Makeup.jpg",
        caption: "Pretty Please Makeup Line",
        link:"https://sweekriti321.github.io/Ayulogic/static-website/",

       },
       {
        src:"arts.jpg",
        caption: "Make your dream come into reality",
        link:"https://sweekriti321.github.io/Ayulogic/static-website/",
       },
       {
        src:"serve.png",
        caption:"Love Yourself Clothing Store",
        link:"https://sweekriti321.github.io/Ayulogic/static-website/",
       },
       {
        src:"services.jpeg",
        caption: "Say Hello To This Beautiful World",
        link:"https://sweekriti321.github.io/Ayulogic/static-website/",
       }
     ]
    
  }),
}
</script>
<style>
.aboutme {
    margin-top: 0px;
    padding-left: 2rem;
    text-align: center;
    color: rgb(12, 11, 10);
}

.aboutme h1 {
    font-size: calc(40px + (120 - 40) * ((100vw - 300px) / (1600 - 300)));
    font-weight: bold;
    line-height: .7;
    margin-bottom: 25px;
    color: inherit;
}

.aboutme h2 {
    font-weight: 400;
    font-size: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
}

.aboutme h3 {
    font-weight: 350;
}

.profiletxt {
    margin-top: 100px;
    margin-left: 100px;

}

.profiletxt h1 {
    font-weight: 400;
    font-size: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
}

.profiletxt h2 {
    font-weight: 500;
}
.thirdpagetxt{
    text-align: center;
    color:rgb(12, 11, 10);
}
.thirdpagetxt h1{
    font-size: calc(30px + (100 - 50) * ((100vw - 400px) / (1700 - 400)));
}
.thirdpagetxt p{
    font-weight: 500;
    font-size: large;
}
.blogtext{
    margin-top: 100px;
    margin-right: 100px;
}
.blogtext h1{
    font-weight: 400;
    font-size: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
}
.projectsClass{
    margin-top: 50px;
   text-align: center;
}
.projectsClass h1{
    font-weight: 400;
    font-size: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
}
a:visited{
  color:transparent;
}

</style> 