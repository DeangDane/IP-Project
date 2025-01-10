<template>
    <div class="d-flex align-items-center p-3 border rounded  mb-2 " id="box">
      <input type="checkbox" class="me-2" />
      <img :src="image" alt="Product" class="img-fluid" style="width: 50px; height: auto;" />
      <div class="flex-grow-1 ms-2">
        <h5 class="mb-1">{{ title }}</h5>
        <p class="mb-1 text-muted">${{ price }}</p>
      </div>
      <div class="d-flex align-items-center me-3">
        <button @click="decrementQuantity" class="btn btn-outline-secondary btn-sm" id="btn-p">-</button>
        <input type="number" v-model="quantity" min="1" class="form-control mx-1" style="width: 50px;" />
        <button @click="incrementQuantity" class="btn btn-outline-secondary btn-sm" id="btn-p">+</button>
      </div>
      <p class="mb-1 fw-bold">${{ totalPrice.toFixed(2) }}</p>
      <button @click="removeItem" class="btn btn-danger btn-sm ms-2">✕</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      price: Number,
      image: String,
    },
    data() {
      return {
        quantity: 1,
      };
    },
    computed: {
      totalPrice() {
        return this.price * this.quantity;
      },
    },
    methods: {
      incrementQuantity() {
        this.quantity++;
      },
      decrementQuantity() {
        if (this.quantity > 1) {
          this.quantity--;
        }
      },
      removeItem() {
        this.$emit('remove'); 
      },
    },
  };
  </script>
  
  <style scoped>
  #box{
    background-color: white;
    box-shadow: 1px 3px 3px gray;
  }
  #btn-p{
    background-color: lightgreen;
  }
  </style>