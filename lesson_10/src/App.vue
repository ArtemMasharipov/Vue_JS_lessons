<template>
	<div class="container">
		<div class="header">
			<h1>ДЗ. Урок №10. Практика</h1>
		</div>
		<contacts-manager />
	</div>
</template>
<script>
import ContactsManager from "@/components/ContactsManager.vue";


export default {
	components: {
		ContactsManager
	},
};
</script>
<style lang="scss">
@import url(./assets/reset.css);

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

body {
	font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	background-color: rgb(225, 229, 222);
}

.container {
	max-width: 40%;
	margin: 0 auto;
	margin-top: 80px;
}

.task-container {
	min-height: 100%;
	min-height: 250px;
	margin-bottom: 20px;
	padding: 30px;
	background-color: #f2f2f2;
	box-shadow: 2px 2px 5px #999;
	border-radius: 5px;
}

@media only screen and (max-width: 768px) {
	.container {
		max-width: 100%;
		flex-direction: column;
		align-items: center;
		margin-top: 130px;
		padding: 0 10px;
	}

	.task-container {
		width: 100%;
		margin: 10px 0;
		padding: 10px;
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
</style>
