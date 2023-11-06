<template>
	<div class="notebook-card">
		<div class="notebook-card-image">
			<img :src="notebookCardsItemData.imgSrc" :alt="notebookCardsItemData.imgAlt">
		</div>
		<div class="notebook-card-details">
			<a :href="notebookCardsItemData.link" class="notebook-card-title">{{ notebookCardsItemData.title }}</a>
			<span class="notebook-card-current-price">{{ notebookCardsItemData.currentPrice }}₴</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductCardsItem',
	props: {
		notebookCardsItemData: {
			type: Object,
			default: () => ({})
		},
	},
}
</script>

<style lang="css" scoped>
.notebook-card {
	display: flex;
	flex-direction: column;
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 10px;
}
.notebook-card:hover {
	outline: 3px solid green;
	border-radius: 5px;
	background-color: rgba(128, 128, 128, 0.24);
}

.notebook-card-image {
	margin-bottom: 10px;
	text-align: center;
}

.notebook-card-image img {
	max-width: 100%;
	height: auto;
	object-fit: cover;
}

.notebook-card-details {
display: flex;
flex-direction: column;
justify-content: space-between;
}

.notebook-card-title {
	font-family: Arial, sans-serif;
	font-size: 16px;
	font-weight: bold;
	margin: 5px 0;
	color: #007BFF;
	text-decoration: none;
}

.notebook-card-title:hover {
	color: #0056b3;
	text-decoration: underline;
}

.notebook-card-current-price {
	font-size: 18px;
	color: #dc3545;
	font-weight: bold;
	margin-top: 5px;
}</style>
