<template>
    <div>
        <h1>Clothes</h1>
        <div class="wrapper">
            <ForProps2 :infos="infos"></ForProps2>
        </div>
    </div>
</template>
<script>
import ForProps2 from './ForProps2.vue';
export default {
    data() {
        return {
            infos: [{
                clothName: "Jacket",
                clothDescription: "It keeps you warm in winter.",
                isfavourite: false,

            },
            {
                clothName: "Scarf",
                clothDescription: "It protects your neck and ears from cold wind.",
                isfavourite: false,
            },
            {
                clothName: "T-shirts",
                clothDescription: "It is good for any season.",
                isfavourite: false,
            }

            ]
        }
    },
    components: {
        ForProps2
    }
}
</script>

<style>
.wrapper {
    border: 1px solid rgb(77, 59, 59);
    width: 50%;
    align-items: center;
}
</style>