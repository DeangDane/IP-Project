<template>
  <div class="order-view">
    <h2>Order Management</h2>

    <!-- Current Orders -->
    <section>
      <h3>Current Orders</h3>
      <ul v-if="orders.length > 0">
        <li v-for="order in orders" :key="order.id" class="order-item">
          <h4>Order ID: {{ order.id }}</h4>
          <p>User ID: {{ order.userId }}</p>
          <p>Location: {{ order.location }}</p>
          <p>Total Amount: ${{ order.totalAmount }}</p>
          <p>Discount: {{ order.discount }}%</p>
          <button @click="checkout(order.id)">Checkout</button>
        </li>
      </ul>
      <p v-else>No current orders.</p>
    </section>

    <!-- Order History -->
    <section>
      <h3>Order History</h3>
      <ul v-if="orderHistory.length > 0">
        <li v-for="history in orderHistory" :key="history.id" class="history-item">
          <h4>Order ID: {{ history.id }}</h4>
          <p>User ID: {{ history.userId }}</p>
          <p>Location: {{ history.location }}</p>
          <p>Total Amount: ${{ history.totalAmount }}</p>
          <p>Discount: {{ history.discount }}%</p>
          <ul>
            <li
              v-for="item in history.items"
              :key="item.productId"
              class="history-product"
            >
              <p>Product ID: {{ item.productId }}</p>
              <p>Amount: {{ item.amount }}</p>
            </li>
          </ul>
        </li>
      </ul>
      <p v-else>No order history found.</p>
    </section>
  </div>
</template>

<script>
import { useOrderStore } from '@/store/OrderStore';

export default {
  name: "OrderView",
  setup() {
    const orderStore = useOrderStore();

    // Reactive bindings
    const orders = orderStore.orders;
    const orderHistory = orderStore.orderHistory;

    // Checkout handler
    const checkout = (orderId) => {
      orderStore.checkoutOrder(orderId);
    };

    return {
      orders,
      orderHistory,
      checkout,
    };
  },
};
</script>

<style scoped>
.order-view {
  padding: 20px;
}

.order-item,
.history-item {
  border: 1px solid #ddd;
  margin-bottom: 15px;
  padding: 10px;
}

.history-product {
  margin-left: 15px;
}
</style>
