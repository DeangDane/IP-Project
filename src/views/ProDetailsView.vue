<template>
    <div class="product-details-page">
        <!-- Breadcrumb -->
        <div class="breadcrumb">
            <a href="/">All Products</a> / <span>{{ productName }}</span>
        </div>

        <!-- Main Product Section -->
        <div class="product-main">
            <div class="product-image-section">
                <img :src="selectedImage" alt="Main Product" class="main-image" />
                <div class="thumbnail-list">
                    <img v-for="(image, index) in productImages" :key="index" :src="image" alt="Thumbnail"
                        class="thumbnail" :class="{ active: image === selectedImage }" @click="selectImage(image)" />
                </div>
            </div>
            <div class="product-info">
                <h1>{{ productName }}</h1>
                <div class="ratings-section">
                    <div class="stars">
                        <span v-for="star in 5" :key="star" class="star" :class="{ active: star <= reviewRating }"
                            @click="reviewRating = star">
                            ⭐
                        </span>
                        <span class="rating-number">{{ reviewRating }}/5</span>
                        <!-- <a href="#reviews" class="reviews-link">0 reviews</a>
                <a href="#submit-review" class="submit-review">Submit a review</a> -->
                        <a href="#Reviews" class="reviews-link">{{ reviews.length }} reviews</a>
                        <a href="#Reviews" class="submit-review" @click="openReviewModal">Submit a review</a>
                    </div>
                </div>

                <div class="price">
                    <span class="current-price">{{ currentPrice }}</span>
                    <span class="original-price">{{ originalPrice }}</span>
                    <span class="discount">{{ discountPercentage }}% Off</span>
                </div>
                <div class="availability">
                    <p><strong>Availability:</strong> {{ availability }}</p>
                    <p><strong>Category:</strong> {{ category }}</p>
                    <p><strong>Shipping:</strong> {{ shipping }}</p>
                </div>
                <div class="actions">
                    <input type="number" v-model.number="quantity" min="1" />
                    <button @click="addToCart"><i class="fa fa-shopping-cart"></i> Add To Cart</button>
                </div>
                <div class="share-buttons">
                    <button @click="shareOnFacebook" class="share-button">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" /> Share on Facebook
                    </button>
                    <button @click="shareOnTwitter" class="share-button">
                        <font-awesome-icon :icon="['fab', 'twitter']" /> Share on Twitter
                    </button>
                </div>
            </div>
        </div>

        <!-- Product Tabs -->
        <div class="product-tabs">
            <div class="tab" v-for="(tab, index) in tabs" :key="index" :class="{ active: selectedTab === index }"
                @click="selectTab(index)">
                {{ tab }} <span v-if="tab === 'Reviews'">({{ reviews.length }})</span>
            </div>
            <div class="tab-content">
                <!-- Product Information -->
                <div v-if="selectedTab === 0">
                    <p>{{ tabContents[selectedTab] }}</p>
                </div>
                <!-- Reviews Section -->
                <div v-else-if="selectedTab === 1">
                    <div class="reviews-section">
                        <div v-for="review in reviews" :key="review.id">
                            <Review :profileImage="profileImage" :userName="userName" :reviewDate="review.date"
                                :stars="review.rating" :reviewText="review.comment" :reviewImages="review.photos" />
                            <div class="review-actions">
                                <button @click="editReview(review.id)">Edit</button>
                                <button @click="deleteReview(review.id)">Delete</button>
                            </div>
                        </div>

                        <div class="write-review-container">

                            <button class="write-review-btn" @click="openReviewModal">
                                Write Review
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <!-- Related Products -->
        <div class="related-products">
            <h2>Related Products</h2>
            <div class="products-list">
                <div v-for="(product, index) in relatedProducts" :key="index" class="product-card"
                    @click="loadProductDetails(product)">
                    <img :src="product.image" alt="Related Product" />
                    <h3>{{ product.name }}</h3>
                    <div class="price">
                        <span class="current-price">{{ product.currentPrice }}</span>
                    </div>
                </div>

                <p>LOAD MORE</p>

            </div>
        </div>

        <!-- Write Review Modal -->
        <div v-if="isReviewModalOpen" class="review-modal-overlay" @click.self="closeReviewModal">
            <div class="review-modal">
                <h2>{{ isEditing ? "Update Your Review" : "Write Your Review" }}</h2>
                <div class="rating-input">
                    <label>Please rate your satisfaction:</label>
                    <div class="stars">
                        <span v-for="star in 5" :key="star" class="star" :class="{ active: star <= reviewRating }"
                            @click="reviewRating = star">
                            ⭐
                        </span>
                        <span class="rating-number">{{ reviewRating }}/5</span>
                    </div>
                </div>
                <textarea v-model="reviewComment" placeholder="Write your review here..."></textarea>
                <div class="photo-upload">
                    <label>Add Photos:</label>
                    <input type="file" multiple @change="handlePhotoUpload" />
                    <div class="photo-previews">
                        <img v-for="(photo, index) in reviewPhotos" :src="photo" :key="index" alt="Uploaded Photo" />
                    </div>
                </div>
                <button @click="submitReview">{{ isEditing ? "Update" : "Submit" }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useReviewsStore } from "@/store/Reviews";
import { useUserProfileStore } from "@/store/UserStore";
import Review from "@/components/Review.vue";
import product1 from "@/assets/images/product1.png";
import product2 from "@/assets/images/product2.png";
import product3 from "@/assets/images/product3.png";
import product4 from "@/assets/images/product4.png";
import related1 from "@/assets/images/related1.png";
import related2 from "@/assets/images/related2.png";
import related3 from "@/assets/images/related3.png";
export default {
    name: "ProDetailsView",
    components: {
        Review,
    },
    data() {
        return {
            // Default product details
            productImages: [product1, product2, product3, product4],
            selectedImage: product1,
            tabs: ["Product Information", "Reviews"],
            selectedTab: 0,
            tabContents: ["Details about this product.", ""],

            relatedProducts: [
                {
                    name: "Heartleaf Quercetinol",
                    image: related1,
                    currentPrice: "$20.43",
                    details: {
                        images: [related1],
                    },
                },
                {
                    name: "ANUA Heartleaf Query",
                    image: related2,
                    currentPrice: "$19.99",
                    details: {
                        images: [related2],
                    },
                },
                {
                    name: "Deep Cleansing Foam",
                    image: related3,
                    currentPrice: "$29.43",
                    details: {
                        images: [related3],
                    },
                },
                {
                    name: "Heartleaf Quercetinol",
                    image: related1,
                    currentPrice: "$20.43",
                    details: {
                        images: [related1],
                    },
                },
            ],
            productId: 1,
            productName: "Red Bean Refreshing Pore Mask",
            currentPrice: "$17.75",
            originalPrice: "$23.33",
            discountPercentage: 24,
            availability: "In Stock",
            category: "Accessories",
            shipping: "Free Shipping",
            quantity: 1,
            isReviewModalOpen: false,
            reviewRating: 0,
            reviewComment: "",
            reviewPhotos: [],
            userProfile: {
                name: "null",
                profileImage: "null",
            },
            editingReviewId: null,
            isEditing: false,

        };
    },
    computed: {
        // currentUser() {
        //   const userProfileStore = useUserProfileStore();
        //   return userProfileStore.currentUser;
        // },

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
        profileImage() {
            const userProfileStore = useUserProfileStore();
            return userProfileStore.currentUserProfileImage;
        },

        reviews() {
            const reviewsStore = useReviewsStore();
            return reviewsStore.reviews;
        },
        otherUserReviews() {
            return this.reviews.filter(review => review.userName !== this.userName);
        }
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
        },
        selectTab(index) {
            this.selectedTab = index;
        },
        addToCart() {
            const product = {
                name: this.productName,
                price: this.currentPrice,
                image: this.selectedImage,
                quantity: this.quantity,
            };
            alert(`Added ${this.quantity} item(s) of ${this.productName} to your cart.`);
        },
        loadProductDetails(product) {
            this.productName = product.name;
            this.productImages = product.details.images;
            this.selectedImage = product.details.images[0];
            this.reviews = product.details.reviews;
            this.currentPrice = product.currentPrice;
            this.tabContents[0] = `Details about ${product.name}.`;
            this.selectedTab = 0;
        },
        shareOnFacebook() {
            const url = encodeURIComponent(window.location.href);
            const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            window.open(shareUrl, "_blank");
        },
        shareOnTwitter() {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(`Check out this product: ${this.productName}`);
            const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
            window.open(shareUrl, "_blank");
        },
        openReviewModal() {
            this.isReviewModalOpen = true;
            this.isEditing = false;
            this.reviewRating = 0;
            this.reviewComment = "";
            this.reviewPhotos = [];
        },
        closeReviewModal() {
            this.isReviewModalOpen = false;
        },
        methods: {
            selectImage(image) {
                this.selectedImage = image;
            },
            selectTab(index) {
                this.selectedTab = index;
            },
            addToCart() {
                const product = {
                    name: this.productName,
                    price: this.currentPrice,
                    image: this.selectedImage,
                    quantity: this.quantity,
                };
                alert(`Added ${this.quantity} item(s) of ${this.productName} to your cart.`);
            },
            loadProductDetails(product) {
                // Update all product details dynamically
                this.productName = product.name;
                this.productImages = product.details.images;
                this.selectedImage = product.details.images[0];
                this.reviews = product.details.reviews;
                this.currentPrice = product.currentPrice;
                this.tabContents[0] = `Details about ${product.name}.`;
                this.selectedTab = 0; // Reset to the first tab
            },
            shareOnFacebook() {
                const url = encodeURIComponent(window.location.href);
                const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                window.open(shareUrl, "_blank");
            },
            shareOnTwitter() {
                const url = encodeURIComponent(window.location.href);
                const text = encodeURIComponent(`Check out this product: ${this.productName}`);
                const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
                window.open(shareUrl, "_blank");
            },
            openReviewModal() {
                this.isReviewModalOpen = true;
                this.isEditing = false;
                this.reviewRating = 0;
                this.reviewComment = "";
                this.reviewPhotos = [];
            },
            closeReviewModal() {
                this.isReviewModalOpen = false;
            },
            handlePhotoUpload(event) {
                const files = event.target.files;
                Array.from(files).forEach((file) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.reviewPhotos.push(e.target.result);
                    };
                    reader.readAsDataURL(file);
                });
            },
            submitReview() {
                const reviewsStore = useReviewsStore();
                const newReview = {
                    profileImage: this.userProfile.profileImage,
                    userName: this.userProfile.name,
                    rating: this.reviewRating,
                    comment: this.reviewComment,
                    date: new Date().toISOString().split("T")[0],
                    photos: this.reviewPhotos,
                };
                if (this.isEditing) {
                    reviewsStore.updateReview(this.editingReviewId, newReview);
                } else {
                    // reviewsStore.addReview({
                    //   userAvatar: this.userProfile.profileImage,
                    //   userName: this.userProfile.name,
                    //   date: new Date().toLocaleDateString(),
                    //   rating: this.reviewRating,
                    //   comment: this.reviewComment,
                    //   photos: this.reviewPhotos,
                    // });      
                    reviewsStore.addReview(
                        this.productId, // Ensure productId is defined in your component
                        this.reviewComment,
                        this.reviewRating,
                        this.reviewPhotos
                    );
                }
                this.closeReviewModal();
            },
            editReview(reviewId) {
                const reviewsStore = useReviewsStore();
                const review = reviewsStore.reviews.find((review) => review.id === reviewId);
                this.reviewRating = review.rating;
                this.reviewComment = review.comment;
                this.reviewPhotos = review.photos;
                this.editingReviewId = reviewId;
                this.isEditing = true;
                this.openReviewModal();
            },
            deleteReview(reviewId) {
                const reviewsStore = useReviewsStore();
                reviewsStore.deleteReview(reviewId);
            },
        },
        submitReview() {
            const reviewsStore = useReviewsStore();
            const newReview = {
                profileImage: this.userProfile.profileImage,
                userName: this.userProfile.name,
                rating: this.reviewRating,
                comment: this.reviewComment,
                date: new Date().toISOString().split("T")[0],
                photos: this.reviewPhotos,
            };
            if (this.isEditing) {
                reviewsStore.updateReview(this.editingReviewId, newReview);
            } else {

                reviewsStore.addReview(
                    this.productId,
                    this.reviewComment,
                    this.reviewRating,
                    this.reviewPhotos
                );
            }
            this.closeReviewModal();
        },
    }
};
</script>


<style scoped>
.product-details-page {
    font-family: Arial, sans-serif;
    padding: 20px;
    width: 1400px;
    margin: auto;
    color: #333;
}

/* Breadcrumb */
.breadcrumb {
    font-size: 14px;
    margin-bottom: 20px;
}

.breadcrumb a {
    color: #007bff;
    text-decoration: none;
    margin-right: 5px;
}

.breadcrumb span {
    color: gray;
}

/* Main Product Section */
.product-main {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
}

.product-image-section {
    flex: 1;
}

.main-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border: 1px solid #ddd;
    border-radius: 10px;
}

.thumbnail-list {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.thumbnail {
    width: 60px;
    height: 60px;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 5px;
    transition: border-color 0.3s;
}

.thumbnail:hover {
    border-color: #007bff;
}

.product-info {
    flex: 2;
}

.product-info h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.ratings-section {
    font-size: 14px;
    margin-bottom: 10px;
}

.ratings-section .stars {
    color: #f39c12;
}

.ratings-section .reviews-link,
.ratings-section .submit-review {
    margin-left: 10px;
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
}

.ratings-section .reviews-link:hover,
.ratings-section .submit-review:hover {
    text-decoration: underline;
}

.price {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.price .current-price {
    font-size: 20px;
    font-weight: bold;
    color: #ff6b6b;
}

.price .original-price {
    font-size: 16px;
    text-decoration: line-through;
    color: #aaa;
}

.price .discount {
    font-size: 14px;
    color: #28a745;
    font-weight: bold;
}

.availability p {
    margin-bottom: 5px;
}

.actions {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
}

.actions input {
    width: 60px;
    text-align: center;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.actions button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.actions button:hover {
    background-color: #0056b3;
}

.share-buttons {
    margin-top: 20px;
}

.share-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
}


.share-button:hover {
    background-color: #0056b3;
}

/* Product Tabs */
.product-tabs {
    margin-top: 40px;
    border-top: 1px solid #ddd;
}

.tab {
    cursor: pointer;
    padding: 10px 20px;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s, color 0.3s;
}

.tab.active {
    border-bottom: 2px solid #007bff;
    color: #007bff;
}

.tab-content {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.6;
}

.reviews-section .review {
    border-bottom: 1px solid #ddd;
    padding: 15px 0;
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.review-comment {
    margin-top: 10px;
    font-size: 14px;
}

.review-actions {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.review-actions button {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.review-actions button:hover {
    background-color: #0056b3;
}

.review-actions button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.write-review-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.write-review-btn {
    background-color: rgb(234, 129, 147);
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 5px;
}

.write-review-btn:hover {
    background-color: #e04e4e;

}

/* Related Products */
.related-products {
    margin-top: 60px;
}

.related-products h2 {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 26px;
    text-align: center;
}

.related-products .products-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.related-products p {
    text-decoration: underline;
    color: #007bff;
    margin: 0 auto;
    font-weight: 500;
}

.product-card {
    flex: 1 1 calc(25% - 20px);
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card img {
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    border-radius: 10px;
}

.product-card h3 {
    font-size: 16px;
    margin: 10px 0;
    color: #333;
}

.product-card .price .current-price {
    font-size: 16px;
    color: #ff6b6b;
    font-weight: bold;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.load-more {
    display: block;
    margin: 20px auto;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    cursor: pointer;
}

.load-more:hover {
    background-color: #0056b3;
}

/* Styling the modal, review, and layout */
.review-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.review-modal {
    background: white;
    width: 40%;
    max-width: 500px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
    text-align: left;
    position: relative;
}

.review-modal h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}

.review-modal .rating-input label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
}

.review-modal .stars {
    display: flex;
    gap: 8px;
    margin-top: 10px;
}

.review-modal .star {
    /* font-size: 28px; */
    font-size: 1.5em;
    color: #ccc;
    cursor: pointer;
    transition: color 0.2s ease;
}

.review-modal .star.active {
    color: gold;
}

.review-modal textarea {
    width: 100%;
    min-height: 80px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    font-size: 14px;
    margin: 15px 0;
    resize: none;
}

.review-modal .photo-upload label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
}

.review-modal .photo-previews {
    display: flex;
    gap: 8px;
    margin-top: 10px;
}

.review-modal .photo-previews img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #ddd;
}

.review-modal button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
}

.review-modal button:hover {
    background-color: #e04e4e;
}

.review-modal-overlay .close-modal {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
    color: #aaa;
}

.review-modal-overlay .close-modal:hover {
    color: #333;
}
</style>