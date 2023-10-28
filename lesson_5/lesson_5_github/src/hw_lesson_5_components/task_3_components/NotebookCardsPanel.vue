<template>
	<h2>Задача 3</h2>
	<div class="notebook-cards-panel-container">
		<notebook-cards-item v-for="card in notebookCardsListData" :key="card.id" :notebook-cards-item-data="card"/>
	</div>
</template>

<script>
import NotebookCardsItem from './NotebookCardsItem.vue';
export default {
	name: 'NotebookCardsPanel',
	components: {
		NotebookCardsItem,
	},
	props: {
		notebookCardsListData: {
			type: Array,
			default: () => [],
		},
	},

}
</script>

<style lang="css" scoped>
h2 {
	margin-top: 100px;
	text-align: center;
	font-weight: bold;
	font-size: 20px;
}

.notebook-cards-panel-container {
	border-radius: 5px;
	margin: 10px;
	margin-left: 15%;
	margin-right: 15%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	border: 2px solid black;
}
</style>