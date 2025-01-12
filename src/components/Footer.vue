<template>
  <div class="footer">
    
      <div class="logo">
        <img src="@/assets/logo.png"  alt="Skin Glow" />
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

          <li><router-link to="/about-us">About Us</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>

          <li><router-link to="/terms">Terms & Conditions</router-link></li>
        
      </div>
      <div class="social">
        <h3>Follow us</h3>
       
          <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
          <li><a href="https://tiktok.com" target="_blank">TikTok</a></li>
        
      </div>
      <div class="contact">
        <h3>Contact us</h3>
        <p>Email: <a href="mailto:skinglow@gmail.com">skinglow@gmail.com</a></p>
        <p>Phone: <a href="tel:+855230002323">+855 23 000 2323</a></p>

      </div>
    </div>
    <p class="copyright">© 2018 Ecommerce theme by www.bisenbaev.com</p>
    <div class="pay">
      <div class="copy">
        <p >© 2018 Ecommerce theme by www.bisenbaev.com</p>

      </div>
      <div class="payment">
        <img src="@/assets/visa.png" alt="Visa" />
        <img src="@/assets/mastercard.png" alt="MasterCard" />
        <img src="@/assets/paypal.png" alt="PayPal" />
      </div>
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

  
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer{
  display: flex;
  width: 100%;
  
  height: 300px;
  background-color:  rgb(255, 203, 207);
  align-items: center;
  justify-content: space-between;
  font-family: 'Cormorant Garamond', serif;
}
.logo img {

  height: 100px;

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
.social ul ,

.info, .social, .contact {
  margin: 10px;
  flex: 1;
}
.info ul, .social ul {

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
  
  width: 100%;
  height: 50px;

}
.copy {
  width: 50%;
  height: 10px;
  
}

 </style>
