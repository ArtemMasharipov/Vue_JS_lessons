<template>
	<div class="container">
		<div class="header">
			<h1>ДЗ.Урок №8. Практика.</h1>
		</div>
		<!---------------------------------------Task_1--------------------------------------->
		<products-category-panel />
		<!---------------------------------------Task_2--------------------------------------->
		<vehicles-panel />
	</div>
</template>

<script>
import ProductsCategoryPanel from '@/hw_lesson-8_components/task_1/ProductsCategoryPanel.vue';

import VehiclesPanel from '@/hw_lesson-8_components/task_2/VehiclesPanel.vue';

export default {
	name: "App",
	components: {
		ProductsCategoryPanel,
		VehiclesPanel,
	},
};
</script>

<style>
@import url(./assets/reset.css);

body {
	font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	background-color: rgb(225, 229, 222);
}

.container {
	max-width: 80%;
	margin: 0 auto;
	margin-top: 100px;
}

.task-container {
	min-height: 100%;
	min-height: 250px;
	margin-bottom: 20px;
	padding: 10px;
	background-color: #f2f2f2;
	box-shadow: 2px 2px 5px #999;
	border-radius: 5px;
}

@media only screen and (max-width: 768px) {
	.container {
		display: flex;
		max-width: 100%;
		flex-direction: column;
		align-items: center;
		margin-top: 150px;
		padding: 0 20px;
	}

	.task-container {
		width: 100%;
		margin: 10px 0;
		padding: 20px 10px;
	}
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

h3 {
	border: 2px solid;
	border-radius: 5px;
	padding: 5px;
	background: rgba(128, 128, 128, 0.342);
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 25px;
}

button {
	background: rgb(165, 236, 165);
	max-width: 110px;
	padding: 10px;
	border: 1px solid black;
	border-radius: 10px;
	transition: all 0.1s;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
}

button:active {
	transform: scale(0.95);
	box-shadow: none;
	background: rgb(96, 163, 96);
}

input {
	border-radius: 5px;
	min-height: 30px;
	max-width: 230px;
	padding: 5px;
	border: 2px solid black;
}
</style>
