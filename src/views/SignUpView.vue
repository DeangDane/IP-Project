<template>
    <div class="login-container">
      <div class="left-panel">
        <img class="logo" src="@/assets/Logo SkinGlow.png" alt="Skin Glow Logo" />
        <h1>Skin Glow</h1>
      </div>
      <div class="right-panel">
        <div class="login-form">
          <h2>Create an account</h2>
          <form @submit.prevent="handleSignUp">
            <div class="input-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="name" required />
            </div>
            <div v-if="signUpError.name" class="error-message">{{ signUpError.name }}</div>
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="email" required />
            </div>
            <div v-if="signUpError.email" class="error-message">{{ signUpError.email }}</div>
            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="password" required />
            </div>
            <div v-if="signUpError.password" class="error-message">{{ signUpError.password }}</div>
            <button type="submit" class="login-btn">Sign Up</button>
          </form>
          <div class="social-login">
            <p>Continue as</p>
            <button class="social-btn facebook">Facebook</button>
            <button class="social-btn google">Google</button>
            <button class="social-btn apple">Apple</button>
          </div>
          <p class="signup-link">
            Already have an account? <a href="#" @click.prevent="$emit('switchToLogin')">Login</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        password: "",
        signUpError: {}, // Error messages for invalid signup
      };
    },
    methods: {
      handleSignUp() {
        this.signUpError = {};
        if (!this.name.trim()) {
          this.signUpError.name = "Name is required.";
        }
        if (!this.email.includes("@")) {
          this.signUpError.email = "Invalid email format.";
        }
        if (this.password.length < 6) {
          this.signUpError.password = "Password must be at least 6 characters.";
        }
        if (!Object.keys(this.signUpError).length) {
          alert("Sign Up Successful!");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* (Same as previously provided) */
  </style>
  