<template>
  <div class="order-history">
    <h1>Order History</h1>
    <div v-if="orders.length === 0">
      <p>No orders found.</p>
    </div>
    <div v-else>
      <div v-for="(order, index) in orders" :key="order.id" class="order-card">
        <h3>Order #{{ order.id }}</h3>
        <p><strong>User ID:</strong> {{ order.userId }}</p>
        <p><strong>Location:</strong> {{ order.location }}</p>
        <p><strong>Coupon:</strong> {{ order.coupon }}</p>
        <p><strong>Total Amount:</strong> ${{ order.totalAmount }}</p>
        <p><strong>Discount:</strong> ${{ order.discount }}</p>
        <p><strong>State:</strong> {{ order.state }}</p>
        <h4>Items:</h4>
        <ul>
          <li v-for="(item, idx) in order.items" :key="idx">
            Product ID: {{ item.productId }}, Amount: {{ item.amount }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from "@/store/OrderStore";

export default {
  setup() {
    const orderStore = useOrderStore();
    return {
      orders: orderStore.orders,
    };
  },
};
</script>

<style scoped>
.order-card {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
