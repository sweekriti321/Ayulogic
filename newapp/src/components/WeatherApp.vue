<template>
    <div class="mainDiv">
    <h2>Weather App</h2>
    <div v-if="loading">...Loading</div>
    <div v-else>
      <h3>{{ location }}</h3>
      <p>Temparature:{{ temperature }}</p>
      <p>Description:{{ description }}</p>
    </div>
</div>
</template>
<script>

export default {
    data(){
        return{
            loading:true,
            location:'',
            temperature:'',
            description:''
        }
    },
    methods:{
        fetchWeatherData(){
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=b742ebeabb8d9a93c91057ebf368ec1e')
            .then((response)=>
            {response.json().then((data)=>{
                // debugger ;// eslint-disable-line no-debugger
                this.loading=false,
                // this.location = data.list[1].weather.name,
                this.temperature = data.main.temp,
                this.description = data.weather[0].description
                // console.log(this.description)
                
            })})
            
        }
    },
    mounted(){
        this.fetchWeatherData()
    }
}

</script>

<style>

</style>