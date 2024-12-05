<template>
  <div class="slider-container">
    <div class="slider" ref="slider">
      <div class="image-wrapper" v-for="(image, index) in displayedImages" :key="index">
        <img :src="image" alt="Product Image" class="slide-image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        'https://i.pinimg.com/736x/9b/43/a4/9b43a4fa74787d622b9a932429eb0fed.jpg',
        'https://i.pinimg.com/736x/9d/51/09/9d51097a5adf001f2380217fef44b68f.jpg',
        'https://i.pinimg.com/736x/42/bb/6f/42bb6fbbedfeb20efa4eac851f511725.jpg',
        // Add more images if needed
      ],
      displayedImages: [],
      scrollAmount: 0,
      scrollSpeed: 2, // Speed of scrolling
    };
  },
  mounted() {
    this.loadImages();
    this.startAutoScroll();
  },
  methods: {
    loadImages() {
      // Duplicate the images to enable seamless looping
      this.displayedImages = [...this.images, ...this.images];
    },
    startAutoScroll() {
      const slider = this.$refs.slider;

      const scrollStep = () => {
        this.scrollAmount += this.scrollSpeed;

        // Reset scroll when it reaches the width of the original images
        if (this.scrollAmount >= slider.scrollWidth / 2) {
          this.scrollAmount = 0; // Reset scroll position
        }

        slider.style.transform = `translateX(-${this.scrollAmount}px)`;

        requestAnimationFrame(scrollStep);
      };

      requestAnimationFrame(scrollStep);
    },
  },
};
</script>
<style scoped>
.slider-container {
  overflow: hidden; /* Hide overflow */
  width: 100%; /* Full width */
  position: relative; /* Position relative for absolute child elements */
}

.slider {
  display: flex; /* Use flexbox for horizontal layout */
  transition: transform 0.1s linear; /* Smooth transition */
  width: max-content; /* Ensure it can expand */
}

.image-wrapper {
  flex: 0 0 auto; /* Prevent images from shrinking */
}

.slide-image {
  width: 100%; /* Set width to fill the container */
  height: 250px; /* Fixed height for images */
  margin-bottom: 40px; /* Margin between images */
}
</style>