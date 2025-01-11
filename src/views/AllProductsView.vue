<template>
    <div class="product-view">

      <!-- Sidebar -->
      <aside class="sidebar">
        <!-- Categories -->
        <div class="filter-section">
        <h3>Categories</h3>
        <ul>
          <li>
            <a href="#">Cleanser</a> <span class="count">2</span>
          </li>
          <li>
            <a href="#">Toner</a> <span class="count">48</span>
          </li>
          <li>
            <a href="#">Serum & Essence</a> <span class="count">14</span>
          </li>
          <li>
            <a href="#">Moisturizer</a> <span class="count">15</span>
          </li>
          <li>
            <a href="#">Sunscreen</a> <span class="count">23</span>
          </li>
        </ul>
      </div>

      <!-- Skin Type -->
      <div class="filter-section">
        <h3>Skin Type</h3>
        <ul>
          <li>
            <a href="#">Dry</a> <span class="count">2</span>
          </li>
          <li>
            <a href="#">Oily</a> <span class="count">48</span>
          </li>
          <li>
            <a href="#">Combination</a> <span class="count">14</span>
          </li>
          <li>
            <a href="#">Sensitive</a> <span class="count">15</span>
          </li>
          <li>
            <a href="#">Normal</a> <span class="count">23</span>
          </li>
        </ul>
      </div>
  
        <!-- Prices -->
        <div class="filter-section">
          <h3>Prices</h3>
          <p>Range: ${{ priceRange[0].toFixed(2) }} - ${{ priceRange[1].toFixed(2) }}</p>
          <input type="range" v-model="priceRange[0]" min="10" max="50" />
          <input type="range" v-model="priceRange[1]" min="10" max="50" />
        </div>
  
        <!-- Brand -->
        <div class="filter-section">
          <h3>Brand</h3>
          <ul>
          <li>
            <a href="#">Anua</a> <span class="count">99</span>
          </li>
          <li>
            <a href="#">Skin1004</a> <span class="count">99</span>
          </li>
          <li>
            <a href="#">Dr. G</a> <span class="count">99</span>
          </li>
          <li>
            <a href="#">Torriden</a> <span class="count">99</span>
          </li>
        </ul>
        </div>
  
        <!-- More Button -->
        <button class="more-button">More</button>
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
      <button @click="viewMode = 'grid'" :class="{ active: viewMode === 'grid' }"><span class="fa fa-th"></span> Grid</button>
      <button @click="viewMode = 'list'" :class="{ active: viewMode === 'list' }"><span class="fa fa-list"></span> List</button>
    </div>
  </div>


    <!-- Product Display -->
    <div v-if="viewMode === 'grid'" class="product-grid">
      <GridProduct 
        v-for="gridPro in paginatedProducts" 
        :key="gridPro.id" 
        :image="gridPro.image" 
        :color="gridPro.color" 
        :label="gridPro.label"
        :proName="gridPro.name" 
        :price="gridPro.price" 
      />
    </div>
    <div v-else class="product-list">
      <ListProduct 
        v-for="product in paginatedProducts" 
        :key="product.id" 
        :image="product.image" 
        :color="product.color" 
        :label="product.label"
        :proName="product.name" 
        :price="product.price" 
      />
    </div>

    <!-- Pagination -->
    <PageNumber 
      :totalPages="totalPages" 
      :currentPage="currentPage" 
      @page-change="goToPage" 
    />
      </div>
    </div>
  </template>
  
  <script>

import GridProduct from "@/components/GridProduct.vue";
import ListProduct from "@/components/ListProduct.vue";
import PageNumber from "@/components/PageNumber.vue";
import { useProductStore } from "@/store/ProductStore";

  export default {
    components: {
      GridProduct,
      ListProduct,
      PageNumber
    },
    data() {
      return {
        viewMode: 'grid',
        query: "",
      //   gridproducts: [
      //   { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
      //   { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
      //   { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
      //   { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
      //   { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
      //   { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
      // ],
      products: [
      { id: 1, name: 'Product 1', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.5, reviews: 20, description: 'Description 1', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 2, name: 'Product 2', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 2', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 3, name: 'Product 3', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 3', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 4, name: 'Product 4', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 4', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 5, name: 'Product 5', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 5', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 6, name: 'Product 6', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 6', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 7, name: 'Product 7', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 7', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 8, name: 'Product 8', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 8', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 9, name: 'Product 9', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 9', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 10, name: 'Product 10', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 10', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 11, name: 'Product 11', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 11', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 12, name: 'Product 12', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 12', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 13, name: 'Product 13', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 13', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 14, name: 'Product 14', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 14', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 15, name: 'Product 15', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 15', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 16, name: 'Product 16', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 16', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 17, name: 'Product 17', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 17', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 18, name: 'Product 18', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 18', image: "images/Product1.png", color: "#FF4858", label: "HOT" },
        { id: 19, name: 'Product 19', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 19', image: "images/Product19.png", color: "#FF4858", label: "HOT" },
        { id: 20, name: 'Product 20', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 20', image: "images/Product20.png", color: "#FF4858", label: "HOT" },
        { id: 21, name: 'Product 21', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 21', image: "images/Product21.png", color: "#FF4858", label: "HOT" },
        { id: 22, name: 'Product 22', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 22', image: "images/Product22.png", color: "#FF4858", label: "HOT" },
        { id: 23, name: 'Product 23', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 23', image: "images/Product23.png", color: "#FF4858", label: "HOT" },
        { id: 24, name: 'Product 24', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 24', image: "images/Product24.png", color: "#FF4858", label: "HOT" },
        { id: 25, name: 'Product 25', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 25', image: "images/Product25.png", color: "#FF4858", label: "HOT" },
        { id: 26, name: 'Product 26', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 26', image: "images/Product26.png", color: "#FF4858", label: "HOT" },
        { id: 27, name: 'Product 27', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 27', image: "images/Product27.png", color: "#FF4858", label: "HOT" },
        { id: 28, name: 'Product 28', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 28', image: "images/Product28.png", color: "#FF4858", label: "HOT" },
        { id: 29, name: 'Product 29', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 29', image: "images/Product29.png", color: "#FF4858", label: "HOT" },
        { id: 30, name: 'Product 30', price: 18.9, originalPrice: 30.0, discount: 70, rating: 4.0, reviews: 15, description: 'Description 30', image: "images/Product30.png", color: "#FF4858", label: "HOT" },
      ],
        sortBy: 'name',
        itemsPerPage: 6,
        currentPage: 1,
        priceRange: [13.99, 25.99], // Initial price range values
      };
    },
    computed: {

      totalItems() {
        return this.products.length;
      },

      filteredProducts() {
      if (this.query) {
        return this.products.filter(product =>
          product.name.toLowerCase().includes(this.query.toLowerCase())
        );
      }
      return this.products;
    },
      totalPages() {
        return Math.ceil(this.products.length / this.itemsPerPage);
      },
      paginatedProducts() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.products.slice(startIndex, endIndex);
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
  </style>