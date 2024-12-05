
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
         

      <!-- slide -->
      <div id="app">
          
          <AutoImageSlider />
        </div>

            <!-- Add the PromoProduct component -->
            <h4 align="center">FEATURED PRODUCT</h4>
            <div class="boxx">
              
              <!-- <PromoProduct
                image="https://i.pinimg.com/736x/0e/04/de/0e04ded9d236f115de4f52a9348fe28d.jpg"
                :originalPrice="40"
                :discount="80"
                :currentPrice="8"
              /> -->
              <PromotProduct
                title="Clo de Peau Beauté"
                subtitle="La Crème"
                image="https://i.pinimg.com/736x/9a/8f/df/9a8fdfa0435aa3d76c9b04eb680fa540.jpg"
                :originalPrice="30"
                :discount="70"
                :currentPrice="18.9"
                :rating="4"
              />
              <PromotProduct
                title="Anua Heartleaf 77 Soothing"
                subtitle="Toner Anua"
                image="https://i.pinimg.com/736x/ab/64/a8/ab64a8ee0cfd36b27d808027014533d6.jpg"
                :originalPrice="30"
                :discount="70"
                :currentPrice="18.9"
                :rating="4"
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
            <h3 align="center" style="margin-top: 30px;">BEST SELLER</h3>
            <div class="grid-containe" >
            <ProductCard
              v-for="(product, index) in products"
              :key="index"
              :product="product"
            />
          </div>
          </div>
       

        <!-- <RouterView /> -->

        <!-- <Footer></Footer> -->


      </template>


      <style>
      
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: white;
      }
      </style>

      <script>

      import NavButton from './components/NavButton.vue';
      import PromoProduct from './components/PromoProduct.vue';
      import AutoImageSlider from './components/AutoImageSlider.vue';
      import PromotProduct from './components/PromotProduct.vue';
      import ProductCard from './components/ProductCard.vue';

      export default {
        name: 'App',
        components: {


          NavButton,
          // PromoProduct,
          AutoImageSlider,
          PromotProduct,
          ProductCard,
        
        },
        data() {
            return {
              products: [
                {
                  title: 'Square One',
                  image: 'https://i.pinimg.com/736x/49/9a/3e/499a3eaf66e7915c0907c9ae6403a1a8.jpg',
                  price: '$18.9',
                  rating: 4,
                  isHot: true,
                },
                // Add more products
                {
                  title: 'Square One',
                  image: 'https://i.pinimg.com/736x/f2/06/1b/f2061bd1e9a7c88c19804edc6dbe0868.jpg',
                  price: '$18.9',
                  rating: 4,
                  isHot: true,
                },
                // Add more products
                {
                  title: 'Square One',
                  image: 'https://i.pinimg.com/736x/54/73/fd/5473fd9e3d2d567af59998fb6ff76bd8.jpg',
                  price: '$18.9',
                  rating: 4,
                  isHot: true,
                },
                // Add more products
                {
                  title: 'Square One',
                  image: 'https://i.pinimg.com/736x/4b/f7/18/4bf718ef4218f11b7264e2be908ce6e6.jpg',
                  price: '$18.9',
                  rating: 4,
                  isHot: true,
                },
                // Add more products
              ],
            };
          },

      };
      </script>

      <style scoped>
      .navbar-brand img {
        max-height: 300px; /* Adjust logo size */
      }
      .boxx{
        display: flex;
        width: auto;
        justify-content: center;
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
        gap: 20px;
        list-style-type: none;
        justify-content: center;
        
      }
      .narbar-li a{
        color: black;
      }
      body {
        font-family: 'Cormorant Garamond', serif; /* Apply the font globally */
      }
      .navbar-brand span {
        font-family: 'Cormorant Garamond', serif; /* Apply to brand name */
        font-weight: 700; /* Bold weight */
      }
      .grid-containe{
        
        gap: 30px;
        margin-top: 40px;
        margin-bottom: 40px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        
      }
      </style>