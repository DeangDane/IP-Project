<!-- <template>
  <RouterView />
</template> -->
<template>
  <!-- <RouterView /> -->

  <div id="app">
    <ProductGrid />
  </div>
</template>


<style>
/* Add any global styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: white;
}
</style>

<script>
import ProductGrid from './views/ProductGrid.vue';

export default {
  name: 'App',
  components: {
    ProductGrid,
  },
};
</script>