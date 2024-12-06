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
import ProductCard from './Productcard.vue';

export default {
  name: 'ProductGrid', // Corrected name to match the file's functionality
  components: {
    ProductCard, // Ensure you're importing the correct component
  },
  data() {
    return {
      products: [
        {
          title: 'Product 1',
          image: 'https://i.pinimg.com/736x/65/be/4e/65be4e8490c62ca138b2d67037f828c2.jpg',
          price: '$10.0',
          rating: 4,
          isHot: true,
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Adjust column count as needed */
  gap: 12px;
  padding: 10px;
  max-width: 560px;
  margin: auto;
}
</style>
