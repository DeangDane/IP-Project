<template>
    <div class="product-details">
      <nav>
        <a href="/">All Products</a> > <span>{{ product.name }}</span>
      </nav>
      <div class="main-info">
        <img :src="product.image" alt="Product Image" />
        <div class="info">
          <h1>{{ product.name }}</h1>
          <p class="price">
            <span class="current-price">{{ product.price }}</span>
            <span class="original-price">{{ product.originalPrice }}</span>
            <span class="discount">{{ product.discount }}% Off</span>
          </p>
          <p><strong>Availability:</strong> {{ product.availability }}</p>
          <p><strong>Category:</strong> {{ product.category }}</p>
          <p><strong>Free Shipping:</strong> {{ product.freeShipping }}</p>
          <div class="actions">
            <button @click="decreaseQuantity">-</button>
            <input type="number" v-model="quantity" />
            <button @click="increaseQuantity">+</button>
            <button class="add-to-cart">Add to Cart</button>
          </div>
          <button class="share facebook">Share on Facebook</button>
          <button class="share twitter">Share on Twitter</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: 'Red Bean Refreshing Pore Mask',
          price: '$17.75',
          originalPrice: '$23.23',
          discount: 24,
          availability: 'In stock',
          category: 'Accessories',
          freeShipping: true,
          image: 'https://via.placeholder.com/150', // Replace with the actual image URL
        },
        quantity: 1,
      };
    },
    methods: {
      increaseQuantity() {
        this.quantity++;
      },
      decreaseQuantity() {
        if (this.quantity > 1) this.quantity--;
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>