<template>
  
  <div class="content">
    <GridProduct
    v-for="gridPro in gridproducts"
    :image="gridPro.image"
    :color="gridPro.color"
    :label="gridPro.label"
    :proName="gridPro.proName"
    :price="gridPro.price"
  />
  </div>

  </template>
  
  <script>
  import Review from "@/components/Review.vue";
  import PageNumber from "@/components/PageNumber.vue";
  import SearchQ from "@/components/SearchQ.vue";
  import GridProduct from "@/components/GridProduct.vue";
  
  export default {
    components: {
      Review,
      PageNumber,
      SearchQ,
      GridProduct
    },
    data() {
      return {

        gridproducts: [
          { image:"images/Product1.png", proName:"Cleansing foam", color:"#FF4858", label:"HOT", price:19 },
          { image:"images/Product1.png", proName:"Cleansing foam", color:"#FF4858", label:"HOT", price:19 },
          { image:"images/Product1.png", proName:"Cleansing foam", color:"#FF4858", label:"HOT", price:19 },
          { image:"images/Product1.png", proName:"Cleansing foam", color:"#FF4858", label:"HOT", price:19 },
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

.home{
  width: 100%;
  height: 100vh;
}

.content{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

</style>