<template>
  <div class="login-container">
      <div class="left-panel">
          <img class="logo" src="@/assets/logo.png" alt="Skin Glow Logo" />
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
                  <div class="input-group">
                      <label for="password">Confirm Password</label>
                      <input type="password" id="confirmpassword" v-model="confirmpassword" required />
                  </div>

                  <div v-if="signUpError.password" class="error-message">{{ signUpError.password }}</div>
                  <div v-if="signUpError.confirmpassword" class="error-message">{{ signUpError.confirmpassword }}
                  </div>

                  <button type="submit" class="login-btn">Sign Up</button>
              </form>
              <div class="social-login">
                  <p>Continue as</p>
                  <font-awesome-icon :icon="['fab', 'facebook']" size="3x"
                      :style="{ color: 'blue', padding: '10px' }" />
                  <font-awesome-icon :icon="['fab', 'google']" size="3x" :style="{ color: 'red', padding: '10px' }" />
                  <font-awesome-icon :icon="['fab', 'apple']" size="4x"
                      :style="{ color: 'black', padding: '10px' }" />
              </div>
              <p class="signup-link">
                  Already have an account? <a href="#" @click.prevent="$emit('switchToLogin')">Login</a>
              </p>
          </div>
      </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
      return {
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
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
          if (this.confirmpassword.length < 6) {
              this.signUpError.confirmpassword = "Confirm Password must be the same Password.";
          }
          if (!Object.keys(this.signUpError).length) {
              alert("Sign Up Successful!");
              const userProfileStore = useUserProfileStore();
              userProfileStore.saveUserProfile({ name: this.name, email: this.email });
              this.$emit('switchToLogin');
              // Navigate to the login page
              // this.$router.push("/login");
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
  width: 210px;
  /* Adjust logo size */
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
  position: relative;
}

.right-panel .back-link {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 14px;
  color: #000;
  text-decoration: none;
}

.right-panel .back-link:hover {
  text-decoration: underline;
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
  color: #f08c9c;
  /* Soft pink */
  text-decoration: none;
}

.options .forgot-password:hover {
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 10px;
  background-color: #f08c9c;
  /* Soft pink */
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
  margin: 10px 0;
}

.social-login p {
  margin-bottom: 5px;
  font-size: 14px;
}

.signup-link {
  font-size: 14px;
  margin-top: 15px;
}

.signup-link a {
  color: #f08c9c;
  /* Soft pink */
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>