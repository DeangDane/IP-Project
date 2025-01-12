<template>
  <div class="review">
    <div class="review-header">
      <img :src="userAvatar" alt="User Avatar" class="avatar" />
      <div class="user-details">
        <h3>{{ userName }}</h3>
        <p class="review-date">{{ formatDate(reviewDate) }}</p>
      </div>
    </div>
    <div class="review-body">
      <div class="stars">
        <span v-for="star in stars" :key="star" class="star">⭐</span>
      </div>
      <p class="review-text">{{ reviewText }}</p>
      <div class="review-images">
        <img v-for="image in reviewImages" :src="image" :key="image" alt="Review Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
  props: {
    userAvatar: String,
    userName: String,
    reviewDate: String,
    stars: Number,
    reviewText: String,
    reviewImages: Array,
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  }
};
</script>

<style scoped>
.review {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #fff;
}

.review-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
}

.user-details h3 {
  margin: 0;
  font-size: 16px;
}

.review-date {
  font-size: 12px;
  color: #888;
}

.stars .star {
  color: gold;
}

.review-images img {
  width: 50px;
  /* Set a fixed width */
  height: 50px;
  /* Set a fixed height */
  object-fit: cover;
  /* Ensure the image covers the area */
  margin-right: 8px;
  border-radius: 4px;
}
</style>
