<template>
    <div class="grid-container">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue';
  
  export default {
    name: 'ProductGrid',
    components: {
      ProductCard,
    },
    data() {
      return {
        products: [
          {
            title: 'Square One',
            image: 'https://www.kiehls.com.ph/wp-content/uploads/2023/05/kiehls-face-ultra-pure-high-potency-serum-hyaluronic-acid-30ml-3605972791313-front-1-570x670.jpg',
            price: '$18.9',
            rating: 4,
            isHot: true,
          },
          {
            title: 'Square One',
            image: 'https://www.kiehls.com.ph/wp-content/uploads/2023/05/kiehls-face-ultra-pure-high-potency-serum-hyaluronic-acid-30ml-3605972791313-front-1-570x670.jpg',
            price: '$18.9',
            rating: 4,
            isHot: true,
          },
          {
            title: 'Square One',
            image: 'https://www.kiehls.com.ph/wp-content/uploads/2023/05/kiehls-face-ultra-pure-high-potency-serum-hyaluronic-acid-30ml-3605972791313-front-1-570x670.jpg',
            price: '$18.9',
            rating: 4,
            isHot: true,
          },
          // Add more products
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding: 10px;
    max-width: 960px;
    margin: auto;
  }
  </style>
  