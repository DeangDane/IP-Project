<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="../public/images/logo.png" alt="SKIN GLOW Logo" width="100" height="100" class="mr-2">
          <span>SKIN GLOW</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
          <div class="d-flex align-items-center">
            <input type="search" class="form-control" placeholder="Search" aria-label="Search">
            <button class="btn-shop" aria-label="Shopping Cart">
              <i class="fas fa-shopping-cart"></i>
            </button>
            <button class="btn-user" aria-label="User Profile">
              <i class="fas fa-user"></i>
            </button>
          </div>
        </div>
      <!-- </div> -->
    </nav>
    <div class="narbar-li" >
      
      <li class=""><a class="nav-link" href="#">Home</a></li>
      <li class=""><a class="nav-link" href="#">All Products</a></li>
      <li class=""><a class="nav-link" href="#">Best Seller</a></li>
      <li class=""><a class="nav-link" href="#">Promotion</a></li>
      <li class=""><a class="nav-link" href="#">New Arrival</a></li>
      <li class=""><a class="nav-link" href="#">About Us</a></li>
      <li class=""><a class="nav-link" href="#">FAQ</a></li>
    
</div>
    <!-- Main Content -->
    <div class="container">
      <h1 class="my-4">Product List</h1>
      <div class="row">
        <div class="col" v-for="(product, index) in products" :key="index">
          <ProductItem
            :title="product.title"
            :price="product.price"
            :image="product.image"
            @remove="handleRemove"
          />
        </div>
      </div>

      <!-- Add the PromoProduct component -->
      <div class="boxx">
        <PromoProduct
          image="https://i.pinimg.com/736x/0e/04/de/0e04ded9d236f115de4f52a9348fe28d.jpg"
          :originalPrice="40"
          :discount="80"
          :currentPrice="8"
        />
        <PromotProduct
          title="Clo de Peau Beauté"
          subtitle="La Crème"
          image="https://i.pinimg.com/736x/9a/8f/df/9a8fdfa0435aa3d76c9b04eb680fa540.jpg"
          :originalPrice="30"
          :discount="70"
          :currentPrice="18.9"
          :rating="4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from './components/NavButton.vue';
import ProductItem from './components/ProductItem.vue';
import PromoProduct from './components/PromoProduct.vue';
import PromotProduct from './components/PromotProduct.vue';

export default {
  name: 'App',
  components: {
    NavButton,
    ProductItem,
    PromoProduct,
    PromotProduct,
  },
  data() {
    return {
      products: [
        {
          title: "Sunscreen Cream SPF 50 (200 ml)",
          price: 18.8,
          image: "https://i.pinimg.com/736x/9a/8f/df/9a8fdfa0435aa3d76c9b04eb680fa540.jpg",
        },
      ],
    };
  },
  methods: {
    handleRemove() {
      console.log("Item removed");
    },
  },
};
</script>

<style scoped>
.navbar-brand img {
  max-height: 300px; /* Adjust logo size */
}
#navbarNav{
  justify-content: space-between;
  display: flex;
}
.btn-user{
  border: none;
  background-color: aliceblue;
}
.btn-shop{
  border: none;
  background-color: aliceblue;
}
.narbar-li{
  display: flex;
  align-items: center;
  gap: 50px;
  list-style-type: none;
  justify-content: center;
}
body {
  font-family: 'Cormorant Garamond', serif; /* Apply the font globally */
}
.navbar-brand span {
  font-family: 'Cormorant Garamond', serif; /* Apply to brand name */
  font-weight: 700; /* Bold weight */
}
</style>