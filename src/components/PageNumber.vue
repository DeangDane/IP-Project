<template>
    <div class="pagination">
      <!-- First and Previous Buttons -->
      <button @click="goToPage(1)" :disabled="currentPage === 1">«</button>
      
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">‹</button>
  
      <!-- Page Buttons -->
      <button
        v-for="page in visiblePages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
  
      <!-- Next and Last Buttons -->
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">›</button>
      <button @click="goToPage(totalPages)" :disabled="currentPage === totalPages">»</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "PageNumber",
    props: {
      totalPages: Number,
      currentPage: Number,
    },
    emits: ["page-change"],
    computed: {
      visiblePages() {
        const delta = 2; // Number of pages before and after the current page
        const range = [];
  
        // Determine the start and end range
        const start = Math.max(1, this.currentPage - delta);
        const end = Math.min(this.totalPages, this.currentPage + delta);
  
        for (let i = start; i <= end; i++) {
          range.push(i);
        }
  
        return range;
      },
    },
    methods: {
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.$emit("page-change", page);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
  }
  button {
    padding: 8px 12px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    cursor: pointer;
  }
  button.active {
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  