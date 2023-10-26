<template>
	<h2>Задача 2</h2>
	<div class="cards-panel-container">
		<product-cards-item v-for="card in cardsListData" :key="card.id" :cards-item-data="card" />
	</div>
</template>

<script>
import ProductCardsItem from './ProductCardsItem.vue';
export default {
	name: 'ProductCardsPanel',
	components: {
		ProductCardsItem,
	},
	props: {
		cardsListData: {
			type: Array,
			default: () => [],
		},
	},

}
</script>

<style lang="css" scoped>
h2{
	text-align: center;
	font-weight: bold;
	font-size: 20px;
}
.cards-panel-container {
	border-radius: 5px;
	margin: 10px;
	margin-left: 15%;
	margin-right: 15%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	border: 2px solid black;
	background: #000000ae;
}
</style>