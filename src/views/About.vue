<template>
  <div class="about">
    <!-- Hero Section -->
    <div class="about-header">
        <img src="../assets/aboutus.png" alt="About Us Image" class="aboutus-image" />
        <h1>BRING YOUR BEAUTY TO ANOTHER LEVEL
          <br>
            SKIN GLOW, BEAUTY GLOW
        </h1>
    </div>

    <!-- About Section -->
    <div class="about-content">
      <div class="about-text">
        <h2>ABOUT SKIN GLOW</h2>
        <p>
          Skin Glow has been in the E-commerce game for over 20 years. We
          started in a San Francisco basement in 1998. Building upon the initial
          goal of making Asian entertainment products accessible to customers in
          the United States, they developed Skin Glow in 2006 and expanded to
          selling Asian fashion and beauty products worldwide in 2021.
        </p>
      </div>
      <div class="about-image">
        <img
          src="../assets/logo.png"
          alt="Skin Glow Logo"
        />
      </div>
    </div>

    <div class="content-wrapper">
      <div class="image-section">
        <img src="../assets/aboutus1-ourmission.png" alt="Our Mission" />
      </div>
      <div class="text-section">
        <h1>Our Mission</h1>
        <p>
          We bring you the highest quality Korean products and the latest K-beauty trends
          and innovations. Our ultimate mission is to bring out your inner beauty so that
          you could share your beauty with the rest of the world.
        </p>
      </div>
    </div>

    <div class="why-us-section">
      <h2>Why Us</h2>
      <div class="features">
        <div class="feature">
          <font-awesome-icon :icon="['fas', 'truck']" size="3x" :style="{ color: '#c14463', padding: '10px' }" />       
             <h3>FREE SHIPPING</h3>
          <p>Free shipping to all countries around the world</p>
        </div>
        <div class="feature">
          <font-awesome-icon :icon="['fas', 'check-double']" size="3x" :style="{ color: '#c14463', padding: '10px' }" />   
                 <h3>100% Authentic</h3>
          <p>We guarantee authenticity of our products</p>
        </div>
        <div class="feature">
          <font-awesome-icon :icon="['fas', 'comment-dollar']" size="3x" :style="{ color: '#c14463', padding: '10px' }" />      
              <h3>100% REFUND</h3>
          <p>Get full refund back in case of fake or expired products</p>
        </div>
        <div class="feature">
          <font-awesome-icon :icon="['fas', 'circle-info']" size="3x" :style="{ color: '#c14463', padding: '10px' }" />      
          <h3>SUPPORT 24/7</h3>
          <p>Our store is available 24/7</p>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "About",
};
</script>

<style scoped>
/* General Styling */
.about {
  font-family: "Arial", sans-serif;
  color: #333;
  width: 1440px;
  margin: 0 auto;
}

/* FAQ Header Styling */
.about-header {
  position: relative;
  /* text-align: center; */
  background-color: #BCE4FD;
  display: flex;
  width: 100%;
}

.about-header h1 {
  position: absolute;
  bottom: 200px;
  left: 32%;
  padding: 10px 20px;
  font-size: 2.5rem;
  font-weight: bold;
}

/* About Section */
.about-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #fff;
  text-align: left;
}

.about-text {
  flex: 1;
  padding: 50px;
  max-width: 920px;
}

.about-text h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.about-text p {
  font-size: 1.5rem;
  color: #666;
  line-height: 1.6;
}

.about-image {
  /* flex: 1; */
  padding: 20px;
  text-align: center;
}

.about-image img {
  max-width: 68%;
  height: auto;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  gap: 50px;
  width: 1440px;
  align-items: center;
}

.image-section img{
  width: 100%;
  border-radius: 8px;
}

.text-section {
  max-width: 800px;
}

.text-section h1 {
  font-size: 2rem;
  color: #000;
  margin-bottom: 20px;
  font-weight: bold;
}

.text-section p {
  font-size: 1.5rem;
  color: #333;
  line-height: 1.6;
}

.why-us-section {
  text-align: center;
}

.why-us-section h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
}

.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.feature {
  text-align: center;
  max-width: 200px;
  margin: 20px;
}

.feature img {
  width: 50px;
  margin-bottom: 15px;
}

.feature h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.feature p {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
}
</style>






<!-- <template>
  <div class="about-us">

    <div class="container">
      <div class="logo">
        <img src="../assets/aboutus.png" alt="Skin Glow About" />
        <div class="banner">
      <h2>BRING YOUR BEAUTY TO ANOTHER LEVEL</h2>
      <p>SKIN GLOW, BEAUTY GLOW</p>
    </div>
      </div>
      <p>Skin Glow has been in the E-commerce game for over 20 years. We started in a San Francisco basement in 1998. Building upon the initial goal of making Asian entertainment products accessible to customers in the United States, they developed Skin Glow in 2006 and expanded to selling Asian fashion and beauty products worldwide in 2021.</p>

      <h2>Our Mission</h2>
      <p>We bring you the highest quality Korean products and the latest K-beauty trends and innovations. Our ultimate mission is to bring out your inner beauty. So that you could share your beauty with the rest of the world.</p>

      <h2>Why Us</h2>
      <div class="features">
        <div class="feature">
          <i class="fas fa-truck"></i>
          <h3>FREE SHIPPING</h3>
          <p>Free shipping to all countries around the world</p>
        </div>
        <div class="feature">
          <i class="fas fa-check-circle"></i>
          <h3>100% Authentic</h3>
          <p>We guarantee authenticity of our products</p>
        </div>
        <div class="feature">
          <i class="fas fa-undo"></i>
          <h3>100% REFUND</h3>
          <p>Get a full refund in case of fake or expired products</p>
        </div>
        <div class="feature">
          <i class="fas fa-headset"></i>
          <h3>SUPPORT 24/7</h3>
          <p>Our customer support is available 24/7</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-us {
  padding: 50px 0;
  background-color: #f8f8f8;
  width: 1440px;
}

.banner {
  text-align: center;
  background-color: #fff;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style> -->