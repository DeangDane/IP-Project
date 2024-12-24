<template>
  <div class="product-tabs">
    <div class="tabs">
      <button @click="activeTab = 'info'">Product Information</button>
      <button @click="activeTab = 'reviews'">Reviews</button>
      <button @click="activeTab = 'another'">Another Tab</button>
    </div>
    <div class="tab-content">
      <div v-if="activeTab === 'info'">
        <p>Product information content goes here.</p>
      </div>
      <div v-if="activeTab === 'reviews'">
        <Reviews />
      </div>
      <div v-if="activeTab === 'another'">
        <p>Another tab content goes here.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Review from "./Review.vue";

export default {
  components: { Review },
  data() {
    return {
      activeTab: 'info',
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>