<template>
    <div class="login-container">
      <div class="left-panel">
        <!-- <img class="logo" src="@/assets/Logo SkinGlow.png" alt="Skin Glow Logo" /> -->
        <h1>Skin Glow</h1>
      </div>
      <div class="right-panel">
        <div class="login-form">
          <h2>Login</h2>
          <form @submit.prevent="handleLogin">
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="email" required />
            </div>
            <div v-if="loginError.email" class="error-message">{{ loginError.email }}</div>
            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="password" required />
            </div>
            <div v-if="loginError.password" class="error-message">{{ loginError.password }}</div>
            <div class="options">
              <label>
                <input type="checkbox" v-model="rememberMe" />
                Remember me
              </label>
              <a href="#" class="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" class="login-btn">Login</button>
          </form>
          <div class="social-login">
            <p>Continue as</p>
            <button class="social-btn facebook">Facebook</button>
            <button class="social-btn google">Google</button>
            <button class="social-btn apple">Apple</button>
          </div>
          <p class="signup-link">
            Don’t have an account? <a href="#" @click.prevent="$emit('switchToSignUp')">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        rememberMe: false,
        loginError: {}, // Error messages for invalid login
      };
    },
    methods: {
      handleLogin() {
        this.loginError = {};
        if (!this.email.includes("@")) {
          this.loginError.email = "Invalid email format.";
        }
        if (this.password.length < 6) {
          this.loginError.password = "Password must be at least 6 characters.";
        }
        if (!Object.keys(this.loginError).length) {
          alert("Login Successful!");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* (Same as previously provided) */
  </style>  