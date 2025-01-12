<template>
  
  <div class="homeView">
    <AutoImageSlider />
    <div class="text">
      FEATURE PRODUCTS
      
    </div>
    <div class="content">
      <GridProduct v-for="gridPro in gridproducts" :image="gridPro.image" :color="gridPro.color" :label="gridPro.label"
        :proName="gridPro.proName" :price="gridPro.price" />
    </div>

    <button class="viewAll">View All</button>

    <div class="text">
      BEST SELLER
    </div>

    <div class="content">
      <GridProduct v-for="gridPro in gridproducts" :image="gridPro.image" :color="gridPro.color" :label="gridPro.label"
        :proName="gridPro.proName" :price="gridPro.price" />
    </div>

    <div class="text">
      PROMOTIONS
    </div>

    <div class="content">
      <GridProduct v-for="gridPro in gridproducts" :image="gridPro.image" :color="gridPro.color" :label="gridPro.label"
        :proName="gridPro.proName" :price="gridPro.price" />
    </div>

    <div class="text">
      NEW ARRIVALS
    </div>

    <div class="content">
      <GridProduct v-for="gridPro in gridproducts" :image="gridPro.image" :color="gridPro.color" :label="gridPro.label"
        :proName="gridPro.proName" :price="gridPro.price" />
    </div>
    <div class="search-container">
      <input type="text" placeholder="Search query..." class="search-input" />
      <button class="search-button">Search</button>
    </div>
  </div>
</template>
<script>
import Review from "@/components/Review.vue";
import PageNumber from "@/components/PageNumber.vue";
import SearchQ from "@/components/SearchQ.vue";
import GridProduct from "@/components/GridProduct.vue";
// import NewArrive from "@/components/NewArrive.vue";

import AutoImageSlider from "@/components/AutoImageSlider.vue";
import NewArrive from "@/components/NewArrive.vue";

export default {
  components: {
    Review,
    PageNumber,
    SearchQ,
    GridProduct,
    // NewArrive,
    AutoImageSlider,
    
  },
  data() {
    return {
      gridproducts: [
        { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
        { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
        { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
        { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
      ],
      currentPage: 1,
      query: "",
    };
  },
  // computed: {
  //   filteredReviews() {
  //     return this.reviews.filter((review) =>
  //       review.text.toLowerCase().includes(this.query.toLowerCase())
  //     );
  //   },
  //   paginatedReviews() {
  //     const reviewsPerPage = 5;
  //     const start = (this.currentPage - 1) * reviewsPerPage;
  //     return this.filteredReviews.slice(start, start + reviewsPerPage);
  //   },
  //   totalPages() {
  //     return Math.ceil(this.filteredReviews.length / 5);
  //   },
  // },
  // methods: {
  //   handleSearch(query) {
  //     this.query = query;
  //     this.currentPage = 1;
  //   },
  //   handlePageChange(page) {
  //     this.currentPage = page;
  //   },
  // },
};
</script>
<style>
.homeView {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}
.text {
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}
.viewAll {
  border: none;
  background-color: white;
  font-family: 'Poppins', sans-serif;
  font-size: large;
}
.viewAll:hover {
  color: #33A0FF;
}
.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #a3c1ff;
  /* Light blue border */
  border-radius: 5px;
  overflow: hidden;
  /* To keep the border radius */
  width: 30%;
  margin-left: 30%;
  margin-bottom: 20px;
}
.search-input {
  border: none;
  padding: 10px;
  outline: none;
  flex-grow: 1;
  /* Allow input to take available space */
  font-size: 16px;
  color: #999;
  /* Light gray text */
}
.search-button {
  background-color: #00aaff;
  /* Blue background */
  color: white;
  /* White text */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}
.search-button:hover {
  background-color: #0088cc;
  /* Darker blue on hover */
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.text {
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

.viewAll {
  border: none;
  background-color: white;
  font-family: 'Poppins', sans-serif;
  font-size: large;
}

.viewAll:hover {
  color: #33A0FF;
}


.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #a3c1ff;
  /* Light blue border */
  border-radius: 5px;
  overflow: hidden;
  /* To keep the border radius */
  width: 30%;
  margin-left: 30%;
  margin-bottom: 20px;
}

.search-input {
  border: none;
  padding: 10px;
  outline: none;
  flex-grow: 1;
  /* Allow input to take available space */
  font-size: 16px;
  color: #999;
  /* Light gray text */
}

.search-button {
  background-color: #00aaff;
  /* Blue background */
  color: white;
  /* White text */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background-color: #0088cc;
  /* Darker blue on hover */
}

   
      .boxx{
        display: flex;
        width: auto;
        justify-content: center;
      }
      #navbarNav{
        justify-content: space-between;
        display: flex;
      }
      .btn-user{
        border: none;
        background-color: aliceblue;
      }
      .btn-shop{
        border: none;
        background-color: aliceblue;
      }
      .narbar-li{
        display: flex;
        align-items: center;
        gap: 20px;
        list-style-type: none;
        justify-content: center;
        
      }
      .narbar-li a{
        color: black;
      }
      body {
        font-family: 'Cormorant Garamond', serif; /* Apply the font globally */
      }
      .navbar-brand span {
        font-family: 'Cormorant Garamond', serif; /* Apply to brand name */
        font-weight: 700; /* Bold weight */
      }
      .grid-containe{
        
        gap: 20px;
        margin-top: 40px;
        margin-bottom: 40px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        
      }
      .footer{
        background-color: brown;
        width: 100%;
        height: 300px;
        display: flex;
        
      }
    
</style>