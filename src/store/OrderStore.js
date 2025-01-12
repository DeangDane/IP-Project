import OrderHistory from "@/views/OrderHistory.vue";
import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", {
  state: () => ({
    orders: [], // Active orders during checkout
    OrderHistory: [] // History of completed purchases
  }),
  actions: {
    // Add a new order
    addOrder(order) {
      this.orders.push(order);
    },
    // Remove an order by ID
    removeOrder(id) {
      this.orders = this.orders.filter(order => order.id !== id);
    },
    // Clear all current orders
    clearOrders() {
      this.orders = [];
    },
    // Save current orders to purchase history
    addToHistory(orderDetails) {
      this.purchaseHistory.push(orderDetails);
    },
  }
});
