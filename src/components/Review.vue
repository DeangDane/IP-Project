<template>
    <div class="review">
      <div class="review-header">
        <img :src="profileImage" alt="Profile Image" class="profile-image" />
        <div class="user-details">
          <h3>{{ userName }}</h3>
          <p class="review-date">{{ formatDate(reviewDate) }}</p>
          <div class="stars">
          <span v-for="star in stars" :key="star" class="star">⭐</span>
        </div>
        </div>
      </div>
      <div class="review-body">
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
    profileImage: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
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
    },
  };
  </script>
  
  <style scoped>
.review {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
}

.review-header {
  display: flex;
  align-items: flex-start; /* Align items at the top */
  margin-bottom: 16px;
  gap: 16px; /* Add space between image and details */
}

.profile-image {
  width: 60px; /* Slightly larger profile image */
  height: 60px;
  border-radius: 50%;
  margin-bottom: 0; /* Remove bottom margin to align properly */
  border: 2px solid #ddd; /* Add a border for better visibility */
}

.user-details {
  display: flex;
  flex-direction: column; /* Stack username and date vertically */
  justify-content: center;
}

.user-details h3 {
  margin: 0; /* Remove default margin */
  font-size: 18px; /* Slightly larger font */
  font-weight: bold; /* Emphasize username */
  color: #333; /* Darker text color for better readability */
}

.review-date {
  font-size: 14px; /* Slightly larger for better readability */
  color: #888;
  margin-top: 4px;
}

.review-content {
  margin-top: 8px;
  line-height: 1.6; /* Improve readability of text */
  color: #555;
}

.stars .star {
  color: gold;
  margin-right: 4px; /* Space between stars */
}

.review-images {
  margin-top: 12px;
  display: flex; /* Use flexbox for horizontal alignment */
  gap: 12px; /* Add space between images */
}

.review-images img {
  width: 60px; /* Increase size for better visibility */
  height: 60px;
  object-fit: cover; /* Ensure the image covers the area */
  border-radius: 8px; /* Rounded corners */
  border: 1px solid #ddd; /* Add border for better separation */
}

</style>

  