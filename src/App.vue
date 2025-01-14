<template>
  <div class="wrapper">
    <div class="header">
      <div class="upper">
        <div class="brand">
          <img width="107px" height="110px" src="../public/images/logo.png" alt="">
          <p class="brandName">SKIN GLOW</p>
        </div>
        <ProfileModal v-if="!isLoggedIn" :show="true" @close="handleModalClose" />
        <div v-else>
          <div class="options">
            <input class="search" type="search" placeholder="Search" v-model="searchQuery" @input="filterItems">
            <ul v-if="filteredItems.length" class="dropdown">
              <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
            </ul>
            <button @click="goToProItem()" class="cartButton">
              <!-- <i class="fas fa-shopping-cart"></i> -->
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>
              <div class="cartCount">{{ cartCount }}</div>
            </button>
            <button class="favoriteButton">
              <!-- <i class="fa fa-heart"></i> -->
              <svg width="40px" height="40px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                    fill="#000000"></path>
                </g>
              </svg>
              <div class="heartCount">0</div>
            </button>
            <div class="userButton" @click="toggleUserOptions()">
              <!-- <i class="fas fa-user"></i> -->
              <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>

            </div>

            <!-- <ProfileModal :show="isModalVisible" @close="toggleModal" /> -->
            <!-- <UserOptions v-if="showUserOptions && isLoggedIn" /> -->
            <UserOptions v-if="showUserOptions" />
          </div>
        </div>
      </div>
      <!-- <router-link to="/order-history">Order History</router-link> -->

      <div class="lower">
        <NavButton v-for="button in buttons" :key="button.name" :name="button.name" :route="button.route" />
      </div>
    </div>

    <div class="content">
      <RouterView />
    </div>

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
            <li>Services</li>
            <li>Privacy Policy </li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div class="social">
          <ul>
            <h3>Follow us</h3>
            <li> <a href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://instagram.com"
                target="_blank">Instagram</a></li>
            <li> <a href="https://tiktok.com" target="_blank">TikTok</a></li>
          </ul>
        </div>
        <div class="contact">
          <ul>
            <h3>Contact us</h3>
            <li><font-awesome-icon icon="envelope" /> <a href="mailto:skinglow@gmail.com">skinglow@gmail.com</a></li>
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
  </div>

</template>


<script>
import NavButton from './components/NavButton.vue';
import Productcard from './views/CartView.vue';
import GridProduct from './components/GridProduct.vue';
import ProductItem from './components/ProductItem.vue';
import Login from "@/components/Login.vue";
import ProfileModal from "@/components/ProfileModal.vue";
import SignUp from "@/components/SigningUp.vue";
import MakePaymentView from './views/MakePaymentView.vue';
import OrderView from './views/OrderView.vue';
import { useUserProfileStore } from "@/store/UserStore";
import UserOptions from "@/components/UserOptions.vue";
import { ref, computed } from 'vue';
import { useCartStore } from "@/store/CartStore";
// import ProfileModal from "@/components/ProfileModal.vue";

export default {
  name: 'App',
  components: {
    NavButton,
    Productcard,
    GridProduct,
    ProductItem,
    ProfileModal,
    Login,
    SignUp,
    // ProfileModal,
    MakePaymentView,
    OrderView,
    UserOptions,
  },

  props: {
    cartCount: Number,
  },

  setup() {

    const cartStore = useCartStore();

    const searchQuery = ref('');
    const items = ref([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      // Add more items as needed
    ]);

    const filteredItems = computed(() => {
      if (!searchQuery.value) {
        return [];
      }
      return items.value.filter(item =>
        item.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
      );
    });

    return {
      searchQuery,
      filteredItems,
      cartCount: computed(() => cartStore.countItemsInCart()),
    };
  },

  computed: {
    isLoggedIn() {
      const userProfileStore = useUserProfileStore();
      return userProfileStore.isLoggedIn;
    },

  },
  watch: {
    isLoggedIn(newValue) {
      this.showUserOptions = newValue;
    },
  },
  methods:
  {
    toggleUserOptions() {
      if (this.isLoggedIn) {
        this.showUserOptions = !this.showUserOptions;
      } else {
        this.toggleModal();
      }
    },
    goToProItem() {
      this.$router.push({ name: "Cart" });
    },
    handleModalClose() {
      // Handle modal close event if needed
    },

    logout() {
      const userProfileStore = useUserProfileStore();
      userProfileStore.logout();
      this.$router.push("/");
    },
  },
  mounted() {
    const userProfileStore = useUserProfileStore();
    userProfileStore.loadUsersFromLocalStorage();
  },

  data() {
    return {
      isModalVisible: false,
      showUserOptions: false,

      buttons: [
        { id: 1, name: "HOME", route: "/" },
        { id: 2, name: "ALL PRODUCTS", route: "/allProduct" },
        { id: 3, name: "BEST SELLER", route: "/bestSeller" },
        { id: 4, name: "PROMOTION", route: "/promotion" },
        { id: 5, name: "NEW ARRIVAL", route: "/newArrival" },
        { id: 6, name: "ABOUT", route: "/about" },
        { id: 7, name: "FAQ", route: "/faq" },
      ],
    };
  },
};


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap');


.brand {
  display: flex;
  align-items: center;
}

.brandName {
  font-family: 'Cormorant Garamond', serif;
  font-size: 40px;
}

/* .content {
  padding: 0 1rem;
} */

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.upper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.lower {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}


.footer {
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
.social ul {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
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

.search {
  width: 250px;
  padding: 0 10px;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  height: 40px;
}

.options {
  display: flex;
  gap: 10px;
  align-items: center;
  padding-right: 10px;
}

.cartButton,
.favoriteButton,
.userButton {
  position: relative;
  border: none;
  height: 50px;
  width: 50px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
}

.userButton {
  background-color: white;
  border: solid 2px black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heartCount,
.cartCount {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  font-family: 'Poppins', sans-serif;
  position: absolute;
  width: 25px;
  height: 25px;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  border-radius: 50%;
  text-align: center;
  font-size: 16px;
}

.user-options {
  position: absolute;
  top: 72px;
  right: 2px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.content{
  padding-bottom: 32px;
}
</style>
