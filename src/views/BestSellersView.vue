<template>
    <!-- <ProductGallery /> -->
    <!-- <YourOrdered/> -->
    <div class="bestSeller">
        
        <div class="text">
            BEST SELLERS
        </div>

        <div class="content">
            <GridProduct v-for="gridPro in gridproducts" :image="gridPro.image" :color="gridPro.color"
                :label="gridPro.label" :proName="gridPro.proName" :price="gridPro.price" />
        </div>
    </div>
</template>
<script>
import GridProduct from "@/components/GridProduct.vue";
import ProductGallery from "@/components/ProductGallery.vue";
import { useProductStore } from "@/store/ProductStore";
import { computed } from "vue";
// import YourOrdered from "@/components/YourOrdered.vue";

export default {
    name: "BestSeller",

    components: {
        GridProduct,
        ProductGallery,
    },

    setup() {
        const productStore = useProductStore();
        return {
            gridproducts: computed(() => productStore.hotProducts) ,
        };
    },

};
</script>

<style>
.bestSeller {
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
