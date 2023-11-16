<template>
	<div v-if="productData" class="product-item">
		<div class="product-item-image">
			<img :src="productData.imgSrc" :alt="productData.alt">
		</div>
		<div class="product-item-details">
			<a :href="productData.link" class="product-item-title">{{ productData.model }}</a>
			<span class="product-item-current-price">{{ productData.price }}₴</span>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'ProductsListItem',
	props: {
		id: {
			type: [String, Number],
			required: true
		}
	},
	computed: {
		...mapGetters([
			'getProductById'
		]),
		productData() {
			return this.getProductById(this.id);
		}
	}
};
</script>

<style scoped>
.product-item {
	max-width: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 10px;

}

.product-item:hover {
	outline: 1px solid black;
	border-radius: 5px;
	background-color: rgba(128, 128, 128, 0.24);
}

.product-item-image {
	margin-bottom: 10px;
	text-align: center;
}

.product-item-image img {
	border-radius: 5px;
	max-width: 100%;
	height: auto;
	object-fit: cover;
}

.product-item-details {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.product-item-title {
	font-family: Arial, sans-serif;
	font-size: 14px;
	font-weight: bold;
	margin: 5px 0;
	color: #007BFF;
	text-decoration: none;
}

.product-item-title:hover {
	color: #0056b3;
	text-decoration: underline;
}

.product-item-current-price {
	font-size: 18px;
	color: #e040a3;
	font-weight: bold;
	margin-top: 5px;
}
</style>
