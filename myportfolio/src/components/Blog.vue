<!-- <template>
    <div class="BlogClass">
        <h1>BLOG</h1>
        <div class="card">
            <div class="blogcard">
                <v-img src="./Images/blogimg.jpeg"></v-img>
                <h2>10 Ways to Improve Your Digital Marketing Strategy</h2>
                <br>
                <p>Tired of not having a clear direction for your online marketing activities? It's easy to regain focus and
                    structure with our 10 tips.

                </p>
            </div>
            <div class="blogcard">
                <v-img src="./Images/blogimg.jpeg"></v-img>
                <h2>How I Built My Instagram Audience: A Lesson of Athenticity</h2>
                <br>
                <p>While you might think that Instagram is only a visual platform, it's more a place for storytelling and
                    authentic branding. Here's my story.</p>
            </div>
        </div>
    </div>
</template>-->
<!-- <script>
export default {
    name: "blog-page"
}
</script> -->

<template>
     <v-parallax src="./Images/termsbgimg.jpg" style="opacity: 0.8;">
    <div class="BlogClass">
        <h1>BLOG</h1>
        <br>
        <div class="card"> 
            <div class="blogcard">
        <v-card class="mx-auto" max-width="344">
            <v-img src="./Images/blogimg.jpeg" height="200px" cover></v-img>

            <v-card-title>
                10 Ways to Improve Your Digital<br> Marketing Strategy
            </v-card-title>

            <v-card-subtitle>
                1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
                <v-btn color="#95591f" variant="text">
                    Explore
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        <p>Tired of not having a clear direction for your online marketing activities? It's easy to regain
                            focus and
                            structure with our 10 tips.

                        </p>
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </div>
    <div class="blogcard">
        <v-card class="mx-auto" max-width="344">
            <v-img src="./Images/blogimg.jpeg" height="200px" cover></v-img>

            <v-card-title>
                How I Built My Instagram Audience: A Lesson of Authenticity
            </v-card-title>

            <v-card-subtitle>
                1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
                <v-btn color="#95591f" variant="text">
                    Explore
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        <p>While you might think that Instagram is only a visual platform, it's more a place for storytelling and
                    authentic branding. Here's my story.</p>
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </div>
    </div>
    </div>
</v-parallax>
</template>
  
<script>
export default {
    name: "blog-page",
    data: () => ({
        show: false,
    }),
}
</script>

<style>
.BlogClass h1 {
    margin-top: 100px;
    font-size: calc(20px + (100 - 40) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 200;
    text-align: center;
    color: rgb(26, 22, 22);
}

.blogcard {
   
    width: 20rem;
    height: 28rem;
}

.card {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 100px;}
</style> 
