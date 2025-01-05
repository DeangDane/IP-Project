<template>
    <div class="write-reviews">
      <h2>Write Your Review</h2>
      <textarea v-model="reviewText" placeholder="Write your review..."></textarea>
      <div>
        <label>Upload Images:</label>
        <input type="file" @change="uploadImage" multiple />
      </div>
      <div class="uploaded-images">
        <img v-for="(image, index) in uploadedImages" :key="index" :src="image" alt="Uploaded Image" />
      </div>
      <button @click="submitReview">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reviewText: "",
        uploadedImages: [],
      };
    },
    methods: {
      uploadImage(event) {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
          this.uploadedImages.push(URL.createObjectURL(files[i]));
        }
      },
      submitReview() {
        alert("Review submitted!");
      },
    },
  };
  </script>
  
  <style scoped>
  .write-reviews {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
  textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
  }
  .uploaded-images img {
    width: 50px;
    margin: 5px;
  }
  </style>
  