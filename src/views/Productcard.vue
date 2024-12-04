<template>
    <div class="grid-product">
      <div v-if="product.isHot" class="product-badge">HOT</div>
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="product-details">
        <h3 class="product-title">{{ product.title }}</h3>
        <div class="product-rating">
          <i
            v-for="n in 5"
            :key="n"
            :class="n <= product.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'"
          ></i>
        </div>
        <div class="product-price">{{ product.price }}</div>
        <div class="icon">
          <i class="fa-solid fa-basket-shopping"></i>
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Reuse styles from your existing CSS for the product cards */
  .grid-product {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    background-color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .product-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: red;
    color: white;
    padding: 2px 8px;
    font-size: 10px;
    border-radius: 4px;
  }
  .product-image {
    width: 60%;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .product-title {
    font-size: 14px;
    color: #333;
  }
  .product-rating {
    color: #f7b64d;
    font-size: 14px;
  }
  .product-price {
    font-size: 16px;
    color: #007bff;
    font-weight: bold;
  }
  .icon {
    display: flex;
    justify-content: center;
    gap: 10px;
    color: #33a0ff;
  }
  .icon i {
    font-size: 15px;
    padding: 8px;
    border-radius: 50%;
  }
  </style>
  