<template>
    <ProductGallery />
    <div class="promotions">
        <div class="text">
            PROMOTIONS
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
import ProductGallery from "@/components/ProductGallery.vue";

export default {
    name: "Promotion",

    components: {
        GridProduct,
        ProductGallery,
    },

    setup() {
        const productStore = useProductStore();
        return {
            gridproducts: productStore.proProducts,
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
