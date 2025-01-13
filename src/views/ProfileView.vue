<template>
  <div class="profile-container" v-if="isLoggedIn">
    <h1>Profile</h1>
    <div class="profile-details">
      <img :src="profileImage" alt="Profile Image" class="profile-image" />
      <input type="file" @change="uploadProfileImage" />
      
      <div class="profile-field">
        <p><strong>Name:</strong> 
          <span v-if="!isEditingName">{{ userName }}</span>
          <input v-else v-model="userName" />
          <button @click="toggleEdit('name')">{{ isEditingName ? 'Save' : 'Edit' }}</button>
        </p>
      </div>
      
      <div class="profile-field">
        <p><strong>Email:</strong> 
          <span v-if="!isEditingEmail">{{ userEmail }}</span>
          <input v-else v-model="userEmail" />
          <button @click="toggleEdit('email')">{{ isEditingEmail ? 'Save' : 'Edit' }}</button>
        </p>
      </div>
      
      <button @click="changePassword" class="change-password-btn">Change Password</button>
    </div>
  </div>
  <div v-else>
    <p>Please log in to view your profile.</p>
  </div>
</template>

<script>
import { useUserProfileStore } from "@/stores/UserStore";

export default {
  name: "Profile",
  data() {
    return {
      newPassword: "",
      isEditingName: false,
      isEditingEmail: false,
    };
  },
  computed: {
    isLoggedIn() {
      const userProfileStore = useUserProfileStore();
      return userProfileStore.isLoggedIn;
    },
    userName: {
      get() {
        const userProfileStore = useUserProfileStore();
        return userProfileStore.currentUser?.name || "";
      },
      set(value) {
        const userProfileStore = useUserProfileStore();
        userProfileStore.currentUser.name = value;
      }
    },
    userEmail: {
      get() {
        const userProfileStore = useUserProfileStore();
        return userProfileStore.currentUser?.email || "";
      },
      set(value) {
        const userProfileStore = useUserProfileStore();
        userProfileStore.currentUser.email = value;
      }
    },
    profileImage() {
      const userProfileStore = useUserProfileStore();
      return userProfileStore.currentUserProfileImage;
    },
  },
  methods: {
    toggleEdit(field) {
      if (field === 'name') {
        if (this.isEditingName) {
          this.saveProfile();
        }
        this.isEditingName = !this.isEditingName;
      } else if (field === 'email') {
        if (this.isEditingEmail) {
          this.saveProfile();
        }
        this.isEditingEmail = !this.isEditingEmail;
      }
    },
    changePassword() {
      const newPassword = prompt("Enter your new password:");
      if (newPassword) {
        const userProfileStore = useUserProfileStore();
        const result = userProfileStore.changePassword(newPassword);
        alert(result.message);
      }
    },
    saveProfile() {
      const userProfileStore = useUserProfileStore();
      // const result = userProfileStore.updateProfile({
        userProfileStore.updateProfile({
        name: this.userName,
        email: this.userEmail,
      });
      alert(result.message);
    },
    uploadProfileImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const userProfileStore = useUserProfileStore();
          // const result = userProfileStore.updateProfileImage(e.target.result);
          userProfileStore.updateProfileImage(e.target.result);
          alert(result.message);
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.profile-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.profile-field {
  display: flex;
  align-items: center;
  gap: 10px;
}

.change-password-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.change-password-btn:hover {
  background-color: #0056b3;
}
</style>