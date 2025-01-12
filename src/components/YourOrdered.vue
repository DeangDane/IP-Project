<template>
  <div class="container">
    <h1>YOUR ORDERED</h1>
    
    <div class="summary">
      <div>All orders ({{ totalOrders }})</div>
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
        <tr v-for="item in items" :key="item.id">
          <td>
            <img :src="item.image" :alt="item.name" class="item-image">
            {{ item.name }}
          </td>
          <td>{{ item.status }}</td>
          <td>\${{ item.total.toFixed(2) }}</td>
          <td class="order-details" @click="showDetails(item)">order details</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'YourOrdered',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalOrders() {
      return this.items.length;
    },
    pendingOrders() {
      return this.items.filter(item => item.status === "Pending").length;
    },
    completedOrders() {
      return this.items.filter(item => item.status === "Completed").length;
    },
  },
  methods: {
    showDetails(item) {
      // Implement the logic to show order details
      alert(`Details for ${item.name}`);
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
  margin-bottom: 20px;
  color: #333;
}

.summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: bold;
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