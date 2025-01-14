import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
        cartCount: 0,
    }),
    actions: {
        addToCart(product) {
            const existingProduct = this.cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += product.quantity;
            } else {
                this.cart.push({ ...product, quantity: product.quantity });
            }
            this.updateCartCount();
        },
        removeFromCart(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.updateCartCount();
        },
        updateCartQuantity({ productId, quantity }) {
            const product = this.cart.find(item => item.id === productId);
            if (product) {
                product.quantity = quantity;
            }
            this.updateCartCount();
        },
        clearCart() {
            this.cart = [];
            this.updateCartCount();
        },
        updateCartCount() {
            this.cartCount = this.cart.reduce((count, item) => count + item.quantity, 0);
        }
    },
    getters: {
        cartItems: state => state.cart,
        cartTotal: state => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
        cartItemCount: state => state.cart.reduce((count, item) => count + item.quantity, 0)
    }
});