<template>
  <div v-if="show" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <component :is="currentView" @switchToLogin="switchToLogin" @switchToSignUp="switchToSignUp"
        @close="closeModal" />
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
import { useUserProfileStore } from "@/stores/UserStore";

export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      currentView: "Login", // Default view
    };
  },
  components: {
    Login,
    SignUp,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    switchToLogin() {
      this.currentView = "Login";
    },
    switchToSignUp() {
      this.currentView = "SignUp";
    },
  },
  mounted() {
    const userProfileStore = useUserProfileStore();
    userProfileStore.loadUsersFromLocalStorage();
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
    width: 60%;
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

@media (max-width: 768px) {
  .modal-content {
  width: 90%; 
  }
}
</style>


