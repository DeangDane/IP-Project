<template>

    <div class="allPro">
        <div class="pic">Pic</div>
        <div class="container">

            <div class="filter">
                Filter By
            </div>

            <div class="wrapper">
                
                <div class="sortby">Sort By</div>
                <div class="content">
                    <GridProduct v-for="gridPro in gridproducts" :image="gridPro.image" :color="gridPro.color"
                        :label="gridPro.label" :proName="gridPro.proName" :price="gridPro.price" />
                </div>

                <!-- <div class="content">
                    <ListProduct v-for="listPro in listproducts" :image="listPro.image" :color="listPro.color"
                        :label="listPro.label" :proName="listPro.proName" :price="listPro.price" />
                </div> -->
            </div>

        </div>
    </div>



</template>

<style scoped>

.pic{
    width: 100%;
    background-color: aqua;
}

.container{
    display: flex;
    /* background-color: aquamarine; */
    gap: 20px;
}

.filter{

}

.wrapper{
    display: flex;
    flex-direction: column;
}
.content {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}
</style>

<script>

import GridProduct from '@/components/GridProduct.vue';
import ListProduct from '@/components/ListProduct.vue';

export default {
    components: {
        GridProduct,
        ListProduct,
    },

    data() {
        return {

            gridproducts: [
                { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
                { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
                { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
                // { image:"images/Product1.png", proName:"Cleansing foam", color:"#FF4858", label:"HOT", price:19 },

            ],

            listproducts: [
                { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },
                { image: "images/Product1.png", proName: "Cleansing foam", color: "#FF4858", label: "HOT", price: 19 },

            ]

        }
    }
};
</script>


