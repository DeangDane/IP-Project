<template>
   <div class="product-gallery">
    <img :src="bgImage" alt="Background Image" />
    <!-- <p class="quote">"Calmness comes from within, but a little help never hurt."</p> -->
    <div class="products">
    <div class="product" v-for="product in products" :key="product.id" :style="{ backgroundImage: `url(${product.image})` }">
      
      <h3>{{ product.name }}</h3>
      <p class="price">{{ formatPrice(product.price) }}</p>
      <router-link :to="`/buy/${product.id}`" class="buy-button">Buy Now</router-link>
    </div>
  </div>
  </div>
  </template>

  <script>
  import bgImage from '.././assets/bgslide.png';
  export default {
    data() {
      return {
        bgImage,
        products: [
          {
            id: 1,
            name: "Hydration Cream",
            price: 49.00,
            image: "https://i.pinimg.com/236x/c3/29/33/c329339e939f66f2696f9cbecda43a10.jpg" // Replace with actual image path
          },
          {
            id: 2,
            name: "Rejuvenating Serum",
            price: 39.00,
            image: "https://i.pinimg.com/736x/3b/a7/79/3ba779576684c022fa84ec01e04f9e6e.jpg" // Replace with actual image path
          },
          {
            id: 3,
            name: "Nourishing Oil",
            price: 29.00,
            image: "https://i.pinimg.com/736x/5f/57/e1/5f57e1f63011bdb96667443287e0d79c.jpg" // Replace with actual image path
          }
        ]
      };
    },
    methods: {
      formatPrice(price) {
        return `$${price.toFixed(2)}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .product-gallery {
    position: relative;
    text-align: center;
    padding: 0px;
    width: 100%;

    /* height: 300px; */
    /* display: flex; */
    background-color: #f9e9e1; /* Soft pastel background */
  }
  .img {
    width: 100%;
    height: 200px;
  }
  .quote {
    font-style: italic;
    color: #5b5b5b; /* Soft gray color for the quote */
  }
  
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* gap: 20px; */
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
    bottom: 0;
    height:0px;
    left: 23%;
    
    
  }
  .products img {
    width: 100%;
    height: 100%;
  }
  
  
 
  .product {
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 250px;
  /* border-radius: 8px; */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  position: relative;
  color: black;

}
  
  .product img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
    /* display: flex; */
    width: 40px;
    height: 40px;
    /* background-color: red; */
  }
  
  .price {
    font-weight: bold;
    color: black;
    
    
  }
  
  .buy-button {
    display: inline-block;
    margin-top: 10px;
    /* padding: 10px; */
    background-color:lightpink;
    color: white;
    text-decoration: none;
    border-radius: 5px;

  }
  
  .buy-button:hover {
    background-color: #0056b3;
  }
  .bg-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

  </style>