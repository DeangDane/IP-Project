<template>
    <div class="grid-container">
      <GridProduct 
        v-for="(product, index) in products" 
        :key="index" 
        :product="product" 
      />
    </div>
  </template>
  
  <script>
  import GridProduct from "@/components/GridCard.vue";
  
  export default {
    name: "ProductGrid",
    components: { GridProduct },
    data() {
      return {
        products: [
          {
            title: "Square one",
            price: "$18.9",
            image:
              "https://www.kiehls.com.ph/wp-content/uploads/2023/05/kiehls-face-ultra-pure-high-potency-serum-hyaluronic-acid-30ml-3605972791313-front-1-570x670.jpg",
            rating: 4,
            isHot: true,
          },
          // Add more products as needed
        ],
      };
    },
  };
  </script>
  
  <style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 10px;
  }
  </style>
  