<template>
    
    <AutoImageSlider />
    <h4 align="center" style="margin-top: 1.5rem; margin-bottom: 1.5rem;"><b>FEATURED PRODUCT</b></h4>
  <div class="container">
    <div class="boxx">
              
              <!-- <PromoProduct
                image="https://i.pinimg.com/736x/0e/04/de/0e04ded9d236f115de4f52a9348fe28d.jpg"
                :originalPrice="40"
                :discount="80"
                :currentPrice="8"
              /> -->
              <PromotProduct
                title="mixsoon Bean "
                subtitle="Acid Serum"
                image="https://i.pinimg.com/736x/b2/12/ec/b212ec71ec8a63e4d9e37fe34beb627a.jpg"
                :originalPrice="30"
                :discount="70"
                :currentPrice="18.9"
                :rating="4"
              />
              <PromotProduct
                title="Anua Heartleaf 77%"
                subtitle="Toner Anua"
                image="https://i.pinimg.com/736x/ab/64/a8/ab64a8ee0cfd36b27d808027014533d6.jpg"
                :originalPrice="30"
                :discount="70"
                :currentPrice="18.9"
                :rating="4"
              />
              <PromotProduct
                title="Clo de Peau Beauté"
                subtitle="La Crème"
                image="https://i.pinimg.com/736x/9a/8f/df/9a8fdfa0435aa3d76c9b04eb680fa540.jpg"
                :originalPrice="30"
                :discount="70"
                :currentPrice="18.9"
                :rating="4"
              />
            </div>
            <h4 align="center" style="margin-top: 1.5rem;"><b>BEST SELLER</b></h4>
            <div class="grid-containe" >
              
            <GridProduct
              v-for="(product, index) in products"
              :key="index"
              :product="product"
            />
          </div>
          <h4 align="center" style="margin-top: 1.5rem;"><b>NEW ARRIVE</b></h4>
            <div class="grid-containe" >
            <NewArrive
              v-for="(productNew, index) in products"
              :key="index"
              :product="productNew"
            />
          </div>
  </div>
    
    <!-- <PromotProduct /> -->
    <NewArrive />
   
  </template>

  
  <script>
  import AutoImageSlider from "@/components/AutoImageSlider.vue";
  import PromotProduct from "@/components/PromotProduct.vue";
  import Review from "@/components/Review.vue";
  import PageNumber from "@/components/PageNumber.vue";
  import SearchQ from "@/components/SearchQ.vue";
  import GridProduct from "@/components/GridProduct.vue";
  import NewArrive from "@/components/NewArrive.vue";
  
  export default {
    components: {
      Review,
      PageNumber,
      SearchQ,
      AutoImageSlider,
      PromotProduct,
      GridProduct,
      NewArrive,
      
    },
   data() {
            return {
             
        
              products: [
                {
                  title: 'Square One',
                  image: 'https://i.pinimg.com/736x/49/9a/3e/499a3eaf66e7915c0907c9ae6403a1a8.jpg',
                  price: '$18.9',
                  rating: 4,
                  isHot: true,
                },
                // Add more products
                {
                  title: 'Square One',
                  image: 'https://i.pinimg.com/736x/f2/06/1b/f2061bd1e9a7c88c19804edc6dbe0868.jpg',
                  price: '$18.9',
                  rating: 4,
                  isHot: true,
                },
                // Add more products
                {
                  title: 'Square One',
                  image: 'https://i.pinimg.com/736x/54/73/fd/5473fd9e3d2d567af59998fb6ff76bd8.jpg',
                  price: '$18.9',
                  rating: 4,
                  isHot: true,
                },
                // Add more products
                {
                  title: 'Square One',
                  image: 'https://i.pinimg.com/736x/4b/f7/18/4bf718ef4218f11b7264e2be908ce6e6.jpg',
                  price: '$17.9',
                  rating: 4,
                  isHot: true,
                },
                // Add more products
              ],
             
            };
           
          },

      };
    
  </script>
  <style>
.home{
  width: 100%;
  height: 100vh;
}

   
      .boxx{
        display: flex;
        width: auto;
        justify-content: center;
      }
      #navbarNav{
        justify-content: space-between;
        display: flex;
      }
      .btn-user{
        border: none;
        background-color: aliceblue;
      }
      .btn-shop{
        border: none;
        background-color: aliceblue;
      }
      .narbar-li{
        display: flex;
        align-items: center;
        gap: 20px;
        list-style-type: none;
        justify-content: center;
        
      }
      .narbar-li a{
        color: black;
      }
      body {
        font-family: 'Cormorant Garamond', serif; /* Apply the font globally */
      }
      .navbar-brand span {
        font-family: 'Cormorant Garamond', serif; /* Apply to brand name */
        font-weight: 700; /* Bold weight */
      }
      .grid-containe{
        
        gap: 20px;
        margin-top: 40px;
        margin-bottom: 40px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        
      }
      .footer{
        background-color: brown;
        width: 100%;
        height: 300px;
        display: flex;
        
      }
    
</style>