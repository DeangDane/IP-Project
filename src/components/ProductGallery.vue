<template>
  <div class="product-gallery">
    <img :src="bgImage" style="width: 100%; height: 30rem;" alt="Background Image" />
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="product-image" :style="{ backgroundImage: `url(${product.image})` }">
      <div class="bg-img">
      <div class="price">
        <h6 class="product-name">{{ product.name }}</h6>
      </div>
          <div class="price-info">
              <p class="original-price">{{ formatPrice(product.originalPrice) }}</p>
              <p class="discount">{{ product.discount }}% Off</p>
              <h5 class="current-price">{{ formatPrice(product.price) }}</h5>
            
          </div>
      </div>
    </div>
       
        
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from '../assets/bgslide.png';

export default {
  data() {
    return {
      bgImage,
      products: [
        {
          id: 1,
          name: "The Cream",
          price: 8.00,
          originalPrice: 40.00,
          discount: 80,
          image: "https://i.pinimg.com/736x/ea/f3/83/eaf3832c96a9053a4d74b1083edf9e29.jpg"
        },
        {
          id: 2,
          name: "Hydrogel Cream",
          price: 10.00,
          originalPrice: 20.00,
          discount: 50,
          image: "https://i.pinimg.com/736x/26/ba/43/26ba4361195b64d571fb11cb56787faf.jpg"
        },
        {
          id: 3,
          name: "Oil-Free Eye Makeup Remover",
          price: 26.09,
          originalPrice: 34.93,
          discount: 24,
          image: "https://i.pinimg.com/736x/43/ce/43/43ce43b0e5a7100140a5d397b358b987.jpg"
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
.price{
  width: 70%;
  height: 70%;
  /* background-color: gray; */
  font-family: 'Poppins', sans-serif; 
  margin-top: 5%;
  margin-left: 10px;
  /* background-color: red; */
  
}
.product-gallery {
  width: 99%;
  /* background-color: #f9e9e1; */
  height: 650px;
  margin: 0 auto;
}

.products {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  position: relative;
  top: -120px;
  background-color: white;
  /* border: 2px solid black; */
 
  
  

}

.product {
  /* position: relative; */
  width: 100%;
  /* margin: 10px; */
  /* text-align: center; */
  /* padding: 110px; */
  /* height: 300px; */
  /* background-color: white; */
  border: 1px solid rgb(222, 209, 209);
 
}

.product-image {
  width: 100%;
  height: 250px; 
  background-size: contain; /* Change from cover to contain */
  background-position: center;
  /* position: absolute; */
  top: 0;
  left: 0;
  z-index: 1; /* Send image behind text */
  background-repeat: no-repeat; /* Prevent image from repeating */
}

.price-info {
  position: relative;
  z-index: 2; 
display: flex;
font-family: 'Poppins', sans-serif; 
/* gap: 30px; */
align-items: center;
justify-content: center;
/* background-color: red; */

}

.current-price {
  font-weight: bold;
  color: rgb(0, 195, 255);
  margin-left: 20%;
  
}

.original-price {
  text-decoration: line-through;
  color: grey;
  margin-right: 5%;
}

.discount {
  color:red;
  margin-right: 10%;
}

.product-name {
  font-weight: bold;
  
  
  z-index: 2; 
  color: #223263;
  /* margin-top: 10%; */

}
.bg-img {
  background-color: rgba(240, 128, 128, 0.3);
  backdrop-filter: blur(0.2px); 
  padding: 2px; 
  height: 100%;
  width: 100%;
 
 
}
</style>
