<template>
    <div class="search">
      <input
        type="text"
        v-model="query"
        placeholder="Search query..."
        @input="onSearch"
      />
      <button @click="onSearch">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchQ",
    data() {
      return {
        query: "",
      };
    },
    emits: ["search"],
    methods: {
      onSearch() {
        this.$emit("search", this.query);
      },
    },
  };
  </script>
  
  <style scoped>
  .search {
    display: flex;
    gap: 8px;
    margin: 16px 0;
  }
  input {
    padding: 8px;
    border: 1px solid #ddd;
    flex-grow: 1;
  }
  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>  