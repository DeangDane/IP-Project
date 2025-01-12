import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [
            {
                // id: 0,
                // name: "John Doe",
                // email: "",
                // address: "",
                // password: "",
                // profile: "",
                // carts: [1, 2, 3],
                // orders: [1, 2, 3],
                // reviews: [1, 2, 3],
            },
        ],
    }),
    actions: {
        addUser(user) {
            this.users.push(user);
        },
        updateUser(id, updatedUser) {
            const index = this.users.findIndex((user) => user.id === id);
            if (index !== -1) {
                this.users[index] = { ...this.users[index], ...updatedUser };
            }
        },
        removeUser(id) {
            this.users = this.users.filter((user) => user.id !== id);
        },
        addProductToCart(userId, productId) {
            const user = this.users.find((user) => user.id === userId);
            if (user) {
                user.carts.push({ productid: productId });
            }
        },
        addOrderToUser(userId, orderId) {
            const user = this.users.find((user) => user.id === userId);
            if (user) {
                user.orders.push({ orderid: orderId });
            }
        },
    },
});
