<template>
  <div class="user-options" @mouseenter="showDropdown" @mouseleave="hideDropdown">
    <div v-if="isDropdownVisible" class="dropdown-menu">
      <NavButton name="Profile" :route="'/profile'" @click="hideDropdown" />
      <NavButton name="Address" @click="hideDropdown" />
      <NavButton name="My Orders" @click="hideDropdown" />
      <button @click="logout" class="nav-button">
        <i class="fas fa-sign-out-alt"> Logout</i>
      </button>
    </div>
  </div>
</template>

<script>
import NavButton from './NavButton.vue';
import { useUserProfileStore } from "@/stores/UserStore";

export default {
  name: "UserOptions",
  components: {
    NavButton,
  },
  data() {
    return {
      isDropdownVisible: false,
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    logout() {
      const userProfileStore = useUserProfileStore();
      userProfileStore.logout();
      this.$router.push('/');
      this.hideDropdown();
    },
  },
};
</script>
  
  <style scoped>
  .user-options {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 150px;    
  }
  
  .dropdown-menu {
    display: flex;
    flex-direction: column;
    padding: 2px;
  }
  .nav-button {
    display: flex;
    margin: 0 auto;
    padding: 10px;
}
  
  .nav-button:hover {
    background-color: #f0f0f0;
  }
  
  .nav-button i {
    font-size: 16px;
  }
  </style>