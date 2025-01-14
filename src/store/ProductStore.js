import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [
            {
                id: 1,
                category: "Cleanser",
                proName: "Gentle Hydrating Cleanser",
                description: "Foaming cleanser with ceramides and hyaluronic acid to cleanse skin deeply while maintaining its natural moisture barrier. Perfect for daily use and suitable for all skin types, including sensitive skin. Leaves the skin feeling soft, hydrated, and refreshed.",
                label: "HOT",
                state: "feature",
                color: "#FF4858",
                price: 22,
                discount: 20,
                rawPrice: 28,
                rating: 4.5,
                reviews: 15,
                brand: "Anua",
                instock: 25,
                skintype: ["Normal", "Dry", "Oily"],
                images: ["data:image/jpeg;base64,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"]
            },
            {
                id: 2,
                category: "Toner",
                proName: "Centella Calming Toner",
                description: "Toner enriched with centella asiatica to calm and soothe irritated or sensitive skin. Provides intense hydration while helping to restore the skin's natural balance and health. Ideal for preparing your skin for the next steps in your skincare routine.",
                label: "NEW",
                state: "feature",
                color: "#FFC600",
                price: 18,
                discount: 10,
                rawPrice: 20,
                rating: 4.2,
                reviews: 8,
                brand: "Skin1004",
                instock: 30,
                skintype: ["Sensitive", "Normal"],
                images: ["data:image/jpeg;base64,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"]
            },
            {
                id: 3,
                category: "Serum",
                proName: "Niacinamide 10% Serum",
                description: "Brightening serum with niacinamide and zinc that helps reduce dark spots, control sebum production, and minimize the appearance of pores. Its lightweight formula absorbs quickly into the skin, leaving it radiant, even-toned, and smooth. A must-have for anyone seeking clearer and healthier skin.",
                label: "PRO",
                state: "feature",
                color: "#40BFFF",
                price: 20,
                discount: 25,
                rawPrice: 27,
                rating: 4.7,
                reviews: 120,
                brand: "Torriden",
                instock: 40,
                skintype: ["All"],
                images: ["images/Product1.png"]
            },
            {
                id: 4,
                category: "Sunscreen",
                proName: "Aqua Relief Sun Gel",
                description: "Lightweight SPF 50+ PA+++ sunscreen designed to provide powerful UV protection while keeping your skin hydrated throughout the day. Its gel-like texture feels refreshing and absorbs quickly, making it perfect for all skin types, especially oily and combination skin.",
                label: "NEW",
                state: "feature",
                color: "#FFC600",
                price: 23,
                discount: 20,
                rawPrice: 29,
                rating: 4.6,
                reviews: 35,
                brand: "Dr. G",
                instock: 15,
                skintype: ["Normal", "Dry", "Oily"],
                images: ["images/Product4.png"]
            },
            {
                id: 5,
                category: "Moisturizer",
                proName: "Barrier Repair Cream",
                description: "Ceramide-based cream that deeply nourishes and strengthens the skin barrier, protecting it from environmental damage. Perfect for dry and irritated skin, it helps to lock in moisture, leaving your skin smooth, plump, and rejuvenated all day long.",
                label: "HOT",
                state: "feature",
                color: "#FF4858",
                price: 30,
                discount: 25,
                rawPrice: 40,
                rating: 4.9,
                reviews: 85,
                brand: "Anua",
                instock: 18,
                skintype: ["Normal", "Dry"],
                images: ["images/Product5.png"]
            },
            {
                id: 6,
                category: "Cleanser",
                proName: "Tea Tree Foaming Cleanser",
                description: "Gentle cleanser for acne-prone skin infused with tea tree extract to help combat breakouts and control oil. This foaming cleanser effectively cleanses pores while leaving the skin feeling balanced and refreshed. Suitable for daily use on oily and combination skin types.",
                label: "PRO",
                state: "feature",
                color: "#40BFFF",
                price: 19,
                discount: 15,
                rawPrice: 22,
                rating: 4.4,
                reviews: 50,
                brand: "Skin1004",
                instock: 20,
                skintype: ["Oily", "Combination"],
                images: ["images/Product6.png"]
            },
            {
                id: 7,
                category: "Toner",
                proName: "Hydrating Toner",
                description: "Alcohol-free toner formulated to provide intense hydration and refresh your skin. Enriched with nourishing ingredients, it preps the skin for better absorption of serums and creams, leaving it soft, supple, and ready for the day.",
                label: "NEW",
                state: "feature",
                color: "#FFC600",
                price: 17,
                discount: 10,
                rawPrice: 19,
                rating: 4.3,
                reviews: 30,
                brand: "Torriden",
                instock: 25,
                skintype: ["Normal", "Dry"],
                images: ["images/Product7.png"]
            },
            {
                id: 8,
                category: "Serum",
                proName: "Hyaluronic Acid Serum",
                description: "Deeply hydrating serum with multiple molecular weights of hyaluronic acid to penetrate different layers of the skin. Provides long-lasting moisture and helps improve skin elasticity, leaving your skin plump, smooth, and radiant throughout the day.",
                label: "HOT",
                state: "feature",
                color: "#FF4858",
                price: 24,
                discount: 20,
                rawPrice: 30,
                rating: 4.8,
                reviews: 100,
                brand: "Dr. G",
                instock: 35,
                skintype: ["All"],
                images: ["images/Product8.png"]
            },
            {
                id: 9,
                category: "Sunscreen",
                proName: "Matte Finish Sunblock",
                description: "SPF 50+ sunscreen designed for oily skin with a matte finish to reduce shine throughout the day. Provides excellent UV protection while controlling excess oil, making it ideal for those who want lightweight sun protection without the greasy feel.",
                label: "PRO",
                state: "feature",
                color: "#40BFFF",
                price: 26,
                discount: 15,
                rawPrice: 31,
                rating: 4.5,
                reviews: 40,
                brand: "Anua",
                instock: 22,
                skintype: ["Oily", "Combination"],
                images: ["images/Product9.png"]
            },
            {
                id: 10,
                category: "Moisturizer",
                proName: "Centella Repair Cream",
                description: "Calming cream enriched with centella asiatica to soothe and repair irritated skin. Provides deep hydration while helping to strengthen the skin's natural barrier. Ideal for sensitive skin, it leaves your skin feeling smooth, calm, and refreshed.",
                label: "NEW",
                state: "feature",
                color: "#FFC600",
                price: 27,
                discount: 10,
                rawPrice: 30,
                rating: 4.7,
                reviews: 60,
                brand: "Skin1004",
                instock: 15,
                skintype: ["Sensitive", "Normal"],
                images: ["images/Product10.png"]
            },
            {
                id: 11,
                category: "Cleanser",
                proName: "Deep Pore Cleansing Foam",
                description: "Rich foaming cleanser that penetrates deep into pores to remove dirt, oil, and impurities. Formulated with natural extracts to leave the skin feeling clean, refreshed, and balanced. Suitable for daily use and ideal for oily and combination skin types.",
                label: "HOT",
                state: "feature",
                color: "#FF4858",
                price: 21,
                discount: 15,
                rawPrice: 25,
                rating: 4.6,
                reviews: 20,
                brand: "Torriden",
                instock: 30,
                skintype: ["Normal", "Oily", "Combination"],
                images: ["images/Product11.png"]
            },
            {
                id: 12,
                category: "Toner",
                proName: "Brightening Vitamin C Toner",
                description: "Infused with vitamin C and natural antioxidants, this toner helps brighten the complexion and fade dark spots over time. Provides hydration and preps the skin for better absorption of serums and moisturizers. Perfect for dull or uneven skin tones.",
                label: "NEW",
                state: "feature",
                color: "#FFC600",
                price: 24,
                discount: 10,
                rawPrice: 27,
                rating: 4.5,
                reviews: 18,
                brand: "Skin1004",
                instock: 25,
                skintype: ["All"],
                images: ["images/Product12.png"]
            },
            {
                id: 13,
                category: "Serum",
                proName: "Peptide Firming Serum",
                description: "Advanced serum with peptides to improve skin elasticity and reduce the appearance of fine lines and wrinkles. Delivers intense hydration and helps strengthen the skin barrier, leaving the skin firmer, smoother, and more youthful-looking.",
                label: "PRO",
                state: "feature",
                color: "#40BFFF",
                price: 35,
                discount: 20,
                rawPrice: 44,
                rating: 4.8,
                reviews: 85,
                brand: "Dr. G",
                instock: 20,
                skintype: ["Normal", "Dry", "Sensitive"],
                images: ["images/Product13.png"]
            },
            {
                id: 14,
                category: "Sunscreen",
                proName: "UV Shield Hydrating Sunscreen",
                description: "Broad-spectrum SPF 50+ sunscreen with a lightweight, non-greasy formula. Protects against UVA and UVB rays while providing all-day hydration. Ideal for all skin types, including sensitive skin, and perfect for daily use.",
                label: "NEW",
                state: "feature",
                color: "#FFC600",
                price: 22,
                discount: 15,
                rawPrice: 26,
                rating: 4.4,
                reviews: 32,
                brand: "Anua",
                instock: 40,
                skintype: ["Sensitive", "Normal", "Dry"],
                images: ["images/Product14.png"]
            },
            {
                id: 15,
                category: "Moisturizer",
                proName: "Oil-Free Gel Cream",
                description: "Lightweight, oil-free moisturizer designed for oily and acne-prone skin. Hydrates without clogging pores, leaving the skin feeling refreshed and balanced. Formulated with soothing ingredients to reduce redness and irritation.",
                label: "HOT",
                state: "feature",
                color: "#FF4858",
                price: 28,
                discount: 20,
                rawPrice: 35,
                rating: 4.7,
                reviews: 50,
                brand: "Skin1004",
                instock: 15,
                skintype: ["Oily", "Combination"],
                images: ["images/Product15.png"]
            },
            {
                id: 16,
                category: "Cleanser",
                proName: "Calming Micellar Gel Cleanser",
                description: "Gentle micellar cleanser with a gel texture that removes makeup, dirt, and impurities without stripping the skin. Enriched with soothing botanicals to calm irritation and leave the skin feeling soft and hydrated.",
                label: "PRO",
                state: "feature",
                color: "#40BFFF",
                price: 23,
                discount: 10,
                rawPrice: 26,
                rating: 4.3,
                reviews: 25,
                brand: "Dr. G",
                instock: 18,
                skintype: ["Sensitive", "Dry", "Normal"],
                images: ["images/Product16.png"]
            },
            {
                id: 17,
                category: "Toner",
                proName: "AHA BHA Exfoliating Toner",
                description: "Dual-action toner with AHA and BHA to gently exfoliate dead skin cells and unclog pores. Helps to refine skin texture and promote a brighter, clearer complexion. Suitable for oily and acne-prone skin types.",
                label: "HOT",
                state: "feature",
                color: "#FF4858",
                price: 26,
                discount: 20,
                rawPrice: 32,
                rating: 4.6,
                reviews: 45,
                brand: "Torriden",
                instock: 30,
                skintype: ["Oily", "Combination"],
                images: ["images/Product17.png"]
            },
            {
                id: 18,
                category: "Serum",
                proName: "Centella Repair Serum",
                description: "Calming serum with centella asiatica to soothe and repair sensitive or irritated skin. Provides hydration and strengthens the skin barrier for improved resilience against environmental stressors.",
                label: "NEW",
                state: "feature",
                color: "#FFC600",
                price: 27,
                discount: 15,
                rawPrice: 32,
                rating: 4.7,
                reviews: 40,
                brand: "Skin1004",
                instock: 20,
                skintype: ["Sensitive", "Normal"],
                images: ["images/Product18.png"]
            },
            {
                id: 19,
                category: "Sunscreen",
                proName: "Moisture Lock Sun Essence",
                description: "Hydrating sun essence with SPF 50+ PA+++ to provide superior UV protection while locking in moisture. The lightweight formula absorbs quickly without leaving a white cast, making it perfect for everyday use.",
                label: "PRO",
                state: "feature",
                color: "#40BFFF",
                price: 30,
                discount: 20,
                rawPrice: 38,
                rating: 4.8,
                reviews: 60,
                brand: "Dr. G",
                instock: 25,
                skintype: ["Normal", "Dry", "Sensitive"],
                images: ["images/Product19.png"]
            },
            {
                id: 20,
                category: "Moisturizer",
                proName: "Probiotic Barrier Cream",
                description: "Nourishing cream infused with probiotics to support a healthy skin microbiome and strengthen the natural barrier. Provides long-lasting hydration and helps improve the overall texture and appearance of the skin.",
                label: "HOT",
                state: "feature",
                color: "#FF4858",
                price: 34,
                discount: 25,
                rawPrice: 45,
                rating: 4.9,
                reviews: 70,
                brand: "Anua",
                instock: 12,
                skintype: ["Normal", "Dry"],
                images: ["images/Product20.png"]
            }
        ],

    }),
    getters: {
        getProductByName: (state) => (name) => {
            return state.products.filter((product) => product.proName === name);
        },
        getProductBySkinType: (state) => (skinType) => {
            return state.products.filter((product) =>
                product.skintype.includes(skinType)
            );
        },
        getProductById: (state) => (id) => {
            return state.products.find((product) => product.id === id);
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
    mutations: {
    },
    actions: {
    },
});

// import { defineStore } from "pinia";

// export const useCartStore = defineStore("cart", {
//     state: () => ({
//         cart: []
//     }),
//     actions: {
//         addItemToCart(productid, amount, price, state) {
//             const existingItem = this.cart.items.find(item => item.productid === productid);
//             if (existingItem) {
//                 existingItem.amount += amount;
//                 existingItem.price = price;
//                 existingItem.state = state;
//             } else {
//                 this.cart.items.push({
//                     productid,
//                     amount,
//                     price,
//                     state
//                 });
//             }
//         },
//         removeItemFromCart(productid) {
//             this.cart.items = this.cart.items.filter(item => item.productid !== productid);
//         },
//         clearCart() {
//             this.cart.items = [];
//         }
//     }
// });

// { id: 0, category: "Cleanser", proName: "Cleansing foam", description: "Cleansing foam with aloe vera", label: "HOT", state: "feature", color: "#FF4858", price: 19, discount: 25, rawPrice: 25, rating: 4, reviews: 10, brand: "Anua", instock: 10, skintype: ["nomal", "dry", "oily",], images: ["images/Product1.png"],},
