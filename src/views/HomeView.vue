<template>
  <div class="search-container">
  <input type="text" placeholder="Search query..." class="search-input" />
  <button class="search-button">Search</button>
</div>
</template>
<style>
.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #a3c1ff; /* Light blue border */
  border-radius: 5px;
  overflow: hidden; /* To keep the border radius */
  width: 30%;
  margin-left: 30%;
  margin-bottom: 20px;
}

.search-input {
  border: none;
  padding: 10px;
  outline: none;
  flex-grow: 1; /* Allow input to take available space */
  font-size: 16px;
  color: #999; /* Light gray text */
}

.search-button {
  background-color: #00aaff; /* Blue background */
  color: white; /* White text */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background-color: #0088cc; /* Darker blue on hover */
}
</style>