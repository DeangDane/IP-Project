<template>
    <div class="product-grid">
      <GridProduct 
        v-for="(product, index) in products" 
        :key="index" 
        :product="product" 
      />
    </div>
  </template>
  
  <script>
  import GridProduct from "@/components/ListCard.vue";
  
  export default {
    name: "ProductGrid",
    components: { GridProduct },
    data() {
      return {
        products: [
          {
            title: "Ultra Pure Hyaluronic Acid",
            price: "$18.9",
            description: "A lightweight, fast-absorbing serum to hydrate and smooth your skin.",
            image:
              "https://www.kiehls.com.ph/wp-content/uploads/2023/05/kiehls-face-ultra-pure-high-potency-serum-hyaluronic-acid-30ml-3605972791313-front-1-570x670.jpg",
            rating: 4,
            isHot: true,
          },

        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .product-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    max-width: 800px;
    margin: auto;
  }
  </style>
  