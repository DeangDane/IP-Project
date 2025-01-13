<template>
    <div class="promo-product card text-center">
      <div class="card-body">
          <h5 class="card-title">THE CREAM</h5>
          <p class="card-subtitle mb-2 text-muted">Rich Anti-Aging Cream</p>
          <img :src="image" alt="Cream" class="img-fluid" />
        
        <div class="price-info">
            <p class="original-price">${{ originalPrice }}</p>
            <p class="discount">{{ discount }}% Off</p>
            <h5 class="current-price">${{ currentPrice }}</h5>
        
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      originalPrice: Number,
      discount: Number,
      currentPrice: Number,
    },
  };
  </script>
  
  <style scoped>
  .promo-product {
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 1px 3px 3px gray;
    width: 300px;
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .card-body , .card-title{
    justify-content: left;
    align-items: start;
  }
  .original-price {
    text-decoration: line-through;
    color: #6c757d; /* Gray */
  }
  
  .discount {
    color: #dc3545; /* Red */
    font-weight: bold;
  }
  
  .current-price {
    color: #28a745; /* Green */
    font-size: 1.5rem;
  }
  .price-info{
    display: flex;
    justify-content: space-around;
    align-items:center ;
  }
  </style>