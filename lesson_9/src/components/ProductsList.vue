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
	created() {
		this.fetchData(); 
	},
	mounted() {
		watch(() => this.$route.params.categoryKey, (newVal) => {
			this.fetchData(newVal); 
		});
	},
	methods: {
		...mapActions([
			'fetchCategoryData',
		]),
		fetchData() {
			const categoryKey = this.$route.params.categoryKey;
			if (categoryKey) {
				this.fetchCategoryData(categoryKey);
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
