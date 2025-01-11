<template>
    <div class="newArrival">
        <div class="text">
            NEW ARRIVALS
        </div>

        <div class="content">
            <GridProduct v-for="gridPro in gridproducts" :image="gridPro.images[0]" :color="gridPro.color"
                :label="gridPro.label" :proName="gridPro.proName" :price="gridPro.price" />
        </div>
    </div>
</template>
<script>
import GridProduct from "@/components/GridProduct.vue";
import { useProductStore } from "@/store/ProductStore";

export default {
    name: "NewArrival",

    components: {
        GridProduct,
    },

    setup() {
        const productStore = useProductStore();
        return {
            gridproducts: productStore.newProducts,
        };
    },
};
</script>

<style>
.newArrival {
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