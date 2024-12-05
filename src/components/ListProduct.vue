<template>
    <div class="list-product">
      <!-- Discount Badge -->
      <div v-if="product.discount" class="discount-badge">
        {{ product.discount }}%
      </div>
  
      <!-- Product Image -->
      <img :src="product.image" alt="Product Image" class="product-image" />
      
      <!-- Product Details -->
      <div class="product-details">
        <h3 class="product-title">{{ product.name }}</h3>
        <div class="product-rating">
          <i
            v-for="n in 5"
            :key="n"
            :class="n <= product.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'"
          ></i>
        </div>
        <div class="product-prices">
          <span class="current-price">${{ product.price }}</span>
          <span v-if="product.originalPrice" class="original-price">
            ${{ product.originalPrice }}
          </span>
          <span v-if="product.discount" class="discount">
            {{ product.discount }}% Off
          </span>
        </div>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-actions">
          <button class="add-to-cart">
            <i class="fa-solid fa-cart-shopping"></i> Add To Cart
          </button>
          <i class="fa-regular fa-heart favorite"></i>
        </div>
      </div>
    </div>
  </template>
  <script>
    export default {
    name: "ListProduct",
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
  }
  
  .discount-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #007bff;
    color: white;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
  }
  
  .product-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: 16px;
  }
  
  .product-details {
    flex: 1;
  }
  
  .product-title {
    font-size: 18px;
    color: #333;
    margin: 0;
  }
  
  .product-rating {
    color: #f7b64d;
    font-size: 14px;
    margin: 8px 0;
  }
  
  .product-prices {
    margin: 8px 0;
  }
  
  .current-price {
    font-size: 20px;
    font-weight: bold;
    color: #007bff;
  }
  
  .original-price {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    margin-left: 8px;
  }
  
  .discount {
    font-size: 14px;
    color: red;
    margin-left: 8px;
  }
  
  .product-description {
    font-size: 14px;
    color: #666;
    margin: 8px 0;
  }
  
  .product-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .add-to-cart {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #007bff;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .add-to-cart i {
    font-size: 16px;
  }
  
  .favorite {
    font-size: 20px;
    color: #007bff;
    cursor: pointer;
  }
  </style>
  