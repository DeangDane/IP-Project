<template>
  <div class="home">
    <!-- Profile Button -->
    <button class="profile-button" @click="toggleModal">
      <font-awesome-icon :icon="['fas', 'user-circle']" size="2x" />
      Profile
    </button>

    <!-- Modal -->
    <ProfileModal :show="isModalVisible" @close="toggleModal" />

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
    <br />
    <Footer />
  </div>
</template>

  
  <script>
  import Review from "@/components/Review.vue";
  import PageNumber from "@/components/PageNumber.vue";
  import SearchQ from "@/components/SearchQ.vue";
  import Footer from "../components/Footer.vue";
  import Login from "@/components/Login.vue";
  import Signup from "@/components/Signup.vue";
  import ProfileModal from "@/components/ProfileModal.vue";
  
  export default {
    components: {
      Review,
      PageNumber,
      SearchQ,
      Footer,
      Login,
      Signup,
      ProfileModal,
    },
    data() {
      return {
        currentComponent: "Login",
        isModalVisible: false,

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

      toggleModal() {
      this.isModalVisible = !this.isModalVisible;
      },

      handleSearch(query) {
        this.query = query;
        this.currentPage = 1; // Reset to page 1 after a search
      },
      handlePageChange(page) {
        this.currentPage = page;
      },

      switchToLogin() {
      this.currentComponent = "Login";
      },
      switchToSignUp() {
      this.currentComponent = "Signup";
      },
    },
  };
  </script>
  <style>
.home{
  width: 100%;
  height: 100vh;
  text-align: center;
  margin-top: 50px;
}
.profile-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.profile-button:hover {
  background-color: #357ae8;
}
</style>