<template>
    <div class="list-product">
      <div class="discount-badge" v-if="product.discount">
        {{ product.discount }}%
      </div>
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="product-details">
        <h3 class="product-title">{{ product.title }}</h3>
        <div class="product-rating">
          <i
            v-for="star in 5"
            :key="star"
            :class="['fa-star', star <= product.rating ? 'fa-solid' : 'fa-regular']"
          ></i>
          <span class="rating-text">0 reviews</span>
        </div>
        <div class="product-price">
          <span class="current-price">{{ product.price }}</span>
          <span class="original-price" v-if="product.originalPrice">
            {{ product.originalPrice }}
          </span>
          <span class="discount-text" v-if="product.discount">
            {{ product.discount }}% OFF
          </span>
        </div>
        <p class="product-description" v-if="product.description">
            {{ product.description }}
        </p>
        <div class="product-actions">
          <button class="action-button">Add To Cart</button>
          <button class="action-button favorite-button">
            <i class="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "GridProduct",
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .list-product {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    background-color: white;
    position: relative;
    gap: 16px;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .discount-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: #4CAF50;
    color: white;
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 4px;
  }
  
  .product-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .product-details {
    flex-grow: 1;
  }
  
  .product-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
  }
  
  .product-rating {
    color: #f7b64d;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
  }
  
  .rating-text {
    font-size: 12px;
    color: #666;
  }
  
  .product-price {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }
  
  .current-price {
    font-size: 16px;
    font-weight: bold;
    color: #007bff;
  }
  
  .original-price {
    font-size: 14px;
    text-decoration: line-through;
    color: #aaa;
  }
  
  .discount-text {
    font-size: 12px;
    color: #f44336;
    font-weight: bold;
  }
  
  .product-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
  }
  
  .product-actions {
    display: flex;
    gap: 8px;
  }
  
  .action-button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background: #007bff;
    color: white;
    font-size: 14px;
    cursor: pointer;
  }
  
  .favorite-button {
    background: #fff;
    color: #007bff;
    border: 1px solid #ddd;
  }
  
  .favorite-button .fa-heart {
    font-size: 16px;
  }
  </style>
  