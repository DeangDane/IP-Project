<template>

  <div class="homeView">
    <AutoImageSlider />

    <div class="text">
      FEATURE PRODUCTS
    </div>

    <div class="content">
      <GridProduct v-for="gridPro in hotProducts" :image="gridPro.images[0]" :color="gridPro.color" :label="gridPro.label"
        :proName="gridPro.proName" :price="gridPro.price" />
    </div>

    <button class="viewAll">View All</button>

    <div class="text">
      BEST SELLER
    </div>

    <div class="content">
      <GridProduct v-for="gridPro in hotProducts" :image="gridPro.images[0]" :color="gridPro.color" :label="gridPro.label"
        :proName="gridPro.proName" :price="gridPro.price" />
    </div>

    <div class="text">
      PROMOTIONS
    </div>

    <div class="content">
      <GridProduct v-for="gridPro in proProducts" :image="gridPro.images[0]" :color="gridPro.color" :label="gridPro.label"
        :proName="gridPro.proName" :price="gridPro.price" />
    </div>

    <div class="text">
      NEW ARRIVALS
    </div>

    <div class="content">
      <GridProduct v-for="gridPro in newProducts" :image="gridPro.images[0]" :color="gridPro.color" :label="gridPro.label"
        :proName="gridPro.proName" :price="gridPro.price" />
    </div>

    <div class="search-container">
      <input type="text" placeholder="Search query..." class="search-input" />
      <button class="search-button">Search</button>
    </div>

  </div>

</template>

<script>
import Review from "@/components/Review.vue";
import PageNumber from "@/components/PageNumber.vue";
import SearchQ from "@/components/SearchQ.vue";
import GridProduct from "@/components/GridProduct.vue";
import AutoImageSlider from "@/components/AutoImageSlider.vue";
import { useProductStore } from "@/store/ProductStore";
import { computed } from "vue";

export default {
  components: {
    Review,
    PageNumber,
    SearchQ,
    GridProduct,
    AutoImageSlider
  },
  setup() {
    const productStore = useProductStore();

    const hotProducts = computed(() => productStore.hotProducts);
    const newProducts = computed(() => productStore.newProducts);
    const proProducts = computed(() => productStore.proProducts);

    return {
      hotProducts,
      newProducts,
      proProducts,
    };
  },
  // setup() {
  //   const productStore = useProductStore();
  //   return {
  //     hotProducts: productStore.hotProducts,
  //     newProducts: productStore.newProducts,
  //     proProducts: productStore.proProducts,
  //   };
  // },

};
</script>
<style>
.homeView {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.text {
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

.viewAll {
  border: none;
  background-color: white;
  font-family: 'Poppins', sans-serif;
  font-size: large;
}

.viewAll:hover {
  color: #33A0FF;
}


.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #a3c1ff;
  /* Light blue border */
  border-radius: 5px;
  overflow: hidden;
  /* To keep the border radius */
  width: 30%;
  margin-left: 30%;
  margin-bottom: 20px;
}

.search-input {
  border: none;
  padding: 10px;
  outline: none;
  flex-grow: 1;
  /* Allow input to take available space */
  font-size: 16px;
  color: #999;
  /* Light gray text */
}

.search-button {
  background-color: #00aaff;
  /* Blue background */
  color: white;
  /* White text */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background-color: #0088cc;
  /* Darker blue on hover */
}


.boxx {
  display: flex;
  width: auto;
  justify-content: center;
}

#navbarNav {
  justify-content: space-between;
  display: flex;
}

.btn-user {
  border: none;
  background-color: aliceblue;
}

.btn-shop {
  border: none;
  background-color: aliceblue;
}

.narbar-li {
  display: flex;
  align-items: center;
  gap: 20px;
  list-style-type: none;
  justify-content: center;

}

.narbar-li a {
  color: black;
}

body {
  font-family: 'Cormorant Garamond', serif;
  /* Apply the font globally */
}

.navbar-brand span {
  font-family: 'Cormorant Garamond', serif;
  /* Apply to brand name */
  font-weight: 700;
  /* Bold weight */
}

.grid-containe {

  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

}

.footer {
  background-color: brown;
  width: 100%;
  height: 300px;
  display: flex;

}
</style>