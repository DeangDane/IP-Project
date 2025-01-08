import { defineStore } from 'pinia';

export const useUserProfileStore = defineStore('UserProfile', {
  state: () => ({
    profile: {
      name: '',

      email: '',
    },
    isLoggedIn: false,
  }),
  actions: {
    saveUserProfile(profile) {
      this.profile = profile;
      this.isLoggedIn = true;
    },
    logout() {
      this.profile = { name: '', email: '' };
      this.isLoggedIn = false;
    },
  },
  getters: {
    UserProfile: (state) => state.profile,
    isAuthenticated: (state) => state.isLoggedIn,
  },
});