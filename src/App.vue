<template>

  <div class="header">
    <div class="upper">
      <div class="brand">
        <img width="156.25rem" height="161.25rem" src="../public/images/logo.png" alt="">
        <p>SKIN GLOW</p>
      </div>

      <div class="options">
        <input type="Search" placeholder="Search">
        <button>cart</button>
        <button>favorite</button>
        <button>Information</button>
      </div>

    </div>

    <div class="lower">
      <NavButton></NavButton>
    </div>
  </div>

  <!-- <RouterView /> -->

  <!-- <Footer></Footer> -->

</template>
<script>
import NavButton from './components/NavButton.vue';

export default {
  name: 'App',
  components: {
    NavButton,
  }
};
</script>

<style scoped>

.brand{
  display: flex;
  align-items: center;
}

.upper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header{
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #FFCBCF;
}

.lower{
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>