<template>
    <div class="product-gallery">
      <img :src="bgImage" class="gallery-image" alt="Background Image" />
    </div>
  </template>
  
  <script>
  import bgImage from '../assets/ggslide.png';
  
  export default {
    data() {
      return {
        bgImage,
      };
    },
  };
  </script>
  
  <style scoped>
  .product-gallery {
    width: 70%;
    height: 300px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .gallery-image {
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: cover;
  }
  </style>