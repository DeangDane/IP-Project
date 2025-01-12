import { defineStore } from "pinia";

export const useReviewStore = defineStore("review", {
    state: () => ({
        reviews: []
    }),
    actions: {
        addReview(review) {
            this.reviews.push(review);
        },
        updateReview(id, updatedReview) {
            const index = this.reviews.findIndex(review => review.id === id);
            if (index !== -1) {
                this.reviews[index] = { ...this.reviews[index], ...updatedReview };
            }
        },
        removeReview(id) {
            this.reviews = this.reviews.filter(review => review.id !== id);
        }
    }
});

// this store is to store reviews array each element has id, user id, comment, rating, images