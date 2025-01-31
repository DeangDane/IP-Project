import { defineStore } from "pinia";

export const useReviewsStore = defineStore("Review", {
  state: () => ({
    reviews: [],
  }),
  getters: {
    recentReviews(state) {
      return state.reviews.filter((review) => {
        const reviewDate = new Date(review.date);
        const diffInDays = (new Date() - reviewDate) / (1000 * 60 * 60 * 24);
        return diffInDays <= 2;
      });
    },
  },
  actions: {
    loadReviews() {
      const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
      this.reviews = savedReviews.map((review) => ({
        ...review,
        date: new Date(review.date), 
      }));
    },
    saveReviews() {
      localStorage.setItem("reviews", JSON.stringify(this.reviews));
    },
    addReview(productId, comment, rating, photos = []) {
      if (!comment || rating < 1 || rating > 5) {
        throw new Error("Invalid comment or rating.");
      }
      const newReview = {
        id: Date.now(), 
        productId,
        comment,
        rating,
        photos,
        date: new Date().toISOString(),
      };
      this.reviews.push(newReview);
      this.saveReviews();
    },
    updateReview(reviewId, updatedReview) {
      const index = this.reviews.findIndex((review) => review.id === reviewId);
      if (index !== -1) {
        this.reviews[index] = { ...this.reviews[index], ...updatedReview };
        this.saveReviews();
      } else {
        throw new Error("Review not found.");
      }
    },
    deleteReview(reviewId) {
      this.reviews = this.reviews.filter((review) => review.id !== reviewId);
      this.saveReviews();
    },
  },
});