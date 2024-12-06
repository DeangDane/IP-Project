<template>
    <div class="home"

      <!-- Search Component -->
      <SearchQ @search="handleSearch" />
  
      <!-- Reviews -->
      <Review
        v-for="review in paginatedReviews"
        :key="review.id"
        :userAvatar="review.avatar"
        :userName="review.name"
        :reviewDate="review.date"
        :stars="review.stars"
        :reviewText="review.text"
        :reviewImages="review.images"
      />
  
      <!-- Pagination Component -->
      <PageNumber
        :totalPages="totalPages"
        :currentPage="currentPage"
        @page-change="handlePageChange"
      />
      <br/>
    <!-- Header (Optional) -->
    <!-- <header class="header">
      <h1>Welcome to Skin Glow</h1>
      <nav>
        <router-link to="/about">About Us</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/privacy-policy">Privacy Policy</router-link>
        <router-link to="/terms">Terms & Conditions</router-link>
      </nav>
    </header> -->
    <!-- Footer -->
    <Footer />
  </div>

  </template>
  
  <script>
  import Review from "@/components/Review.vue";
  import PageNumber from "@/components/PageNumber.vue";
  import SearchQ from "@/components/SearchQ.vue";
  import Footer from "../components/Footer.vue";
  
  export default {
    components: {
      Review,
      PageNumber,
      SearchQ,
      Footer,
    },
    data() {
      return {
        reviews: [
          {
            id: 1,
            avatar: "https://via.placeholder.com/50",
            name: "Vandy",
            date: "2024-11-28",
            stars: 5,
            text: "So I waited so long for the mask to be back in stock...",
            images: [
              "https://via.placeholder.com/60",
              "https://via.placeholder.com/60",
            ],
          },
          // Add more reviews here
        ],
        currentPage: 1,
        query: "",
      };
    },
    computed: {
      filteredReviews() {
        return this.reviews.filter((review) =>
          review.text.toLowerCase().includes(this.query.toLowerCase())
        );
      },
      paginatedReviews() {
        const reviewsPerPage = 5;
        const start = (this.currentPage - 1) * reviewsPerPage;
        return this.filteredReviews.slice(start, start + reviewsPerPage);
      },
      totalPages() {
        return Math.ceil(this.filteredReviews.length / 5);
      },
    },
    methods: {
      handleSearch(query) {
        this.query = query;
        this.currentPage = 1; // Reset to page 1 after a search
      },
      handlePageChange(page) {
        this.currentPage = page;
      },
    },
  };
  </script>
  <style>
.home{
  width: 100%;
  height: 100vh;
}
</style>