<<<<<<< HEAD
<!-- <template>
  <RouterView />
</template> -->
<template>
  <!-- <RouterView /> -->

  <div id="app">
    <ProductGrid />
  </div>
=======
<template>

  <div class="header">
    <div class="upper">
      <div class="brand">
        <img width="156.25rem" height="161.25rem" src="../public/images/logo.png" alt="">
        <p>SKIN GLOW</p>
      </div>

      <div class="options">
        <input type="Search" placeholder="Search">
        <button>cart</button>
        <button>favorite</button>
        <button>Information</button>
      </div>

    </div>

    <div class="lower">
      <NavButton
        v-for="button in buttons" 
          :key="button.name" 
          :name="button.name" 
          :route="button.route" 
      />
    </div>
  </div>

  <RouterView />

  <div class="footer">
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Skin Glow" />
        <h2>SKIN GLOW</h2>
      </div>
      <div class="info">
        <h3>Information</h3>
        <ul>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li>
            <router-link to="/privacy-policy">Privacy Policy</router-link>
          </li>
          <li><router-link to="/terms">Terms & Conditions</router-link></li>
        </ul>
      </div>
      <div class="social">
        <h3>Follow us</h3>
        <ul>
          <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
          <li><a href="https://tiktok.com" target="_blank">TikTok</a></li>
        </ul>
      </div>
      <div class="contact">
        <h3>Contact us</h3>
        <p>Email: <a href="mailto:skinglow@gmail.com">skinglow@gmail.com</a></p>
        <p>Phone: <a href="tel:+855230002323">+855 23 000 2323</a></p>
      </div>
    </div>
    <p class="copyright">© 2018 Ecommerce theme by www.bisenbaev.com</p>
    <div class="pay">
      <div class="payments">
        <img src="@/assets/visa.png" alt="Visa" />
        <img src="@/assets/mastercard.png" alt="MasterCard" />
        <img src="@/assets/paypal.png" alt="PayPal" />
      </div>
    </div>
  </div>


>>>>>>> 3b9d08cf93e81f40a5aac3ff04b72fdc77fcacae
</template>


<style>
/* Add any global styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: white;
}
</style>

<script>
<<<<<<< HEAD
import ProductGrid from './views/ProductGrid.vue';
=======
import NavButton from './components/NavButton.vue';
>>>>>>> 3b9d08cf93e81f40a5aac3ff04b72fdc77fcacae

export default {
  name: 'App',
  components: {
<<<<<<< HEAD
    ProductGrid,
  },
=======
    NavButton,
  },

  data() {
    return {
      buttons: [
        { name: "Home", route: "/" },
        { name: "Best Seller", route: "/bestSeller" },
        { name: "Promotion", route: "/promotion" },
        { name: "New Arrival", route: "/newArrival" },
        { name: "About", route: "/about" },
        { name: "FAQ", route: "/faq" },
      ],
    }
  }
>>>>>>> 3b9d08cf93e81f40a5aac3ff04b72fdc77fcacae
};
</script>

<style scoped>

.brand{
  display: flex;
  align-items: center;
}

.upper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header{
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #FFCBCF;
}

.lower{
  display: flex;
  justify-content: center;
  align-items: center;
}


.footer {
  position: relative;
  background-color: #f9dada;
  text-align: center;
  font-family: Arial, sans-serif;
  width: 1440px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.logo img {
  height: 100px;
}
.logo h2 {
  font-size: 24px;
  font-family: Cormorant Garamond;
  margin: 10px 10px;
}
.info,
.social,
.contact {
  margin: 10px;
  flex: 1;
}
.info ul,
.social ul {
  list-style: none;
  padding: 0;
}
ul li {
  margin: 5px 0;
}
ul li a {
  color: black;
  text-decoration: none;
}
.payments img {
  margin: 0 5px;
  height: 20px;
}
.pay {
  /* margin-left: 1400px; */
  justify-content: end;
  display: flex;
}
.copyright {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
  position: absolute;
  left: 620px;
  bottom: 10px;
}


</style>