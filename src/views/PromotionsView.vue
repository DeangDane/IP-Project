<template>
    <div class="promotions">
        <div class="text">
            PROMOTIONS
        </div>

        <div class="content">
            <GridProduct v-for="gridPro in gridproducts" :image="gridPro.image" :color="gridPro.color"
                :label="gridPro.label" :proName="gridPro.proName" :price="gridPro.price" />
        </div>
    </div>
</template>
<script>
import GridProduct from "@/components/GridProduct.vue";

export default {
    name: "Promotion",

    components: {
        GridProduct,
    },

    data() {
        return {

            gridproducts: [
                { image: "images/Product1.png", proName: "Cleansing foam", color: "#40BFFF", label: "70%", price: 19 },
                { image: "images/Product1.png", proName: "Cleansing foam", color: "#40BFFF", label: "70%", price: 19 },
                { image: "images/Product1.png", proName: "Cleansing foam", color: "#40BFFF", label: "70%", price: 19 },
                { image: "images/Product1.png", proName: "Cleansing foam", color: "#40BFFF", label: "70%", price: 19 },
            ],

            currentPage: 1,
            query: "",
        };
    },
};
</script>

<style>
.promotions {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.content {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;

}

.text {
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-align: center;
}
</style>
