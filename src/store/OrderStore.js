import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", {
    state: () => ({
        orders: []
    }),
    actions: {
        addOrder(order) {
            this.orders.push(order);
        },
        removeOrder(id) {
            this.orders = this.orders.filter(order => order.id !== id);
        },
        clearOrders() {
            this.orders = [];
        }
    }
});

//in this store, make it to store items that is clicked by the checkout button, each element has id,
//  userid, location, coupon, total amount, discount, state, items array which has productid and amount