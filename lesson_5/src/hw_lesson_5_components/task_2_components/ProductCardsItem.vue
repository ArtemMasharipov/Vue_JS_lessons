<template>
	<div class="product-card">
		<a :href="cardsItemData.link" class="product-card-link" target="_blank">
			<div class="product-card-image">
				<img :src="cardsItemData.imgSrc" :alt="cardsItemData.imgAlt">
			</div>
			<div class="product-card-details">
				<div class="site-info">
					<div class="site-logo"></div>
					<p class="site-domain">{{ getSiteName(cardsItemData.link) }}</p>
					<p class="availability" v-if="cardsItemData.inStock">В наявності</p>
				</div>
				<p class="product-card-title">{{ cardsItemData.title }}</p>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: 'ProductCardsItem',
	props: {
		cardsItemData: {
			type: Object,
			default: () => ({})
		}
	},
	methods: {
		getSiteName(link) {
			const url = new URL(link);
			const domain = url.hostname.replace(/^(www\.)?/i, '').split('.')[0];
			return domain.charAt(0).toUpperCase() + domain.slice(1);
		},
	}
}
</script>

<style lang="css" scoped>
.product-card {
	display: flex;
	justify-content: center;
}

.product-card-link {
	text-decoration: none;
	background: #f5f5f5;
	border: 1px solid #ddd;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	width: 100%;
	max-width: 300px;
	margin: 10px;
}

.product-card-image img {
	border-radius: 5px;
	max-width: 100%;
	height: auto;
	margin-bottom: 10px;
}

.product-card-details {
	display: flex;
	flex-direction: column;
	align-self: start;
	font-size: 14px;
	font-weight: bold;
}

.site-info {
	display: flex;
	align-items: center;
	gap: 5px;
	margin-bottom: 5px;
}

.site-logo {
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background-color: rgb(220, 183, 20);
}

.site-domain {
	font-size: 14px;
	color: #0070c9;
	margin-top: 3px;
}

.availability {
	margin-top: 3px;
	align-self: flex-end;
	color: green;
}
</style>
