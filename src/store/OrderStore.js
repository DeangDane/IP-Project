import { defineStore } from "pinia";

export const useOrderStore = defineStore("orderStore", {
  state: () => ({
    orders: [], // Current orders
    orderHistory: JSON.parse(localStorage.getItem("orderHistory")) || [], // Completed orders
  }),

  actions: {
    // Add an order to the current list
    addOrder(orderDetails) {
      const order = {
        id: `ORD-${Date.now()}`, // Unique order ID
        userId: orderDetails.userId, // User ID
        location: orderDetails.location, // Delivery location
        coupon: orderDetails.coupon || null, // Applied coupon (if any)
        totalAmount: orderDetails.totalAmount, // Total amount
        discount: orderDetails.discount || 0, // Discount (if applicable)
        items: orderDetails.items.map((item) => ({
          productId: item.productId, // Product ID
          amount: item.amount, // Amount purchased
        })),
      };
      this.orders.push(order);
    },

    // Save the current order to history and remove it from active orders
    checkoutOrder(orderId) {
      const orderIndex = this.orders.findIndex((order) => order.id === orderId);
      if (orderIndex !== -1) {
        const completedOrder = this.orders[orderIndex];
        this.orderHistory.unshift(completedOrder); // Add to history
        this.orders.splice(orderIndex, 1); // Remove from current orders
        this.saveHistory();
      }
    },

    // Save order history to localStorage
    saveHistory() {
      localStorage.setItem("orderHistory", JSON.stringify(this.orderHistory));
    },
  },
});

//in this store, make it to store items that is clicked by the checkout button, each element has id,
//  userid, location, coupon, total amount, discount, state, items array which has productid and amount
