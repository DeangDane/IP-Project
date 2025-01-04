<template>
  <div id="app">
    <!-- <ProductGrid /> -->
    <ProductList/>
    <AllProduct/>
  </div>
</template>

<script>
// import ProductGrid from "@/components/ProductList.vue";
import AllProduct from './views/AllProduct.vue';
// import ProductGrid from './components/ProductGrid.vue';
// import ProductList from "@/components/ProductList.vue";

export default {
  name: "App",
  components: {
    // ProductGrid,
    // ProductList,
    AllProduct,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: white;
}
</style>
