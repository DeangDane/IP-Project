<template>
  <div class="container">
    <div class="title">
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
          <div>{{ cartTotal | currency }}</div>
        </div>
        <div class="info">
          <div>Shipping Fee</div>
          <div>3$</div>
        </div>
        <div class="info">
          <div>Coupon or Voucher</div>
          <div>{{ appliedCoupon || 'None' }}</div>
        </div>
        <hr>
        <div id="inf" class="info">
          <div>Total</div>
          <div>{{ (cartTotal + 3) | currency }}</div>
        </div>
        <router-link to="/makePayment">
          <button class="checkoutTotal"  >Checkout</button>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      groupWrapper: "list-group-item",
      isShowingCart: false,
      cart: {
        items: [],
      },
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
        
        // Add more products here...
      ],
    };
  },
  computed: {
    cartTotal() {
      return this.cart.items.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      );
    },
    taxAmount() {
      return this.cartTotal * 0.1; // 10% tax
    },
  },
  filters: {
    currency: function(value) {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      });
      return formatter.format(value);
    }
  },
  methods: {
    addProductToCart(product) {
      const cartItem = this.getCartItem(product);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.items.push({ product, quantity: 1 });
      }
      product.inStock--;
    },
    increaseQuantity(item) {
      item.quantity++;
      item.product.inStock--;
    },
    decreaseQuantity(item) {
      item.quantity--;
      item.product.inStock++;
      if (item.quantity === 0) {
        this.removeItemFromCart(item);
      }
    },
    removeItemFromCart(item) {
      const index = this.cart.items.indexOf(item);
      if (index > -1) {
        this.cart.items.splice(index, 1);
      }
    },
    listWrapper() {
      this.groupWrapper = "list-group-item";
    },
    gridWrapper() {
      this.groupWrapper = "grid-group-item";
    },
    // checkout() {
    //   if (confirm("Are you sure that you want to purchase these products?")) {
    //     this.cart.items.forEach((item) => (item.product.inStock += item.quantity));
    //     this.cart.items = [];
    //   }
    // },

    goToMakePayment() {
      this.$router.push('/makePayment');
    },

    getCartItem(product) {
      return this.cart.items.find((item) => item.product.id === product.id) || null;
    },
    handleRemove() {
      // Handle item removal here
      console.log("Item removed");
    },
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(value);
    },
  },
};
</script>

<style scoped>
.container {
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
  height: 2px;
  background-color: #1f3566; /* Navy blue line color */
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
</style>