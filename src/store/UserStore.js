import { defineStore } from 'pinia';

export const useUserProfileStore = defineStore('UserProfile', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users')) || [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    isLoggedIn: !!localStorage.getItem('currentUser'),
    // profileImage: '',
    loginError: '',
    signupError: '',
    signupSuccess: false,
  }),
  actions: {
    loadUsersFromLocalStorage() {
      const users = localStorage.getItem('users');
      if (users) {
        this.users = JSON.parse(users);
      }
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        this.currentUser = JSON.parse(currentUser);
        this.isLoggedIn = true;
      }
    },
    saveUsersToLocalStorage() {
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    login(email, password) {
      const user = this.users.find((user) => user.email === email && user.password === password);
      if (user) {
        this.currentUser = user;
        this.isLoggedIn = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.loginError = '';
        return { success: true, message: "Login successful." };
      } else {
        this.loginError = "Invalid email or password.";
        return { success: false, message: this.loginError };
      }
    },
    signup(name, email, password) {
      const userExists = this.users.some((user) => user.email === email);
      if (userExists) {
        this.signupError = "Email already exists.";
        return { success: false, message: this.signupError };
      } else {
        const newUser = { name, email, password, profileImage: '' };
        this.users.push(newUser);
        this.saveUsersToLocalStorage();
        this.signupSuccess = true;
        this.signupError = '';
        return { success: true, message: "Signup successful." };
      }
    },
    logout() {
      this.currentUser = null;
      this.isLoggedIn = false;
      localStorage.removeItem("currentUser");
    },
    changePassword(newPassword) {
      if (this.currentUser) {
        this.currentUser.password = newPassword;
        this.updateUserInUsersArray();
        this.saveUsersToLocalStorage();
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        return { success: true, message: "Password changed successfully." };
      } else {
        return { success: false, message: "No user is logged in." };
      }
    },
    updateProfile({ name, email }) {
      if (this.currentUser) {
        this.currentUser.name = name;
        this.currentUser.email = email;
        this.updateUserInUsersArray();
        this.saveUsersToLocalStorage();
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        return { success: true, message: "Profile updated successfully." };
      } else {
        return { success: false, message: "No user is logged in." };
      }
    },
    updateProfileImage(imageData) {
      if (this.currentUser) {
        this.currentUser.profileImage = imageData;
        this.updateUserInUsersArray();
        this.saveUsersToLocalStorage();
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        return { success: true, message: "Profile image updated successfully." };
      } else {
        return { success: false, message: "No user is logged in." };
      }
    },
    updateUserInUsersArray() {
      const index = this.users.findIndex(user => user.email === this.currentUser.email);
      if (index !== -1) {
        this.users[index] = { ...this.currentUser };
        this.saveUsersToLocalStorage();
      }
    }
  },
  getters: {
    currentUserProfileImage(state) {
      return state.currentUser ? state.currentUser.profileImage : '';
    },
  },
});
