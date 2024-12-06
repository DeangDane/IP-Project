<template>
    <button @click="shopNow()" class="button" :style="{ backgroundColor: color}">
        <p> {{name}} </p>
    </button>
</template>

<script>
export default {
    name: "NavButton",
    props: {
        name: String,
        route: String,
        color: String,
    },
    
    methods: {
        shopNow() {
            this.$router.push(this.route);
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.button{
    /* font-family: 'Poppins', sans-serif; */
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button:hover {
    background-color: #2980b9;
}

</style>