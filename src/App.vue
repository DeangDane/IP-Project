<<<<<<< HEAD
<!-- <template>
  <RouterView />
</template> -->
<template>
  <!-- <RouterView /> -->

  <div id="app">
    <ProductGrid />
  </div>
=======
<template>

  <div class="header">
    <div class="upper">
      <div class="brand">
        <img width="156.25rem" height="161.25rem" src="../public/images/logo.png" alt="">
        <p>SKIN GLOW</p>
      </div>

      <div class="options">
        <input type="Search" placeholder="Search">
        <button>cart</button>
        <button>favorite</button>
        <button>Information</button>
      </div>

    </div>

    <div class="lower">
      <NavButton></NavButton>
    </div>
  </div>

  <!-- <RouterView /> -->

  <!-- <Footer></Footer> -->

>>>>>>> 3b9d08cf93e81f40a5aac3ff04b72fdc77fcacae
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
<<<<<<< HEAD
import ProductGrid from './views/ProductGrid.vue';
=======
import NavButton from './components/NavButton.vue';
>>>>>>> 3b9d08cf93e81f40a5aac3ff04b72fdc77fcacae

export default {
  name: 'App',
  components: {
<<<<<<< HEAD
    ProductGrid,
  },
=======
    NavButton,
  }
>>>>>>> 3b9d08cf93e81f40a5aac3ff04b72fdc77fcacae
};
</script>

<style scoped>

.brand{
  display: flex;
  align-items: center;
}

.upper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header{
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #FFCBCF;
}

.lower{
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>