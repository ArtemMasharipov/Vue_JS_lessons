<template>
	<div v-if="product" class="product-item">
		<img :src="product.imgSrc" class="product-image" :alt="`Зображення ${product.model}`">
		<div class="product-details">
			<h2 class="product-title">{{ product.brand }}</h2>
			<h2 class="product-title"> {{ product.model }}</h2>
			<div class="product-price">{{ product.price }}$</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'ProductsListItem',
	props: {
		id: {
			type: String,
			required: true
		}
	},
	computed: {
		...mapGetters({
			categoryProducts: 'categoryProducts'
		}),
		product() {
			return this.categoryProducts.find(p => p.id === this.id);
		}
	}
};
</script>


<style scoped>
.product-item {
	display: flex;
	justify-content: space-evenly;
	width: 300px;
	height: 150px;
	border: 1px solid #ccc;
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	background-color: #fff;
}

.product-item:hover {
	transform: scale(1.03);
	transition: all .2s ease-in-out;

}

.product-image {
	margin: 5px;
	margin-right: 0;
	width: 40%;
	height: auto;
	object-fit: cover;
}

.product-details {
	display: flex;
	flex-direction: column;
	margin: 5px;
	padding: 10px 0 10px 10px;
	background-color: #fff;
	border-left: 1px solid gray;
}

.product-title {
	color: rgb(0, 128, 255);
	font-size: 18px;
	font-weight: bold;
	margin: 0 0 10px;
}

.product-price {
	font-size: 18px;
	font-weight: bold;
	color: green;
	margin: 0 0 10px;
}



</style>
