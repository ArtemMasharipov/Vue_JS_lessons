<template>
	<div class="product-list">
		<products-list-item v-for="product in categoryProducts" :key="product.id" :id="product.id" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductsListItem from '@/components/ProductsListItem.vue';
import { watch } from 'vue';

export default {
	components: {
		ProductsListItem,
	},
	computed: {
		...mapGetters([
			'categoryProducts',
		]),
	},
	mounted() {
		watch(() => this.$route.params.categoryId, (newVal) => {
			this.fetchData(newVal);
		});
	},
	methods: {
		...mapActions([
			'fetchCategoryData',
		]),
		fetchData(categoryId) {
			if (categoryId) {
				this.fetchCategoryData(categoryId);
			}
		},
	}
};
</script>
<style lang="css">
.product-list {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
}
</style>
