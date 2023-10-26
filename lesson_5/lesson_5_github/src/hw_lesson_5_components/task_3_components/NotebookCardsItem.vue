<template>
	<div class="notebook-card">
		<div class="notebook-card-image">
			<img :src="notebookCardsItemData.imgSrc" :alt="notebookCardsItemData.imgAlt">
		</div>
		<div class="notebook-card-details">
			<a :href="notebookCardsItemData.link" class="notebook-card-title">{{ notebookCardsItemData.title }}</a>
			<div v-if="notebookCardsItemData.inStock" class="notebook-card-prices">
				<span>Ваша економія:<span class="notebook-card-discount">{{ getDiscount }}₴</span></span>
				<span class="notebook-card-previous-price">{{ notebookCardsItemData.previousPrice }}₴</span>
				<span class="notebook-card-current-price">{{ notebookCardsItemData.currentPrice }}₴</span>
				<button type="button" class="notebook-card-buy-button">Купити</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NotebookCardsItem',
	props: {
		notebookCardsItemData: {
			type: Object,
			default: () => ({})
		},
	},
	computed: {
		getDiscount() {
			return this.notebookCardsItemData.previousPrice - this.notebookCardsItemData.currentPrice;
		}
	},
}
</script>

<style lang="css" scoped>
.notebook-card {
	display: flex;
	max-width: 460px;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 10px;
	margin: 10px;
}

.notebook-card-image img {
	width: 150px;
	height: auto;
}

.notebook-card-details {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 10px;
}

.notebook-card-title {
	font-family: Arial, sans-serif;
	font-size: 18px;
	font-weight: bold;
	margin: 5px;
	color: skyblue;
}

.notebook-card-title:hover {
	color: rgb(18, 21, 219);
}

.notebook-card-prices {
	display: flex;
	flex-direction: column;
	margin: 5px;
}

.notebook-card-discount {
	font-size: 14px;
	color: rgb(253, 38, 138);
	margin-bottom: 5px;
	margin-left: 5px;
}

.notebook-card-previous-price {
	font-size: 14px;
	color: gray;
	margin-bottom: 5px;
	margin-top: 15px;
	text-decoration: line-through;
}

.notebook-card-current-price {
	max-width: 100px;
	font-size: 24px;
	color: rgb(253, 38, 138);
	background-color: #eee;
	padding: 5px;
	border-radius: 5px;
	text-align: center;
}

.notebook-card-buy-button {
	border-radius: 5px;
	align-self: flex-end;
	max-width: 100px;
	background-color: green;
	color: white;
	padding: 5px 10px;
	margin: 5px 0;
}
</style>
