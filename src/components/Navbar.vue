<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/address">Address</router-link></li>
        <li><router-link to="/orders">Orders</router-link></li>
        <li><router-link to="/account-details">Account Details</router-link></li>
        <li v-if="isAuthenticated"><button @click="logout">Logout</button></li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { useUserProfileStore } from '@/stores/UserProfile';
  
  export default {
    setup() {
      const userProfileStore = useUserProfileStore();
      const logout = () => {
        userProfileStore.logout();
      };
  
      return {
        isAuthenticated: userProfileStore.isAuthenticated,
        logout,
      };
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #f08c9c; /* Soft pink */
    padding: 10px;
  }
  
  .navbar ul {
    list-style: none;
    display: flex;
    gap: 10px;
  }
  
  .navbar li {
    display: inline;
  }
  
  .navbar a {
    color: #fff;
    text-decoration: none;
  }
  
  .navbar button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  </style>