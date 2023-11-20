<template>
	<div class="products-categories-panel">
		<div class="category-item">
			<div v-for="category in allCategories" :key="category.id">
				<router-link :to="getCategoryRoute(category.key)">
					{{ category.title }}
				</router-link>
			</div>
		</div>

	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'ProductsCategoriesPanel',
	computed: {
		...mapGetters(['allCategories']),
	},
	created() {
		this.clearCategory();
	},
	methods: {
		...mapActions(['clearCategory']),
		getCategoryRoute(categoryKey) {
			return { name: 'products', params: { categoryKey } };
		},
	},
};
</script>
<style lang="css" scoped>
.products-categories-panel {
	max-width: 600px;
	margin: auto;
	text-align: center;
	margin-bottom: 20px;
}

.category-item {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 30px;
}

.category-item a {
	padding: 10px 15px;
	border: 1px solid #ddd;
	border-radius: 4px;
	text-decoration: none;
	color: #333;
	font-size: 16px;
	transition: color 0.3s, background-color 0.3s, border-color 0.3s;
}

.category-item a:hover {
	border-color: #0e9053;
}

.router-link-active {
	background-color: #0e9053b2;
	color: #fff;
	border-color: #0e9053;
}

@media only screen and (max-width: 768px) {
.category-item {
	display: flex;
	flex-direction: column;
}
}
</style>