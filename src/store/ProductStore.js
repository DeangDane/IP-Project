import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [
            {
                id: 0,
                category: "Cleanser",
                proName: "Cleansing foam",
                description: "Cleansing foam with aloe vera",
                label: "HOT",
                state: "feature",
                color: "#FF4858",
                price: 19,
                discount: 25,
                rawPrice: 25,
                rating: 4,
                reviews: 10,
                skintype: [
                    "nomal",
                ],
                images: [
                    "images/Product1.png",
                ],
            },

            {
                id: 1,
                category: "Cleanser",
                proName: "Cleansing foam",
                description: "Cleansing foam with aloe vera",
                label: "HOT",
                state: "feature",
                color: "#FF4858",
                price: 19,
                discount: 25,
                rawPrice: 25,
                rating: 4,
                reviews: 10,
                skintype: [
                    "nomal",
                ],
                images: [
                    "images/Product1.png",
                ],
            },

            {
                id: 2,
                category: "Cleanser",
                proName: "Cleansing foam",
                description: "Cleansing foam with aloe vera",
                label: "NEW",
                state: "feature",
                color: "#FFC600",
                price: 19,
                discount: 25,
                rawPrice: 25,
                rating: 4,
                reviews: 10,
                skintype: [
                    "nomal",
                ],
                images: [
                    "images/Product1.png",
                ],
            },

            {
                id: 3,
                category: "Cleanser",
                proName: "Cleansing foam",
                description: "Cleansing foam with aloe vera",
                label: "NEW",
                state: "feature",
                color: "#FFC600",
                price: 19,
                discount: 25,
                rawPrice: 25,
                rating: 4,
                reviews: 10,
                skintype: [
                    "nomal",
                ],
                images: [
                    "images/Product1.png",
                ],
            },

            {
                id: 4,
                category: "Cleanser",
                proName: "Cleansing foam",
                description: "Cleansing foam with aloe vera",
                label: "PRO",
                state: "feature",
                color: "#40BFFF",
                price: 19,
                discount: 25,
                rawPrice: 25,
                rating: 4,
                reviews: 10,
                skintype: [
                    "nomal",
                ],
                images: [
                    "images/Product1.png",
                ],
            },

            {
                id: 5,
                category: "Foam",
                proName: "Cleansing foam",
                description: "Cleansing foam with aloe vera",
                label: "PRO",
                state: "feature",
                color: "#40BFFF",
                price: 19,
                discount: 25,
                rawPrice: 25,
                rating: 4,
                reviews: 10,
                skintype: [
                    "nomal",
                ],
                images: [
                    "images/Product1.png",
                ],
            },

        ],
    }),
    getters: {
        filteredProducts: (state) => (proName) => {
            return state.products.filter((product) => product.proName === proName);
        },

        hotProducts: (state) => {
            return state.products.filter((product) => product.label === "HOT");
        },
        
        newProducts: (state) => {
            return state.products.filter((product) => product.label === "NEW");
        },
        
        proProducts: (state) => {
            return state.products.filter((product) => product.label === "PRO");
        },

    },
    actions: {},
});
