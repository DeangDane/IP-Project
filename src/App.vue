<template>

  <div class="header">
    <div class="upper">
      <div class="brand">
        <img width="156.25rem" height="161.25rem" src="../public/images/logo.png" alt="">
        <p style="font-size: 1.5rem;">SKIN GLOW</p>
      </div>

      <div class="options">
      
       <input type="Search" placeholder="Search" >
        <button @click="goToProItem()" class="cartButton" id="shop"><i class="fas fa-shopping-cart" ></i></button>
        <button  style="border: none; background-color: white" ><i class="fa fa-heart"></i></button>
        <button style="border: none; background-color: white" ><i class="fas fa-user"></i></button>
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
        
        <ul>
        <h3>Information</h3>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li>
            <router-link to="/privacy-policy">Privacy Policy</router-link>
          </li>
          <li><router-link to="/terms">Terms & Conditions</router-link></li>
        </ul>
      </div>
      <div class="social">
        
        <ul>
        <h3>Follow us</h3>
          <li><font-awesome-icon icon="facebook" />  <a href="https://facebook.com"target="_blank">Facebook</a></li>
          <li><font-awesome-icon icon="instagram" size="xs" />  <a href="https://instagram.com" target="_blank">Instagram</a></li>
          <li><font-awesome-icon icon="tiktok" />  <a href="https://tiktok.com" target="_blank">TikTok</a></li>
        </ul>
      </div>
      <div class="contact">
      <ul>
        <h3>Contact us</h3>
        <li><font-awesome-icon icon="envelope" />  <a href="mailto:skinglow@gmail.com">skinglow@gmail.com</a></li>
        <li><font-awesome-icon icon="phone" /> <a href="tel:+855230002323">+855 23 000 2323</a></li>
      </ul>
      </div>
    </div>
    <div class="line"></div>
    <div class="pay">
      <p class="copyright">© 2018 Ecommerce theme by www.bisenbaev.com</p>
      <div class="payments">
        <img src="@/assets/visa.png" alt="Visa" />
        <img src="@/assets/mastercard.png" alt="MasterCard" />
        <img src="@/assets/paypal.png" alt="PayPal" />
      </div>
    </div>
  </div>

  <!-- <ProductItem/> -->
</template>




<script>
// import ProductGrid from './views/ProductGridView.vue';
// import Productgrid from './views/ProductGridView.vue';
import NavButton from './components/NavButton.vue';
import Productcard from './views/CartView.vue';
import GridProduct from './components/GridProduct.vue';
import ProductItem from './components/ProductItem.vue';

export default {
  name: 'App',
  components: {
    // ProductGrid,
    // Productgrid,
    NavButton,
    Productcard,
    GridProduct,
    ProductItem,

  },

  methods: {
    goToProItem() {
      this.$router.push({ name: "Cart" });
    }
  },

  data() {
    return {
      buttons: [
        { name: "Home", route: "/" },
        // { name: "AllProduct", route: "/"},
        { name: "Best Seller", route: "/bestSeller" },
        { name: "Promotion", route: "/promotion" },
        { name: "New Arrival", route: "/newArrival" },
        { name: "About", route: "/about" },
        { name: "FAQ", route: "/faq" },
      ],
    };
  },
};


</script>

<style scoped>
#shop{
        border: none;
        background-color: white;
      }
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
  /* background-color: #FFCBCF; */
}

.lower{
  display: flex;
  justify-content: center;
  align-items: center;

}


.footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f9dada;
  text-align: center;
  font-family: Arial, sans-serif;
}
.container {
  display: flex;
  flex-direction:row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.logo {
  flex: 1;
  margin-right: 20px;
}
.logo img {
  height: 200px;
}
.logo h2 {
  font-size: 40px;
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
.social ul,
.contact ul {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

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
  margin: 0 10px;
  height: 20px;
}
.payments {
  margin-right:10px;
  display: flex;
  flex-direction: row;
}
.pay {
  background-color: #f9dada;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
}
.copyright {
  margin-top: 10px;
  margin-left: 20px;
  font-size: 14px;
  color: #555;
  left: 620px;
  bottom: 10px;
}
.body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: white;
      }

</style>