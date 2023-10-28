<template>
	<div class="container">
		<div class="header">
			<h1>ДЗ. Урок №5. Практика.</h1>
		</div>
		<product-cards-panel :cards-list-data="productCardsSources" />
		<notebook-cards-panel :notebook-cards-list-data="notebookCardsSources"/>
	</div>
</template>

<script>
import ProductCardsPanel from './hw_lesson_5_components/task_2_components/ProductCardsPanel.vue';
import { productCardsSources } from './constants/task_2_constants/product_card_data';

import NotebookCardsPanel from "./hw_lesson_5_components/task_3_components/NotebookCardsPanel.vue";
import { notebookCardsSources } from "./constants/task_3_constants/notebook_cards_data";
export default {
	name: "App",
	components: {
		ProductCardsPanel,
		NotebookCardsPanel
	},
	data() {
		return {
			productCardsSources,
			notebookCardsSources
		}
	},
};
</script>

<style>
@import url(./assets/reset.css);

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 80px;
}

.header {
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
	padding: 15px;
	background: rgb(2, 0, 36);
	background: linear-gradient(90deg,
			rgba(2, 0, 36, 1) 0%,
			rgb(167, 171, 168) 35%,
			rgb(204, 218, 221) 100%);
	opacity: 0.8;
	z-index: 10;
	text-align: center;
	text-transform: uppercase;
	font-size: 30px;
}
</style>
