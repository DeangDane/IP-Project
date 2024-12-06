<!-- <template>
    <div class="grid-product">
      <div v-if="product.isHot" class="product-badge">HOT</div>
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="product-details">
        <h3 class="product-title">{{ product.title }}</h3>
        <div class="product-rating">
          <i
            v-for="n in 5"
            :key="n"
            :class="n <= product.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'"
          ></i>
        </div>
        <div class="product-price">{{ product.price }}</div>
        <div class="icon">
          <i class="fa-solid fa-basket-shopping"></i>
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Reuse styles from your existing CSS for the product cards */
  .grid-product {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    background-color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .product-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: red;
    color: white;
    padding: 2px 8px;
    font-size: 10px;
    border-radius: 4px;
  }
  .product-image {
    width: 60%;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .product-title {
    font-size: 14px;
    color: #333;
  }
  .product-rating {
    color: #f7b64d;
    font-size: 14px;
  }
  .product-price {
    font-size: 16px;
    color: #007bff;
    font-weight: bold;
  }
  .icon {
    display: flex;
    justify-content: center;
    gap: 10px;
    color: #33a0ff;
  }
  .icon i {
    font-size: 15px;
    padding: 8px;
    border-radius: 50%;
  }
  </style> -->

  <template>
    <div class="container">
      <div class=" title">
        <div class="line"></div>
        <h1>Your Basket</h1>
        <div class="line"></div>
      </div>
      <div class="row">
        <div class="checkout" v-for="(product, index) in products" :key="index">
          <ProductItem
            :title="product.title"
            :price="product.price"
            :image="product.image"
            @remove="handleRemove"
          />
        </div>
      </div>

      <div class="payment">
        <div class="coupon">
          <input class="couponCode" type="string" placeholder="Coupon or Voucher Code">
          <button class="subBtn">Submit</button>
        </div>

        <div class="total">
          <div class="info">
            <div>Subtotal</div>
            <div>35$</div>
          </div>
          <div class="info">
            <div>Shiping Fee</div>
            <div>3$</div>
          </div>
          <div class="info">
            <div>Coudivon or Voucher</div>
            <div>None</div>
          </div>
          <hr>
          <div id="inf" class="info">
            <div>Total</div>
            <div>38$</div>
          </div>
          <button class="checkoutTotal">Checkout</button>
        </div>
      </div>
  
      <!-- Add the PromoProduct component -->
      <!-- <div class="boxx">
      <PromoProduct
        image="https://i.pinimg.com/736x/0e/04/de/0e04ded9d236f115de4f52a9348fe28d.jpg"
        :originalPrice="40"
        :discount="80"
        :currentPrice="8"
      /> -->
  
      <!-- <PromotProduct
        title="Clo de Peau Beauté"
        subtitle="La Crème"
        image="https://i.pinimg.com/736x/9a/8f/df/9a8fdfa0435aa3d76c9b04eb680fa540.jpg"
        :originalPrice="30"
        :discount="70"
        :currentPrice="18.9"
        :rating="4" 
      /> -->
    </div>
    <!-- </div> -->
  </template>
  
<script>
import ProductItem from '@/components/ProductItem.vue';
  // import PromoProduct from './components/PromoProduct.vue';
  // import PromotProduct from './components/PromotProduct.vue';
  
export default {
    components: {
      ProductItem,
      // PromoProduct,
      // PromotProduct,
    },
    data() {
      return {
        products: [
          {
            title: "Sunscreen Cream SPF 50 (200 ml)",
            price: 18.8,
            image: "https://i.pinimg.com/736x/9a/8f/df/9a8fdfa0435aa3d76c9b04eb680fa540.jpg",
          },
          {
            title: "Sunscreen Cream SPF 50 (200 ml)",
            price: 18.8,
            image: "https://i.pinimg.com/736x/9a/8f/df/9a8fdfa0435aa3d76c9b04eb680fa540.jpg",
          },
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
        // Handle item removal here
        console.log("Item removed");
      },
    },
  };
  </script>
  
  <style scoped>
  .container{
    width: 100%;
    /* height: 50rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 5% 5% 5%;
    gap: calc(3vw);
  }
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 2%; */
    gap: 20px;
  }

  .line {
  flex: 1;
  height: 2px;
  background-color: #1f3566; /* Navy blue line color */
}

.payment{
  display: flex;
  width: 100%;
  /* flex-direction: row; */
  justify-content: space-between;
  /* background-color: aqua; */
}

.info{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: blanchedalmond; */
}

.total{
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: calc(0.5vw);
}

.couponCode{
  padding: 10px 10px 10px 5px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-right: none;
  border-radius: 5px 0px 0px 5px;
  /* -webkit-transition: 0.5s;
  transition: 0.5s;*/
  outline: none;
}
.couponCode:focus {
  border: 2px solid #FFCBCF;
  border-right: none;
}
.subBtn{
  padding: 10px 30px;
  box-sizing: border-box;
  border: 2px solid #FF4858;
  border-radius: 0px 5px 5px 0px;
  background-color: #FFCBCF;
  outline: none;
}

.subBtn:active {
  border: 2px solid #FF4858;
  background-color: #FF4858;
  color: white;
}

.checkoutTotal{
  padding: 10px 30px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 2px solid #FF4858;
  background-color: #FFCBCF;
  outline: none;
}

.checkoutTotal:active {
  border: 2px solid #FF4858;
  background-color: #FF4858;
  color: white;
}

#inf{
  font-size: larger;
}
/* .checkoutTotal{
  gap: 10px;
} */
  /* .boxx{
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    justify-content: space-between ;
    margin-left: 35%;
    
  } */
  </style>