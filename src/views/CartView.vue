<template>
  <div class="container">
    <div class="title">
      <div class="line"></div>
      <h1>Your Basket</h1>
      <div class="line"></div>
    </div>
    <div class="row">
      <div class="checkout" v-for="(product, index) in products" :key="index">
        <ProductItem :proName="product.proName" :price="product.price" :image="product.images[0]"
          @remove="handleRemove(product.id)" />
      </div>
    </div>


    <div class="payment">
      <div class="coupon">
        <input class="couponCode" type="string" placeholder="   Coupon Code">
        <button class="subBtn">Submit</button>
      </div>

      <div class="total">
        <div class="info">
          <div>Subtotal</div>
          <!-- <div>{{ cartTotal | currency }}</div> -->
        </div>
        <div class="info">
          <div>Shipping Fee</div>
          <div>Free</div>
        </div>
        <div class="info">
          <div>Coupon</div>
          <!-- <div>{{ appliedCoupon || 'None' }}</div> -->
        </div>
        <hr>
        <div id="inf" class="info">
          <div>Total</div>
          <!-- <div>{{ (cartTotal + 3) | currency }}</div> -->
        </div>
        <router-link to="/makePayment">
          <button class="checkoutTotal">Checkout</button>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { useCartStore } from '@/store/CartStore';
import { computed } from 'vue';

export default {
  components: {
    ProductItem,
  },

  setup() {
    const cartStore = useCartStore();
    const products = computed(() => cartStore.cart);

    const cartTotal = computed(() => {
      return products.value.reduce((total, item) => total + item.quantity * item.price, 0);
    });

    const handleRemove = (productId) => {
      // Handle item removal here
      cartStore.removeFromCart(productId);
      console.log("Item removed");
    };

    return {
      products,
      cartTotal,
      handleRemove,
    };
  },

};
</script>

<style scoped>
.container {
  font-family: 'Poppins', sans-serif;
  width: 100%;
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
  gap: 20px;
}


.line {
  flex: 1;
  height: 4px;
  background-color: #1f3566;
  /* Navy blue line color */
}

.payment {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.total {
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: calc(0.5vw);
}

.couponCode {
  padding: 10px 10px 10px 5px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-right: none;
  border-radius: 5px 0px 0px 5px;
  outline: none;
}

.couponCode:focus {
  border: 2px solid #FFCBCF;
  border-right: none;
}

.subBtn {
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

.checkoutTotal {
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

#inf {
  font-size: larger;
}

router-link {
  text-decoration: none;
  color: #007bff;
}

router-link:hover {
  text-decoration: underline;
}
</style>