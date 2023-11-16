<template>
	<div class="task-container">
		<h3>
			<b>Задача 1.</b><br>
		</h3>
		<div class="categories-panel-container">
			<div v-for="category in getProductCategories" :key="category.id" class="category-container"
				@click="chooseCategory(category.id)">
				<img :src="category.imgSrc" :class="isCategoryChosen(category.id)" :alt="`Зображення ${category.title}`" />
				<span>{{ category.title }}</span>
			</div>
		</div>
		<products-list />
	</div>
</template>

<script>
import ProductsList from '@/hw_lesson-8_components/task_1/ProductsList.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'ProductsCategoryPanel',
	components:{
		ProductsList,
	},
	computed: {
		...mapGetters([
			'getProductCategories',
			'getCurrentCategoryId',
		]),

	},
	methods: {
		...mapActions([
			'chooseCategory'
		]),
		isCategoryChosen(categoryId) {
			return this.getCurrentCategoryId === categoryId ? 'chosen' : '';
		}
	}
};
</script>
<style lang="css" scoped>
.categories-panel-container {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 16px;
	border: 2px solid gray;
	border-radius: 5px;
	padding: 5px;
	margin-bottom: 10px;
}

.category-container {
	flex: 1 1 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	aspect-ratio: 1 / 1;
	pointer-events: none;
}

.category-container:hover {
	cursor: pointer;
}

.category-container img {
	max-width: 200px;
	max-height: 200px;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: contain;
	background-color: #fff;
	pointer-events: auto;
}

.chosen {
	outline: 2px solid red;
}

.category-container img:hover {
	cursor: pointer;
	transform: scale(0.95);
}

.category-container span {
	font-size: 16px;
	text-transform: uppercase;
	text-align: center;
	margin-top: 20px;
	pointer-events: auto;
}

.category-container span:hover {
	cursor: pointer;
}
</style>
