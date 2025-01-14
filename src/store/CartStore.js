import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartCount: 0,
        cart: [
            {
                id: 1,
                price: 20,
                proName: "Niacinamide 10% Serum",
                images: ["images/Product1.png"]
            },
            {
                id: 2,
                price: 20,
                proName: "Niacinamide 10% Serum",
                images: ["images/Product1.png"]
            },
        ],
    }),
    actions: {
        addToCart(product) {
            this.cart.push(product);
            this.cartCount++;
        },
        removeFromCart(productId) {
            this.cart = this.cart.filter(product => product.id !== productId);
            this.cartCount = this.cart.length;
        },
        countItemsInCart() {
            return this.cart.length;
        },
        getProductById(productId) {
            return this.cart.find(product => product.id === productId);
        }
    }
});