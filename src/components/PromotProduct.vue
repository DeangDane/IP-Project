<template>
    <div class="promo-product card text-center">
      <div class="card-body">
        <img :src="image" alt="Product" class="img-fluid" />
      <div>
        <div class="card-titl">
          <h5 class="cardtitle">{{ title }}</h5>
          <p class="card-subtitle mb-2 text-muted">{{ subtitle }}</p>
          <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= rating }">★</span>
          
        <div class="price-info">
            <h5 class="current-price">${{ currentPrice }}</h5>
            <p class="original-price">${{ originalPrice }}</p>
            <p class="discount">{{ discount }}% Off</p>
          
        </div>
      </div>
    </div>
      
      </div>
    </div>
    
      
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      subtitle: String,
      image: String,
      originalPrice: Number,
      discount: Number,
      currentPrice: Number,
      rating: Number,
    },
  };
  </script>
  
  <style scoped>
  .promo-product {
    /* display: flex;
    align-items: center;
    justify-content: center;  */
    background-color: white; 
    border-radius: 8px;
    /* padding: 20px; */
    /* margin: 20px 0; */
    box-shadow: 1px 3px 3px gray;
    width: 490px;
    height: 200px;
    margin-left: 5%;
    
  }
  .card-body{
    display: flex;
    width: 100%;
    height: 100%;
    justify-items: left;
    /* justify-content: space-around;  */
  }
  .card-titl{
    width: 100%;
    height: 50%;
    justify-content: left;
  }
  
  .cardtitle {
    
    font-weight: bold;
  }
  .star {
    font-size: 1.2rem;
  }
  
  .star.filled {
    color: #ffc107; /* Filled stars */
  }
  
  .original-price {
    text-decoration: line-through;
    color: #6c757d; /* Gray */
  }
  
  .discount {
    color: #dc3545; /* Red */
    /* font-weight: bold; */
  }
  
  .current-price {
    color: #1ba7d9; /* Green */
    /* font-size: 1.5rem; */
  }
  .price-info
  {
    display: flex;
    justify-content: space-around;
    
  }
  </style>