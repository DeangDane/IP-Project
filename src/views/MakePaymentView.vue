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
      <div class="select">Select Method of Payment</div>
      <div class="form-group">
        <div class="payment-methods">
          <label>
            <i class="fa-regular fa-credit-card"></i> 
            <input value="MasterCard" type="checkbox" @change="selectPaymentMethod('MasterCard')" :checked="form.paymentMethod === 'MasterCard'" />
            <span id="M">Credit Card Or Debit</span>
          </label>
          <label>
            <!-- <img src="/src/assets/visa.png" alt="Visa Logo" /> -->
            <i class="fa-brands fa-paypal"></i>
            <input value="VisaCard" type="checkbox" @change="selectPaymentMethod('VisaCard')" :checked="form.paymentMethod === 'VisaCard'" />
            <span id="p">PayPal</span> 
          </label>
          <label>
            <!-- <img src="/src/assets/paypal.png" alt="PayPal Logo" /> -->
            <i class="fa-solid fa-building-columns"></i>
            <input value="PayPal" type="checkbox" @change="selectPaymentMethod('PayPal')" :checked="form.paymentMethod === 'PayPal'" />
            <span id="v">Bank Transfer</span> 
          </label>
        </div>
        <div class="ph">
          <input type="text" placeholder="Phone Number" v-model="form.phoneNumber" />
        </div>
      </div>
      <button class="next-btn" @click="nextStep">Go to Payment</button>
    </div>

    <!-- Step 2: Payment Details -->
    <div v-if="currentStep === 2" class="step1">
      <!-- 1 -->
      <div class="payment-card">
        <img src="/src/assets/visacardd.png" alt="Visa card" />
      </div>
      <!-- 1 -->

      <!-- 2 -->
      <div class="form-group">
        <input type="text" placeholder="Card Number" v-model="form.cardNumber" />
        <div class="cvv">
          <input type="text" placeholder="Expiry Date (MM/YY)" v-model="form.expiry" />
          <input type="text" placeholder="CVV" v-model="form.cvv" />
        </div>
        <input type="text" placeholder="Holder Number" v-model="form.holderName" />
      </div>
      <!-- 2 -->

       <!-- 3 -->
      <div class="save">
        <label>
        <input type="checkbox" id="save1" v-model="form.saveCard" /> Save this card for future use
        <button class="next-btn" " @click="nextStep">Confirm Payment</button>
      </label>
      </div>
      <!-- 3 -->
    </div>

    <!-- Step 3: Payment Success -->
    <div v-if="currentStep === 3" class="step success-step">
      <div class="success-icon">✔</div>
      <h3>Payment Successful</h3>
      <p>Thank you for your payment!</p>
      <button class="complete-btn" @click="completePayment">Finish</button>
    </div>
  </div>
</template>

<script>
export default {
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
    };
  },
  methods: {
    prevStep() {
      alert("Back Payment");
      this.$router.go(-1); // Navigate to the previous page in Vue Router history
    },
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    closePayment() {
      alert("Payment process has been closed.");
      this.resetForm();
      this.currentStep = 1;
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
    },
    selectPaymentMethod(method) {
      if (this.form.paymentMethod === method) {
        this.form.paymentMethod = "";
      } else {
        this.form.paymentMethod = method;
      }
    },
  },
};
</script>

<style scoped>
/* General Container */
.payment-container {
  width: 800px;
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
  width: 30px;
  height: 30px;
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

.step h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #555;
}

.step p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 25px;
}

/* Input Fields */
.step .form-group {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
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
  outline: none;
  box-shadow: 0 0 5px rgba(255, 94, 87, 0.2);
}

.form-group label {
  font-size: 0.9rem;
  font-weight: bold;
  color: #ff4c61;
  margin-bottom: 8px;
  display: block;
}
.ph input {
  width: 100%; 
  margin-left: 70px;
  margin-right: 60px;
  margin-top: 0px;
}
.payment-methods{
    display: flex;
    /* padding: 10px; */
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
}
/* Payment Method Logos */
.payment-methods label {
  display: flex;
  align-items: center; /* Ensures elements are vertically aligned */
  font-size: 0.9rem;
  font-weight: 600;
  color: #555;
  margin: 5px 0; /* Consistent margin to prevent shifting */
  padding: 5px; /* Add padding for hover effect */
  gap: 10px; /* Space between the icon and the text */
  transition: background-color 0.3s; /* Smooth hover effect */
}
.payment-methods label:hover{
  width:  270px;
  height: 40px;
  /* color: red; */
  background-color: #b6def7c2;
  border-radius: 3px;

}
i {
  font-size: 2.5rem; /* Adjust icon size */
  color: #ff4c61 !important; /* Force the color to always be #ff4c61 */
  margin-right: 10px; /* Space between icon and text */
}



.payment-methods input[type="checkbox"] {
  position: absolute;
  left: 250px;
  height: 25px;
  width: 25px;
  background-color: #eee;
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
  background-color: #ff4c61; /* Icon color */
}
.select{
  position: absolute;
  top: 290px;
  font-size: 20px;
  color:#ff4c61 ;
  margin-bottom: 10px;
}
.step1{
  display: flex;
  position: relative;
  flex-direction: space-between;
  /* align-items: center;
  justify-content: center; */
  gap: 100px;
  
}
.save{
  position: absolute;
  bottom: 0;
  right: 50px;
  left: 50px;
  gap: 10px;
}
.save label input {
  position: absolute;
  bottom: 0;
  top: 1px;
  size: 30px;
  right: 10px;
  left: 80px;
  gap: 10px;

}
.form-group input{
  /* display: flex; */
  /* flex-direction: column; */
  width: 100%;
  gap: 0pX;
  margin-right: 0px;
  margin-bottom: 15px;
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
.success-step .success-icon {
  font-size: 3rem;
  color: #ff4c61;
  margin-bottom: 20px;
}

h3 {
  color: rgb(18, 18, 110);
  font-size: 1rem;
}
.payment-card {
  width: 50%; /* Full width of container */
  max-width: 400px; /* Limit maximum width */
  margin: 0 auto 20px; /* Center image with spacing */
  /* background-color: none; */
}

/* Payment Card Preview */
.payment-card img {
  width: 100%;
  max-width: 350px;
  margin: 0 auto 20px;
  border-radius: 8px;
  
}
.cvv{
  display: flex;
  gap: 20px;
}
.cvv input::placeholder{
  font-size: 14px;
  gap: 20px;
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

  padding: 12px 50px;
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