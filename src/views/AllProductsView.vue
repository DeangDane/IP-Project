<template>
  <Normalslide />
  <div class="product-view">

    <!-- Sidebar -->
    <aside class="sidebar">
      <h3>Categories</h3>
      <div v-for="category in categories" :key="category" @click="selectCategory(category)" class="filter-item">
        <input type="radio" :value="category" v-model="selectedCategory" /> {{ category }}
      </div>

      <h3>Skin Type</h3>
      <div v-for="skinType in skinTypes" :key="skinType" @click="selectSkinType(skinType)" class="filter-item">
        <input type="radio" :value="skinType" v-model="selectedSkinType" /> {{ skinType }}
      </div>

      <h3>Price Range</h3>
      <input type="range" v-model="priceRange[0]" min="0" max="50" step="1" />
        <input type="range" v-model="priceRange[1]" min="0" max="50" step="1" />
        <p>Range: ${{ priceRange[0] }} - ${{ priceRange[1] }}</p>

      <h3>Brand</h3>
      <div v-for="brand in brands" :key="brand" @click="selectBrand(brand)" class="filter-item">
        <input type="radio" :value="brand" v-model="selectedBrand" /> {{ brand }}
      </div>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Controls -->
      <div class="controls">
        <div>{{ totalItems }} Items</div>
        <div>
          Sort By:
          <select v-model="sortBy" @change="sortItems">
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
        <div>
          Show:
          <select v-model="itemsPerPage" @change="updatePagination">
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="24">24</option>
          </select>
        </div>
        <!-- View toggle buttons -->
        <div class="view-toggle">
          <button @click="viewMode = 'grid'" :class="{ active: viewMode === 'grid' }"><span class="fa fa-th"></span>
            Grid</button>
          <button @click="viewMode = 'list'" :class="{ active: viewMode === 'list' }"><span class="fa fa-list"></span>
            List</button>
        </div>
      </div>


      <!-- Product Display -->
      <div v-if="viewMode === 'grid'" class="product-grid">
        <GridProduct v-for="gridPro in paginatedProducts" :key="gridPro.id" :image="gridPro.images[0]"
          :color="gridPro.color" :label="gridPro.label" :proName="gridPro.proName" :price="gridPro.price"
          :rawPrice="gridPro.rawPrice" :discount="gridPro.discount" />
      </div>
      <div v-else class="product-list">
        <ListProduct v-for="product in paginatedProducts" :key="product.id" :image="product.images[0]"
          :color="product.color" :label="product.label" :proName="product.proName" :price="product.price"
          :rawPrice="gridPro.rawPrice" :discount="gridPro.discount" />
      </div>

      <!-- Pagination -->
      <PageNumber :totalPages="totalPages" :currentPage="currentPage" @page-change="goToPage" />
    </div>
  </div>
</template>

<script>

import GridProduct from "@/components/GridProduct.vue";
import ListProduct from "@/components/ListProduct.vue";
import PageNumber from "@/components/PageNumber.vue";
import Normalslide from "@/components/Normalslide.vue";
import { computed } from "vue";
import { useProductStore } from "@/store/ProductStore";
import { ref } from "vue";

export default {
  components: {
    GridProduct,
    ListProduct,
    PageNumber,
    Normalslide
  },
  setup() {
    const productStore = useProductStore();
    const products = computed(() => productStore.products);

    const viewMode = ref('grid');
    const query = ref('');
    const sortBy = ref('name');
    const itemsPerPage = ref(9);
    const currentPage = ref(1);

    const categories = ['Cleanser', 'Toner', 'Serum &', 'Moisturizer', 'Sunscreen'];
    const skinTypes = ['Dry', 'Oily', 'Combination', 'Sensitive', 'Normal'];
    const brands = ['Anua', 'Skin1004', 'Dr. G', 'Torriden'];

    const selectedCategory = ref(null);
    const selectedSkinType = ref(null);
    const selectedBrand = ref(null);
    const priceRange = ref([0, 50]); // Default price range

    const selectCategory = (category) => {
      selectedCategory.value = category;
    };

    const selectSkinType = (skinType) => {
      selectedSkinType.value = skinType;
    };

    const selectBrand = (brand) => {
      selectedBrand.value = brand;
    };

    const filteredProducts = computed(() => {
      return products.value.filter(product => {
        const categoryMatch = !selectedCategory.value || selectedCategory.value === product.category;
        const skinTypeMatch = !selectedSkinType.value || product.skintype.includes(selectedSkinType.value);
        const brandMatch = !selectedBrand.value || selectedBrand.value === product.brand;
        const priceMatch = product.price >= priceRange.value[0] && product.price <= priceRange.value[1];

        return categoryMatch && skinTypeMatch && brandMatch && priceMatch;
      });
    });

    return {
      viewMode,
      query,
      products,
      sortBy,
      itemsPerPage,
      currentPage,

      categories,
      skinTypes,
      brands,
      selectedCategory,
      selectedSkinType,
      selectedBrand,
      priceRange,
      filteredProducts,
      selectCategory,
      selectSkinType,
      selectBrand,
    };
  },
  computed: {

    totalItems() {
      return this.filteredProducts.length;
    },

    filteredProducts() {
      if (this.query) {
        return this.filteredProducts.filter(product =>
          product.name.toLowerCase().includes(this.query.toLowerCase())
        );
      }
      return this.filteredProducts;
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
    sortedItems() {
      return [...this.items].sort((a, b) => {
        if (this.sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (this.sortBy === "price") {
          return a.price - b.price;
        } else if (this.sortBy === "popularity") {
          return a.popularity - b.popularity; // Example field
        }
        return 0;
      });
    },
  },
  methods: {

    sortItems() {
      this.items = this.sortedItems;
      this.updatePagination();
    },
    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
    handleSearch(query) {
      this.query = query;
      this.currentPage = 1; // Reset to first page on new search
    },
  },
  filters: {
    currency(value) {
      return `$${value.toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
/* Layout */
.product-view {
  font-family: 'Poppins', sans-serif;
  display: flex;
  gap: 20px;
  padding: 20px;
}

.main-content {
  width: 900px;
  flex-grow: 1;
  padding: 20px;
}

.sidebar {
  width: 250px;
  padding: 20px;
  height: 1080px;
  background-color: #f8f8f8;
  border-right: 1px solid #ddd;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.filter-section {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filter-section h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
}

.filter-section ul {
  list-style: none;
  padding: 0;
}

.filter-section ul li {
  margin-bottom: 10px;
}

.filter-section ul li a {
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
}

.filter-section ul li a:hover {
  text-decoration: underline;
}

.filter-section .count {
  background-color: #007bff;
  color: #fff;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 0.9em;
  margin-left: 10px;
}

.filter-section input[type='range'] {
  width: 100%;
  margin-top: 10px;
}

.more-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 1em;
  margin-top: 20px;
}

.more-button:hover {
  background-color: #0056b3;
}

/* View Toggle */
.view-toggle {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.view-toggle button {
  border: none;
  background-color: #f0f0f0;
  color: #333;
  padding: 8px 16px;
  margin-left: 8px;
  border-radius: 4px;
  cursor: pointer;
}

.view-toggle button.active {
  background-color: #007bff;
  color: #fff;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  border: none;
  background-color: #f0f0f0;
  color: #333;
  padding: 8px 12px;
  margin: 0 4px;
  border-radius: 4px;
  cursor: pointer;
}

.pagination button.active {
  background-color: #2ac1bc;
  color: #fff;
}


.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
}

.controls select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.controls select:focus {
  outline: none;
}

.controls div {
  display: flex;
  align-items: center;
}

.controls div:first-child {
  font-weight: bold;
}

.controls div:last-child {
  margin-left: 20px;
}

.controls div:last-child select {
  margin-left: 8px;
}

.controls div:last-child select:focus {
  outline: none;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  margin: 0 5px;
}

.li {
  display: flex;
  gap: 30px;
}
</style>