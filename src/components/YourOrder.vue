<template>
    <div v-if="!isDeleted" class="d-flex align-items-center p-3 border rounded mb-2 product-card" id="box">
        <!-- Heart Icon -->
        <div class="heart-container me-3">
            <button
                @click="toggleFavorite"
                class="btn btn-light btn-sm heart-button"
                id="btn-favorite"
            >
                <i class="fa fa-heart" :class="{ 'text-danger': isFavorite }"></i>
            </button>
        </div>

        <!-- Product Image and Title Group -->
        <div class="product-info d-flex align-items-center">
            <div class="image-container me-3">
                <img
                    :src="image"
                    alt="Product"
                    class="product-image"
                />
            </div>
            <h5 class="product-title mb-0">{{ title }}</h5>
        </div>

        <!-- Centered Price -->
        <div class="price-container">
            <span class="price">${{ price.toFixed(2) }}</span>
        </div>

        <!-- Action Buttons -->
        <div class="button-container">
            <button
                @click="addToCart"
                class="btn btn-sm me-2 add-button"
                id="btn-add"
            >
                Add to Cart
            </button>
            <button 
                @click="removeItem" 
                class="btn btn-danger btn-sm remove-button"
            >
                Remove
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "YourOrdered",
    props: {
        title: String,
        price: Number,
        image: String,
    },
    data() {
        return {
            isFavorite: true,
            isDeleted: false,
        };
    },
    methods: {
        toggleFavorite() {
            this.isFavorite = !this.isFavorite;
            this.$emit("toggle-favorite", this.isFavorite);
        },
        addToCart() {
            this.$emit("add-to-cart", {
                title: this.title,
                price: this.price,
            });
        },
        removeItem() {
            if (this.isDeleted) {
                this.$emit("delete-item");
            } else {
                this.isDeleted = !this.isDeleted;
            }
        },
    },
};
</script>

<style scoped>
#box {
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    min-height: 80px;
    position: relative;
    transition: all 0.3s ease;
}

#box:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.heart-container {
    width: 40px;
}

.product-info {
    width: 350px;
}

.image-container {
    overflow: hidden;
    border-radius: 4px;
}

.product-image {
    width: 60px;
    height: 80px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.image-container:hover .product-image {
    transform: scale(1.1);
}

.product-title {
    font-size: 16px;
    color: #333;
    white-space: nowrap;
}

.price-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.price {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    padding: 0 40px;
    transition: transform 0.2s ease;
}

.price:hover {
    transform: scale(1.1);
}

.button-container {
    display: flex;
    align-items: center;
}

#btn-favorite {
    background: transparent;
    border: none;
    padding: 8px;
    transition: transform 0.3s ease;
}

#btn-favorite:hover {
    transform: scale(1.2);
}

#btn-favorite i {
    transition: all 0.3s ease;
}

#btn-favorite:hover i {
    color: red;
}

.add-button {
    background-color: #87CEEB;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.add-button:hover {
    background-color: #5FB5E5;
    transform: translateY(-2px);
}

.add-button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.3s ease;
}

.add-button:active::after {
    transform: translate(-50%, -50%) scale(2);
    opacity: 1;
}

.remove-button {
    background-color: #dc3545;
    color: white;
    border-radius: 4px;
    padding: 6px 12px;
    transition: all 0.3s ease;
}

.remove-button:hover {
    background-color: #c82333;
    transform: translateY(-2px);
}

/* Animation for deletion */
.product-card {
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Add a pulse animation for the heart when toggled */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

.text-danger {
    animation: pulse 0.3s ease;
}
</style>