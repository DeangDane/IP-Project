  <template>
  <div>
    <!-- View Toggle Buttons -->
    <div class="view-toggle">
      <button @click="viewMode = 'grid'">Grid View</button>
      <button @click="viewMode = 'list'">List View</button>
    </div>
    <!-- Product List -->
    <div class="product-container">
      <div v-if="viewMode === 'grid'">
        <GridProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <div v-else>
        <ListProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

    <script>
    // import imagePath from "@/assets/s.png";
   
    
    export default {
      components: { },
      data() {
        return {
          viewMode: "grid", // Default to Grid View
          products: [
            {
              id: 1,
              name: "Elasticizing Stop Age Cream",
              image: require('src/assets/s.png'), 
              rating: 5,
              price: 18.9,
              originalPrice: 30.0,
              discount: 70,
              description:
                "Differin Gel contains adapalene, a type of retinoid. Retinoids have vitamin A activity...",
              isHot: false,
            },
            {
              id: 2,
              name: "Another Product",
              image: require('src/assets/s.png'),
              rating: 4,
              price: 25.5,
              description: "A brief description of another product.",
              isHot: true,
            },
          ],
        };
      },
    };
    </script>
    