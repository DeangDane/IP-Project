<template>
  <div class="grid-container">
    <div class="grid-product" v-for="(product, index) in products" :key="index">
      <div v-if="product.isHot" class="product-badge">HOT</div>
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="product-details">
        <h3 class="product-title">{{ product.title }}</h3>
        <div class="product-rating">
          <i
            v-for="star in 5"
            :key="star"
            :class="['fa-star', star <= product.rating ? 'fa-solid' : 'fa-regular']"
          ></i>
        </div>
        <div class="product-price">{{ product.price }}</div>
        <div class="icon">
          <i class="fa-solid fa-basket-shopping"></i>
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGrid",
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
        {
          title: "Square one",
          price: "$18.9",
          image:
            "https://www.kiehls.com.ph/wp-content/uploads/2023/05/kiehls-face-ultra-pure-high-potency-serum-hyaluronic-acid-30ml-3605972791313-front-1-570x670.jpg",
          rating: 4,
          isHot: true,
        },
        {
          title: "Square one",
          price: "$18.9",
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

<style>
/* Grid Container Styling */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3,  1fr);
  gap: 20px;
  padding: 20px;

}

/* Individual Product Card Styling */
.grid-product {
  width: 140px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: red;
  color: white;
  padding: 2px 10px;
  font-size: 10px;
  border-radius: 4px;
}

.product-image {
  margin: 10px auto;
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.product-title {
  font-size: 14px;
  color: #333;
  margin: 5px 0;
}

.product-rating {
  color: #f7b64d;
  font-size: 14px;
  margin: 5px 0;
}

.product-price {
  font-size: 18px;
  color: #007bff;
  font-weight: bold;
  margin: 5px 0;
}

.icon {
  display: flex;
  flex-direction: column;
  top: 10px; 
  right: 10px;
  position: absolute;
  justify-content: center;
  gap: 15px;
  color: #33a0ff;
  margin-top: 10px;
}

.icon i {
  font-size: 16px;
  cursor: pointer;
}
</style>
