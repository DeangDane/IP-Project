<template>
    <div class="product-page">
      <ProductDetails />
      <ProductTabs />
      <RelatedProducts />
    </div>
  </template>
  
  <script>
  import ProductDetails from "../components/ProductDetails.vue";
  import ProductTabs from "../components/ProductTabs.vue";
  import RelatedProducts from "../components/RelatedProducts.vue";
  
  export default {
    components: {
      ProductDetails,
      ProductTabs,
      RelatedProducts,
    },
  };
  </script>