<template>
    <button @click="shopNow()" class="button" :style="{ backgroundColor: color}">
        {{name}}
    </button>
</template>

<script>
export default {
    name: "NavButton",
    props: {
        id: Number,
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
    font-size: 1.15rem;
    border: solid 2px white;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    background-color: white;
    text-align: center;
    box-sizing: border-box;
}

.button:hover {
    color: #FB7181;
    border-bottom: solid 2px #FB7181;
}

</style>