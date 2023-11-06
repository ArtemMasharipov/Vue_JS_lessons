<template>
	<div class="container">
		<div class="header">
			<h1>Урок №6. v-model для компонентів. Практика.</h1>
		</div>
		<!-- -----------------------Task-1----------------------- -->
		<user-age-input v-model.check.setColor="userAgeValue" title="Введіть вік користувача:" />
		<!-- -----------------------Task-2----------------------- -->
		<js-path-input v-model.checkPath="jsPathValue" title="Введіть шлях до файлу:" />
		<!-- -----------------------Task-3----------------------- -->
		<edu-email-input v-model.check="eduEmailValue" title="Введіть e-mail:" />
		<!-- -----------------------Task-4----------------------- -->
		<format-name-age-input v-model:userName.nameInputColor="userName" v-model:userAge.ageInputColor="userAge"
			user-name-title="Введіть ім'я користувача:" user-age-title="Введіть вік користувача:" />
		<!-- -----------------------Task-5----------------------- -->
		<product-cards-manager :notebook-cards-list-data="notebookCardsSources" />
		<!-- -----------------------Task-6----------------------- -->
		<credit-card-data-input v-model:cardNumber.separate4Digits.digitsOnly="cardNum" v-model:cardVV.digitsOnly="cardVerifVal" />
	</div>
</template>

<script>
import UserAgeInput from "@/hw_lesson_6_components/task_1/UserAgeInput.vue";
import JsPathInput from "@/hw_lesson_6_components/task_2/JsPathInput.vue";
import EduEmailInput from "@/hw_lesson_6_components/task_3/EduEmailInput.vue";
import FormatNameAgeInput from "@/hw_lesson_6_components/task_4/FormatNameAgeInput.vue";
import ProductCardsManager from './hw_lesson_6_components/task_5/ProductCardsManager.vue';
import { notebookCardsSources } from './hw_lesson_6_components/task_5/task_5_constants/notebook_cards_data.js';
import CreditCardDataInput from "@/hw_lesson_6_components/task_6/CreditCardDataInput.vue";

export default {
	name: "App",
	components: {
		UserAgeInput,
		JsPathInput,
		EduEmailInput,
		FormatNameAgeInput,
		ProductCardsManager,
		CreditCardDataInput
	},
	data() {
		return {
			notebookCardsSources,
			userAgeValue: null,
			jsPathValue: null,
			eduEmailValue: null,
			userName: null,
			userAge: null,
			cardNum: null,
			cardExpDate: null,
			cardVerifVal: null,
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
}

body {
	font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	background-color: rgb(225, 229, 222);
}

.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	max-width: 90%;
	margin: 0 auto;
	margin-top: 100px;
}

.task-container {
	min-height: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-basis: 48%;
	min-height: 250px;
	margin-bottom: 20px;
	padding: 10px;
	background-color: #f2f2f2;
	box-shadow: 2px 2px 5px #999;
	border-radius: 5px;
}

.task-container:last-child {
	max-height: 400px;
}

@media only screen and (max-width: 768px) {
	.container {
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
