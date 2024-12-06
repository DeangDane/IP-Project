<template>
  <div id="app">
    <ProductGrid />
    <ProductList/>
  </div>
</template>

<script>
// import ProductGrid from "@/components/ProductList.vue";
import ProductGrid from './components/ProductGrid.vue';
import ProductList from "@/components/ProductList.vue";
export default {
  name: "App",
  components: {
    ProductGrid,
    ProductList
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
