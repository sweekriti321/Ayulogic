
<template>
    <div>
        <div v-for="info in infos" :key="info.clothName" class="internalwrapper">
            <h2>{{ info.clothName }}</h2>
            <p>{{ info.clothDescription }}</p>
        </div>
    </div>
</template>
<script>

export default {
    props: [
        'infos'
    ]
}
</script>
<style>
.internalwrapper {
    background-color: black;
    color: white;
    text-align: center;
}
</style>