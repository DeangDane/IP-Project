<template>
  <div class="related-products">
    <h2>Related Products</h2>
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Product Image" />
        <h3>{{ product.name }}</h3>
        <p class="price">
          <span class="current-price">{{ product.price }}</span>
          <span class="original-price">{{ product.originalPrice }}</span>
          <span class="discount">{{ product.discount }}% Off</span>
        </p>
      </div>
    </div>
    <button class="load-more">Load More</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Heartleaf Quercetinol',
          price: '$20.43',
          originalPrice: '$22.37',
          discount: 9,
          image: 'https://via.placeholder.com/150', // Replace with actual URLs
        },
        {
          id: 2,
          name: 'ANUA Heartleaf Query',
          price: '$20.43',
          originalPrice: '$22.37',
          discount: 9,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          name: 'Clean It Zero',
          price: '$29.43',
          originalPrice: '$31.33',
          discount: 6,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 4,
          name: 'Deep Cleansing Foam',
          price: '$29.43',
          originalPrice: '$34.33',
          discount: 14,
          image: 'https://via.placeholder.com/150',
        },
      ],
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>