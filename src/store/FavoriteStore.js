import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
    state: () => ({
        favorite: []
    }),
    actions: {
        addItemToFavorite(productid) {
            if (!this.favorite.items.find(item => item.productid === productid)) {
                this.favorite.items.push({ productid });
            }
        },
        removeItemFromFavorite(productid) {
            this.favorite.items = this.favorite.items.filter(item => item.productid !== productid);
        },
        clearFavorite() {
            this.favorite.items = [];
        }
    }
});

// in this store, make it to store items that is clicked by the favorite button, each element has 
// id, userid, items array which has productid