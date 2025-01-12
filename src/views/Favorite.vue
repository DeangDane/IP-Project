<template>
  <div class="container">
    <h1>Your Favorites</h1>

    <div class="summary">
      <div>All orders ({{ favoriteProducts.length }})</div>
      <div>Pending ({{ pendingOrders }})</div>
      <div>Completed ({{ completedOrders }})</div>
    </div>

    <table class="orders-table">
      <thead>
        <tr>
          <th>Items</th>
          <th>Status</th>
          <th>Total</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in favoriteProducts" :key="item.productId">
          <td>
            <img :src="item.image" :alt="item.name" class="item-image" />
            {{ item.name }}
          </td>
          <td>{{ item.status }}</td>
          <td>\${{ item.total.toFixed(2) }}</td>
          <td @click="showDetails(item)" class="order-details">Order details</td>
        </tr>
      </tbody>
    </table>

    <Modal :isVisible="selectedItem !== null" @close="closeDetails">
      <template #header>
        <h2>{{ selectedItem?.name }}</h2>
      </template>
      <template #body>
        <p>Status: {{ selectedItem?.status }}</p>
        <p>Total: \${{ selectedItem?.total.toFixed(2) }}</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import favorite from './favorite.js'; // Import the favorite.js logic
import Modal from './Modal.vue'; // Import the modal component

export default {
  name: 'Favorite',
  components: {
    Modal,
  },
  data() {
    return {
      selectedItem: null, // Holds the selected item for details
    };
  },
  computed: {
    favoriteProducts() {
      return favorite.getFavoriteProducts(); // Get favorite products
    },
    pendingOrders() {
      return this.favoriteProducts.filter(item => item.status === "Pending").length;
    },
    completedOrders() {
      return this.favoriteProducts.filter(item => item.status === "Completed").length;
    },
  },
  methods: {
    showDetails(item) {
      this.selectedItem = favorite.showFavoriteDetails(item); // Get item details
    },
    closeDetails() {
      this.selectedItem = null; // Close the modal
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

.summary {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 20px;
}

.orders-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.orders-table th,
.orders-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.orders-table th {
  background-color: #f2f2f2;
}

.item-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}

.order-details {
  color: #007BFF;
  cursor: pointer;
}

.order-details:hover {
  text-decoration: underline;
}
</style>