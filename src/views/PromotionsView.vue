<template>
  <div>
    <section class="header1">
      <img src="../assets/header1.png" alt="header1" class="header1-image" />
    </section>
    <div class="promo-product-container">
      <PromoProduct
        image="src/assets/promo2.png"
        :originalPrice="40"
        :discount="80"
        :currentPrice="8"
      />
      <PromoProduct
        image="src/assets/promo1.png"
        :originalPrice="20"
        :discount="50"
        :currentPrice="10"
      />
      <PromoProduct
       image="src/assets/promo3.png"
        :originalPrice="34.33"
        :discount="24"
        :currentPrice="26.09"
      />
    </div>
    <h4 align="center" style="margin-top: 1.5rem;"><b>BEST SELLER</b></h4>
    <div class="grid-container">
      <ListProduct
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
    <PageNumber/>
  </div>
</template>

<script>
import PromoProduct from '@/components/PromoProduct.vue';
import ListProduct from "@/components/ListProduct.vue";
import PageNumber from '@/components/PageNumber.vue';

export default {
  name: "Promotion",
  components: {
    PromoProduct,
    ListProduct,
    PageNumber,
  },
  data() {
    return {
      products: [
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/49/9a/3e/499a3eaf66e7915c0907c9ae6403a1a8.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/f2/06/1b/f2061bd1e9a7c88c19804edc6dbe0868.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/54/73/fd/5473fd9e3d2d567af59998fb6ff76bd8.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/4b/f7/18/4bf718ef4218f11b7264e2be908ce6e6.jpg',
          price: '$17.9',
          rating: 4,
          isHot: true,
        },
         {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/4b/f7/18/4bf718ef4218f11b7264e2be908ce6e6.jpg',
          price: '$17.9',
          rating: 4,
          isHot: true,
        },
         {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/4b/f7/18/4bf718ef4218f11b7264e2be908ce6e6.jpg',
          price: '$17.9',
          rating: 4,
          isHot: true,
        },
         {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/4b/f7/18/4bf718ef4218f11b7264e2be908ce6e6.jpg',
          price: '$17.9',
          rating: 4,
          isHot: true,
        },
         {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/4b/f7/18/4bf718ef4218f11b7264e2be908ce6e6.jpg',
          price: '$17.9',
          rating: 4,
          isHot: true,
        },
         {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/49/9a/3e/499a3eaf66e7915c0907c9ae6403a1a8.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/f2/06/1b/f2061bd1e9a7c88c19804edc6dbe0868.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/54/73/fd/5473fd9e3d2d567af59998fb6ff76bd8.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/4b/f7/18/4bf718ef4218f11b7264e2be908ce6e6.jpg',
          price: '$17.9',
          rating: 4,
          isHot: true,
        },
         {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/49/9a/3e/499a3eaf66e7915c0907c9ae6403a1a8.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/f2/06/1b/f2061bd1e9a7c88c19804edc6dbe0868.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/54/73/fd/5473fd9e3d2d567af59998fb6ff76bd8.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/4b/f7/18/4bf718ef4218f11b7264e2be908ce6e6.jpg',
          price: '$17.9',
          rating: 4,
          isHot: true,
        },
         {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/49/9a/3e/499a3eaf66e7915c0907c9ae6403a1a8.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/f2/06/1b/f2061bd1e9a7c88c19804edc6dbe0868.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/54/73/fd/5473fd9e3d2d567af59998fb6ff76bd8.jpg',
          price: '$18.9',
          rating: 4,
          isHot: true,
        },
        {
          title: 'Square One',
          image: 'https://i.pinimg.com/736x/4b/f7/18/4bf718ef4218f11b7264e2be908ce6e6.jpg',
          price: '$17.9',
          rating: 4,
          isHot: true,
        },
        
        
      ],
    };
  },
};
</script>
<style>
/* General Styling */
body {
 font-family: "Arial", sans-serif;
  color: #333;
  width: 1440px;
  margin: 0 auto;
}

h4 {
  font-size: 24px;
  color: #333;
  margin-bottom: 1rem;
}

.header1 {
  position: relative;
  text-align: center;
  margin-bottom: 1.5rem;
}

.header1-image {
  width: 100%;
  height:520px;
 object-fit: cover;
 
}

/* PromoProduct Section */
.promo-product-container {
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  margin: 0;
  padding: 0;
}
.promo-product {
background-color: #f9dada;
 border: none;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 2rem;
}
</style>

      
    