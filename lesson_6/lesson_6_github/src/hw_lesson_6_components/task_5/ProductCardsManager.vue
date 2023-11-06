<template>
	<div class="task-container">
		<h3>
			<b>Задача 5.</b><br> Спробуйте відтворити фрагмент. Компонент ProductCardsFilter через v-model повертає 2 значення
			фільтра: продавець, бренд. При заданні модифікатора “check” відображати секцію зеленою рамкою, якщо фільтр з
			відповідної секції (продавець чи бренд) не обрано.
		</h3>
		<div class="product-cards-container">
			<div class="filter-column">
				<ProductCardsFilter :cards-data="notebookCardsListData" v-model:shops.check="filters.shops"
					v-model:brands.check="filters.brands" />
			</div>
			<div class="cards-column">
				<div class="product-cards">
					<ProductCardsItem v-for="card in filteredNotebookCards" :key="card.id" :notebook-cards-item-data="card" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProductCardsItem from './ProductCardsItem.vue';
import ProductCardsFilter from './ProductCardsFilter.vue';

export default {
	name: 'ProductCardsManager',
	components: {
		ProductCardsItem,
		ProductCardsFilter
	},
	props: {
		notebookCardsListData: Array
	},
	data() {
		return {
			filters: {
				shops: [],
				brands: []
			}
		};
	},
	computed: {
		isShopFilterActive() {
			return this.filters.shops.length > 0;
		},
		isBrandFilterActive() {
			return this.filters.brands.length > 0;
		},
		filteredNotebookCards() {
			return this.notebookCardsListData.filter(card => this.isCardIncluded(card));
		}
	},
	methods: {
		isCardIncluded(card) {
			const cardBrand = card.title.split(' ')[0];
			return this.matchesShopFilter(card) && this.matchesBrandFilter(cardBrand);
		},
		matchesShopFilter(card) {
			return !this.isShopFilterActive || this.filters.shops.includes(card.shop);
		},
		matchesBrandFilter(cardBrand) {
			return !this.isBrandFilterActive || this.filters.brands.includes(cardBrand);
		}
	}
};
</script>

<style scoped>
.product-cards-container {
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 20px;
}

.cards-column {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
}

.product-cards {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 10px;
}
</style>
