export default {
    data() {
      return {
        favoriteProducts: [
          // Sample product data
          { productId: 1, name: 'Product A', status: 'Pending', total: 29.99, image: 'path/to/imageA.jpg' },
          { productId: 2, name: 'Product B', status: 'Completed', total: 19.99, image: 'path/to/imageB.jpg' },
        ], // Array to store favorite products
      };
    },
    methods: {
      // Get the list of favorite products
      getFavoriteProducts() {
        return this.favoriteProducts;
      },
  
      // Show details of a specific favorite product
      showFavoriteDetails(product) {
        return {
          name: product.name,
          status: product.status,
          total: product.total,
        };
      },
    },
  };