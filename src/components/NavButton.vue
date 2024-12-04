<template>
    <button @click="shopNow()" class="button" :style="{ backgroundColor: color}">
        <p> {{name}} Home </p>
    </button>
</template>

<script>
export default {
    name: "NavButton",
    props: ["color", 'name'],
    

    methods: {
        shopNow() {
            alert("Let's shop! ");
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.button{
    /* font-family: 'Poppins', sans-serif; */
}
</style>