<template>
	<div class="product-list">
		<products-list-item v-for="product in currentCategoryProducts" :id="product.id" :key="product.id" />
	</div>
</template>

<script>
import ProductsListItem from '@/hw_lesson-8_components/task_1/ProductsListItem.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'ProductsList',
	components: {
		ProductsListItem
	},
	computed: {
		...mapGetters([
			'currentCategoryProducts'
		])
	}
};
</script>
<style lang="css" scoped>
.product-list {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}
</style>