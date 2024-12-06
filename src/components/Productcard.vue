<template>
  <div class="grid-product">
    <div v-if="product.isHot" class="product-badge">Hot</div>
    <img :src="product.image" alt="Product Image" class="product-image" />
    <div class="product-details">
      <h3 class="product-title">{{ product.title }}</h3>
      <div class="product-rating">
        <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= rating }">★</span>
      </div>
      <div class="product-price">{{ product.price }}</div>
      <div class="icon">
        <i class="fas fa-shopping-cart"></i>
        <i class="fa fa-heart"></i>
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
  /* padding: 10px; */
  width: 230px;
  /* background-color: rgb(214, 214, 214); */
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 1px 3px 3px gray;
  height: 300px;
  
}
.product-badge {
  position: absolute;
  top: 7px;
  left: 7px;
  background: red;
  color: white;
  padding: 1px 8px;
  font-size: 8px;
  border-radius: 4px;
}
.product-image {
  margin-top: 40px;
  width: 50%;
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
.product-details .icon i {
  right: 5px;
  font-size: 15px;
  padding: 8px;
  border-radius: 50%;
}
</style>
