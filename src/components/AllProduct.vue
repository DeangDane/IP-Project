<template>
    <!-- <Normalslide/> -->
    <div class="all-products-page">
        <!-- Sidebar -->
        <aside class="sidebar">
            <h3>Categories</h3>
            <ul>
                <li v-for="(category, index) in categories" :key="index">
                    {{ category.name }}
                    <span>{{ category.count }}</span>
                </li>
            </ul>

            <h3>Skin Type</h3>
            <ul>
                <li v-for="(skinType, index) in skinTypes" :key="index">
                    {{ skinType.name }}
                    <span>{{ skinType.count }}</span>
                </li>
            </ul>
        </aside>

        <!-- Main Content -->
        <section class="main-content">
            <div class="top-bar">
                <span>{{ products.length }} Items</span>
                <div class="filters">
                    <label>
                        Sort By
                        <select>
                            <option>Name</option>
                            <option>Price</option>
                            <option>Rating</option>
                        </select>
                    </label>
                    <label>
                        Show
                        <select>
                            <option>12</option>
                            <option>24</option>
                            <option>36</option>
                        </select>
                    </label>
                </div>
            </div>

            <!-- Product Grid -->
            <ProductGrid :products="products" />
        </section>
    </div>
</template>

<script>
import ProductGrid from "@/components/ProductGrid.vue";
// import Normalslide from "@/components/Normalslide.vue";

export default {
    name: "AllProduct",
    components: { ProductGrid },
    data() {
        return {
            categories: [
                { name: "Cleanser", count: 2 },
                { name: "Toner", count: 48 },
                { name: "Serum & Essence", count: 14 },
                { name: "Moisturizer", count: 15 },
                { name: "Sunscreen", count: 23 },
            ],
            skinTypes: [
                { name: "Dry", count: 2 },
                { name: "Oily", count: 48 },
                { name: "Combination", count: 14 },
                { name: "Ace", count: 15 },
            ],
            products: [
                {
                    title: "Square one",
                    price: "$18.9",
                    image:
                        "https://www.kiehls.com.ph/wp-content/uploads/2023/05/kiehls-face-ultra-pure-high-potency-serum-hyaluronic-acid-30ml-3605972791313-front-1-570x670.jpg",
                    rating: 4,
                    isHot: true,
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Page Layout */
.all-products-page {
    display: flex;
}

/* Sidebar */
.sidebar {
    width: 65%;
    padding: 30px;
    margin-right: 10px;
    background: #f9f9f9;
    border-right: 1px solid #ddd;
}

.sidebar h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
}

/* Main Content */
.main-content {
    width: 75%;
    padding: 20px;
    position: relative;
}

.top-bar {
    display: flex;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    background-color: #cec9c9cb;

}

.filters label {
    margin-right: 10px;
}

.filters select {
    margin-left: 5px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ddd;
    color: #333;
    font-size: 14px;
    cursor: pointer;


}

/* Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20px, 1fr));
    gap: 20px;
}
</style>