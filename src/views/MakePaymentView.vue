<template>
  <div class="payment-container">
    <!-- Header Section -->
    <div class="payment-header">
      <button class="back-btn" @click="prevStep">
        <i class="fa fa-arrow-left"></i>
      </button>
      <h2>Make Payment</h2>
      <button class="close-btn" @click="closePayment">&times;</button>
    </div>

    <!-- Progress Indicator -->
    <div class="progress-indicator">
      <span :class="{ active: currentStep === 1 }">1</span>
      <span :class="{ active: currentStep === 2 }">2</span>
      <span :class="{ active: currentStep === 3 }">3</span>
    </div>

    <!-- Step 1: User Details -->
    <div v-if="currentStep === 1" class="step">
      <div class="form-group">
        <input type="text" placeholder="First Name" v-model="form.firstName" />
        <input type="text" placeholder="Last Name" v-model="form.lastName" />
      </div>
      <div class="form-group">
        <input type="email" id="email" placeholder="Email Address" v-model="form.email" />
        <input type="text" id="del" placeholder="Delivery Address" v-model="form.address" />
      </div>
      <div class="select">Method of Payment</div>
      <div class="form-group">
        <!-- <div class="payment-methods"> -->
          <label>
            <i class="fa-regular fa-credit-card"></i> 
            <span id="M">Credit Card Or Debit</span>
          </label>
         
          
        <!-- </div> -->
        <div class="ph">
          <input type="text" placeholder="Phone Number" v-model="form.phoneNumber" />
        </div>
      </div>
      <button class="next-btn" @click="nextStep">
        Go to Payment
      </button>
    </div>

    <!-- Step 2: Payment Details -->
  <div v-if="currentStep === 2" class="step1">
      <div class="paymcard">
          <div class="payment-card">
            <img src="/src/assets/visacardd.png" alt="Visa card" />
          </div>

        <div class="form-container1">
          <div class="form-group">
              <input type="text" placeholder="Card Number (16 digits)" v-model="form.cardNumber" maxlength="16"/>
            <div class="cvv">
                <input type="text" placeholder="Expiry Date (MM/YY)" v-model="form.expiry" />
                <input type="text" placeholder="CVV  (3 digits)" v-model="form.cvv " maxlength="3" />
            </div>          
                <input type="text" placeholder="Holder Name" v-model="form.holderName" />
          </div>
        </div>
      </div>     

        <div class="savecard">
          <label>
          <input type="checkbox" id="savecard" v-model="form.saveCard" /> 
          <span>Save this card for future use</span>
          <button class="next-btn" @click="nextStep">Confirm Payment</button>
      </label>
      </div>
  </div>

    <!-- Step 3: Payment Success -->
    <div v-if="currentStep === 3" class="step success-step">
      <i class="fa-solid fa-circle-check"></i>
      <h3>Success</h3>
      <button class="complete-btn" @click="completePayment">Complete</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useOrderStore } from "@/store/OrderStore";

export default defineComponent({
  data() {
    return {
      currentStep: 1,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        paymentMethod: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        holderName: "",
        saveCard: false,
      },
      errors: {}, // Object to track field-specific errors
    };
  },

  methods: {
    // step1
    validateStep1() {
      if (!this.form.firstName || !this.form.lastName || !this.form.email || !this.form.address) {
        alert("Please fill out all required fields.");
        return false;
      }
      if (!/\S+@\S+\.\S+/.test(this.form.email)) {
        alert("Please enter a valid email address.");
        return false;
      }
      
      return true;
    },
    // step2
    validateStep2() {
    if (!this.form.cardNumber || this.form.cardNumber.length < 16) {
      alert("Please enter a valid 16-digit card number.");
      return false;
    }
    if (!this.form.expiry || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(this.form.expiry)) {
      alert("Please enter a valid expiry date in MM/YY format.");
      return false;
    }
    if (!this.form.cvv || this.form.cvv.length !== 3) {
      alert("Please enter a valid 3-digit CVV.");
      return false;
    }
    if (!this.form.holderName || this.form.holderName.trim() === "") {
      alert("Please enter the cardholder's name.");
      return false;
    }
    return true;
  },
    
  nextStep() {
    if (this.currentStep === 1 && !this.validateStep1()) {
      return;
    }
    if (this.currentStep === 2 && !this.validateStep2()) {
      return;
    }
    this.currentStep++;
  },
    prevStep() {
      if (this.currentStep > 1) {this.currentStep--;}
    },
    
    closePayment() {
      if (confirm("Are you sure you want to close the payment process?")) {
        this.resetForm();
        this.currentStep = 1;
      }
    },
    completePayment() {
      alert("Payment completed successfully!");
      this.resetForm();
      this.currentStep = 1;
    },

    resetForm() {
      this.form = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        paymentMethod: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        holderName: "",
        saveCard: false,
      };
      this.errors = {};
    },
  },
});
</script>



<style scoped>
/* General Container */
.payment-container {
  width: 800px;
  height: 600px;
  position: relative;
  margin: 50px auto;
  padding: 25px 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  font-family: "Arial", sans-serif;
  color: #333;
}

/* Header */
.payment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.payment-header h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff4c61;
  display: flex;
  align-content: center;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.back-btn {
  background: none;
  position: absolute;
  border: none;
  font-size: 1.5rem;
  color: #ff4c61;
  cursor: pointer;
}

.close-btn {
  font-size: 1.5rem;
  background: none;
  position: absolute;
  right: 25px;
  border: none;
  font-size: 2rem;
  color: #ff4c61;
  cursor: pointer;
}

.back-btn:hover,
.close-btn:hover {
  color: #333;
}

/* Progress Indicator */
.progress-indicator {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.progress-indicator span {
  width: 35px;
  height: 35px;
  margin: 0 10px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: #999;
  transition: all 0.3s;
}

.progress-indicator span.active {
  background: #ff4c61;
  color: #fff;
  box-shadow: 0 3px 6px rgba(255, 94, 87, 0.4);
}

/* Steps */
.step {
  
  text-align: left;
}
.step .form-group {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.step h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #555;
}

.form-group input#del {
  width: 100%;
  height: 100px;
}
.form-group input#email {
  width: 100%;
  height: 50px;
}

.form-group input {
  flex: 1 1 calc(50% - 20px);
  padding: 12px 15px;
  margin: 8px 0;
  background-color: #9999992c;
  border: 1px solid #ddd;
  border-radius: 8px;
  border: none;
  font-size: 0.95rem;
  color: #444;
  box-sizing: border-box;
  transition: border 0.3s;
  text-align: left; /* Align text to the left */
}
.form-group input::placeholder {
  text-align: left; /* Align placeholder text to the left */
  padding-top: 0; /* Remove top padding */
}

.form-group input:focus {
  border-color: #ff4c61;
  /* outline: none; */
  box-shadow: 0 0 5px rgba(255, 94, 87, 0.2);
}
.step p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 25px;
}
/* Input Fields */
.form-group label {
  font-size: 1.2rem;
  /* color: #ff4c61; */
  gap: 3px;
  margin-right: 10px;
  margin-bottom: 8px;
  display: block;
  /* margin: space-between; */
}
.form-group label span{
  margin-left: 10px ;

}
.payment-methods{
  /* font-weight: bold; */
    margin-bottom: 40px;
}
.payment-methods label {
  display: flex;
  align-items: center; /* Ensures elements are vertically aligned */
  font-size: 1rem;
  font-weight: 600;
  color: #555;
  margin: 5px 0; /* Consistent margin to prevent shifting */
  padding: 5px; /* Add padding for hover effect */
  gap: 10px; /* Space between the icon and the text */
  transition: background-color 0.3s; /* Smooth hover effect */
}
.ph input {
  width: 82%; 
  margin-left: 135px;
  margin-right: 76px;
  margin-top: 0px;
}
/* Payment Method Logos */

label i {
  font-size: 2.5rem; /* Adjust icon size */
  color: #ff4c61 !important; /* Force the color to always be #ff4c61 */
  margin-right: 10px; /* Space between icon and text */
}


.payment-methods span {
  margin: 0; /* Remove extra margin to keep text inline */
  white-space: nowrap; /* Prevent text wrapping */
}
.payment-methods img {
  order: 1; /* Ensures the image appears first */
  width: 24px;
  height: 24px;
}

.payment-methods span#M {
  order: 2; /* Label text comes after the image */
  margin-right: 110px;
}
.payment-methods span#v {
  order: 2; /* Label text comes after the image */
  margin-right: 158px;
}
.payment-methods span#p {
  order: 2; /* Label text comes after the image */
  margin-right: 140px;
}

.form-group .payment-methods i{
  font-size: 1.5rem; /* Adjust the size of the icons */
  
}
.select{
  position: absolute;
  top: 290px;
  font-weight: bold;
  font-size: 20px;
  color:#ff4c61 ;
  margin-top: 10px;
}
/* Buttons */
button {
  padding: 12px 15px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-weight: bold;
  color: #fff;
  background: #ff4c61;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

button:hover {
  background-color: #ff4c61;
  color: #fff;
  transform: scale(1.02);
}

/* Success Step */
 .success-step {
  text-align: center;
  font-weight: bold;
  font-size: 5rem;
  color: #ff4c61;
  padding: 80px;
  margin: auto;
  margin-bottom: 20px;
  /* background-color: red; */

}
.success-step i{
  font-size: 3rem;
  color: #ff4c61;
  margin-bottom: 20px;
}
.success-step h3{
  color: black;
  font-weight: bold;
}
.success-step button{
  margin-bottom: 20px;
  padding: 10px 40px;
  /* color: red; */
}
h3 {
  color: rgb(18, 18, 110);
  font-size: 1rem;
}

/* Payment Card Preview */
.payment-card {
  width: 100%; /* Full width of container */
  max-width: 400px; /* Limit maximum width */
  gap: 10px;
  margin: 0 auto 20px; /* Center image with spacing */
  /* background-color: none; */
}
.payment-card img {
  width: 100px;
  max-width: 350px;
  margin: 0 auto 20px;
  border-radius: 8px;
}
.paymcard{
  display: flex;
  gap: 5px;

}
.form-container1 input{
  width: 100%;
  gap: 20px;
}
.form-container1 input::placeholder{
  font-size: 13px;
  width: 100%;
  gap: 20px;
}
.step1{
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

}
/*  */
label #savecard{
  position: absolute;
  font-size: 1rem;
  color: gray;

}
.cvv{
  display: flex;
  gap: 20px;
  flex-direction: row;
}

.savecard label input{
  margin-top: 10px;
  left: 110px;
  /* top: ; */
  bottom: 253px;
  right: 10px;
  size: 10px;
  color: gray;
  border: none;
  font-size: 1rem;                            
}
.savecard label span{
  position: absolute;
  color: gray;
  margin-top: 10px;
  left: 29rem;
  right: 10px;
  top: 20rem;
  bottom: 10rem;
  /* right: 10px; */
  size: 10px;
  font-size: 1rem;

}
.payment-card img {
  width: 100%;
  max-width: 350px;
  margin: 0 auto 20px;
  border-radius: 8px;
}

/* Checkbox */
input[type="checkbox"] {
  margin-right: 10px;
}

label[for="checkbox"] {
  font-size: 0.9rem;
  color: rgb(18, 18, 110);
  cursor: pointer;
}

label[for="checkbox"]:hover {
  color: rgb(18, 18, 110);
}
.payment-methods  i{
  font-size: 1.5rem !important;  
  color: #ff4c61;
  margin-right: 10px; 
  vertical-align: middle; 

}
button.next-btn {
  background-color: #ff4c61;
  position: absolute;
  bottom: 50px;
  right: 35%;
  align-items: center;
  justify-content: center;
  padding: 12px 60px;
  border: none;   
  border-radius: 8px;
}

/* Completion Button */
button.complete-btn {
  background: #ff4c61;
}

button.complete-btn:hover {
  background: #ff4c61;
}


</style>