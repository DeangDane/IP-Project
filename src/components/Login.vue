<template>
    <div class="login-container">
      <div class="left-panel">
        <img class="logo" src="@/assets/logo.png" alt="Skin Glow Logo" />
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
            <div v-if="loginError.general" class="error-message">{{ loginError.general }}</div>

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
            <font-awesome-icon :icon="['fab', 'facebook']" size="3x" :style="{ color: 'blue', padding: '10px' }" />
            <font-awesome-icon :icon="['fab', 'google']" size="3x" :style="{ color: 'red', padding: '10px' }" />
            <font-awesome-icon :icon="['fab', 'apple']" size="4x" :style="{ color: 'black', padding: '10px' }" />

          </div>
          <p class="signup-link">
            Don’t have an account? <a href="#" @click.prevent="$emit('switchToSignUp')">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { useUserProfileStore } from "@/stores/UserStore";

  export default {
    components: {
    FontAwesomeIcon,
  },
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
        const userProfileStore = useUserProfileStore();
        const result = userProfileStore.login(this.email, this.password);
        if (result.success) {
          this.$emit("close");
          this.$router.push('/');
        } else {
          this.loginError.general = result.message;
        }
      }
    },
  },
  };
  </script>
  
  <style scoped>
.login-container {
  display: flex;
  height: 600px;
  width: 1024px;
  font-family: 'Arial', sans-serif;
}

.left-panel {
  flex: 1;
  background-color: #f9dada; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
}

.left-panel img.logo {
  width: 210px; /* Adjust logo size */
  margin-bottom: 5px;
}

.left-panel h1 {
  font-size: 45px;
  font-weight: bold;
  color: #000;
  font-family: 'Times New Roman', Times, serif;
}

.right-panel {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.login-form {
  width: 80%;
  max-width: 400px;
  text-align: center;
}

.login-form h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}

.options label {
  font-size: 14px;
}

.options .forgot-password {
  font-size: 14px;
  color: #f08c9c; /* Soft pink */
  text-decoration: none;
}

.options .forgot-password:hover {
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 10px;
  background-color: #f08c9c; /* Soft pink */
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #e07685;
}

.social-login {
  margin: 20px 0;
}

.social-login p {
  margin-bottom: 10px;
  font-size: 14px;
}

.signup-link {
  font-size: 14px;
  margin-top: 15px;
}

.signup-link a {
  color: #f08c9c; /* Soft pink */
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>