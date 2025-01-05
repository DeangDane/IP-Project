<!-- <template>
    <div class="make-payment">
      <div class="payment-card">
      
        <div class="payment-header">
          <button class="back-button" @click="goBack">
            <i class="fa fa-arrow-left"></i>
          </button>
          <button class="close-button" @click="closePayment">&times;</button>
        </div>
  
        
        <div class="step-indicator">
          <span :class="{ active: currentStep === 1 }"></span>
          <span :class="{ active: currentStep === 2 }"></span>
          <span :class="{ active: currentStep === 3 }"></span>
        </div>
        
        <div v-if="currentStep === 1">
          <h2>Make Payment</h2>
          <form @submit.prevent="goToStep(2)">
            <div>
              <label for="firstName" >First Name</label>
              <input type="text" v-model="form.firstName" placeholder="First Name"  required />
  
            </div>
            <div>
              <label for="lastName" ></label>
              <input type="text" v-model="form.lastName" placeholder="Last Name" required />
            </div>
            <div>
              <label for="email"></label>
              <input type="email" v-model="form.email" placeholder="Email" required />
            </div>
            <div>
              <label>Select Payment Of Method</label>
              
                <input type="radio" id="creditcard" v-model="form.paymentMethod" value="Credit Card"/>
                <label for="creditCard">Credit Card</label>
              
            </div>
            <button type="submit" class="submit-button">Go to Payment</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { vModelRadio } from 'vue';

  export default {
    name: "MakePayment",
    data() {
      return {
        currentStep: 1,
        form: {
          firstName: "",
          lastName: "",
          email: "",
          paymentMethod: "",
        },
      };
    },
    methods: {
      goToStep(step) {
        if (step === 2) {
          if (
            !this.form.firstName ||
            !this.form.lastName ||
            !this.form.email ||
            !this.form.paymentMethod
          ) {
            alert("Please fill in all required fields!");
            return;
          }
        }
        this.currentStep = step;
      },
      goBack() {
        if (this.currentStep > 1) {
          this.currentStep--;
        }
      },
      closePayment() {
        alert("Closing payment process!");
      },
    },
  };
  </script>
  
  <style scoped>
  .make-payment {
    display: flex;
    width:300%;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    color:#ff2c41;
    background-color: #f9f9f9;
  }
  
  .payment-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    position: relative;
    text-align: center;
  }
  
  .payment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
  }
  
  .back-button {
    background: none;
    border: none;
    font-size: 1.2rem;
    color: #ff4c61;
    cursor: pointer;
    padding: 5px;
  }
  
  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #ff4c61;
    cursor: pointer;
    padding: 5px;
  }
  
  .step-indicator {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  
  .step-indicator span {
    width: 10px;
    height: 10px;
    background: lightgray;
    border-radius: 50%;
    margin: 0 5px;
  }
  
  .step-indicator .active {
    background: #ff4c61;
  }
  
  form div {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }
  
  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .submit-button {
    background-color: #ff4c61;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    margin-top: 10px;
  }
  
  .submit-button:hover {
    background-color: #ff2c41;
  }
  </style>
   -->




   <template>
    <div class="payment-container">
      <div class="payment-header">
        <button class="back-btn" @click="goBack">
          <i class="fa fa-arrow-left"></i>
        </button>
        <h2 >Make Payment</h2>
        <button class="close-button" @click="closePayment">&times;</button>

      </div>
      <!-- Step Progress -->
      <div class="progress-indicator">
        <span :class="{ active: currentStep === 1 }">1</span>
        <span :class="{ active: currentStep === 2 }">2</span>
        <span :class="{ active: currentStep === 3 }">3</span>
      </div>
  
      <!-- Step 1: Form for Payment Details -->
      <div v-if="currentStep === 1" class="step">
        <div class="form-group">
          <input type="text" placeholder="First Name" v-model="form.firstName" />
          <input type="text" placeholder="Last Name" v-model="form.lastName" />
        </div>
        <div class="form-group" >
          <input type="email" placeholder="Email Address" v-model="form.email" />
          <input type="phone number" placeholder="Phone Number" v-model="form.Phonenumber" />
          
        </div>
        <div class="form-group" id="add">
          <input type="text" placeholder="Address for Delivery" v-model="form.address" />
        </div>
        <div class="form-group">
          <label>Select Method Of Payment</label>

        <div class="payment-methods">
          <label>
            <input type="radio" name="payment" value="credit-card" v-model="form.paymentMethod"/>Master Card
            <img src="/src/assets/mastercard.png" alt="">
          </label>

          <label >
            <input type="radio" name="payment" value="visa card" v-model="form.paymentMethod">Visa Card
            <img src="/src/assets/visa.png" alt="Visa Logo" />
        </label>
        <label>
          <input type="radio" name="payment" value="paypal card" v-model="form.paymentMethod" />
          PayPal
          <img src="/src/assets/paypal.png" alt="PayPal Logo" />
        </label>
      </div>
          
        </div>
        <button class="next-btn" @click="nextStep">Go to Payment</button>
      </div>
  
      <!-- Step 2: Payment Details -->
      <div v-if="currentStep === 2" class="step">
        <div class="payment-card">
          <img style="align-items: center;" src="/src/assets/mastercard.png" alt="Credit Card" />
        </div>
        <div class="form-group" id="sttwo">
          <input type="text" placeholder="Card Number" v-model="form.cardNumber" />
          <input type="text" placeholder="Expiry" v-model="form.expiry" />
          <input type="text" placeholder="CVV" v-model="form.cvv" />
          <input type="text" placeholder="Holder Name" v-model="form.holderName" />
        </div>
        <label>
          <input type="checkbox" v-model="form.saveCard" /> Save this credit card
        </label>
        <button class="confirm-btn" @click="nextStep">Confirm</button>
      </div>


  
      <!-- Step 3: Success Message -->
      <div v-if="currentStep === 3" class="step success-step">
        <div class="success-icon">✔</div>
        <h3>Success</h3>
        <p>Your payment was successful!</p>
        <button class="complete-btn" @click="completePayment">Complete</button>
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
      nextStep() {
        if (this.currentStep < 3) {
          this.currentStep++;
        }
      },
      prevStep() {
        if (this.currentStep > 1) {
          this.currentStep--;
        }
      },
      completePayment() {
        alert("Payment Completed!");
        this.currentStep = 1;
        this.resetForm();
      },
      resetForm() {
        this.form = {
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          paymentMethod: "",
          cardNumber: "",
          expiry: "",
          cvv: "",
          holderName: "",
          saveCard: false,
        };
      },
    },
  };
  </script>
 <style scoped>
 /* General Container */
 .payment-container {
   width: 620px;
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
 }
 
 .back-btn,
 .close-btn {
   background: none;
   border: none;
   font-size: 1.5rem;
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
   text-align: center;
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
 .form-group {
   margin-bottom: 20px;
   display: flex;
   gap: 30px;
   text-align: left;
 }
 .form-group #stwo{


 }
 #add{
  width: 100%;
  height: 100px;
 }
 
 .form-group input {
   width: 100%;
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
 
 /* Payment Method Logos */
 .payment-methods {
   display: flex;
   align-items: center;
   gap: 70px;
   margin-bottom: 20px;
 }
 
 .payment-methods input[type="radio"] {
   margin-right: 8px;
 }
 
 .payment-methods label {
   display: flex;
   align-items: center;
   font-size: 0.9rem;
   color: #555;
 }
 
 .payment-methods img {
   width: 24px;
   height: 24px;
   margin-left: 8px;
 }
 .payment-card {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
 }
 /* Buttons */
 button {
   /* width: 100%; */
   padding: 12px 15px;
   font-size: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: auto;
   /* gap: 10px; */
   font-weight: bold;
   color: #fff;
   background: #ff4c61;
   border: none;
   border-radius: 8px;
   cursor: pointer;
   transition: background 0.3s, transform 0.2s;
 }
 
 button:hover {
  background-color: #ff4c61;;
   color: #fff;
   transform: scale(1.02);
 }
 
 /* Success Step */
 .success-step .success-icon {
   font-size: 3rem;
   color: #ff4c61;
   margin-bottom: 20px;
 }
 h3{
  color: rgb(18, 18, 110);
  font-size: 1rem;
  
 }
 
 /* Payment Card Preview */
 .payment-card img {
   width: 100%;
   max-width: 350px;
   margin: 0 auto 20px;
   border-radius: 8px;
   box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
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
 button .next-btn{
  background-color: #ff4c61;
  padding: 12px 15px;
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
 