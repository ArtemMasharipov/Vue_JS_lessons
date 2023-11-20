<template>
	<div class="task-container ">
		<nav>
			<router-link to="/">Головна</router-link> |
			<router-link to="/shop" :class="shopLinkClasses">
				Магазин
			</router-link> |
			<router-link to="/payment">Правила оплати</router-link> |
			<router-link to="/contacts">Контакти</router-link>
		</nav>
		<router-view />
	</div>
</template>

<script>
export default {
	computed: {
		isShopRouteActive() {
			return this.$route.path === '/shop' || this.$route.path.startsWith('/shop/');
		},
		shopLinkClasses() {
			return {
				'active-link': this.isShopRouteActive,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active,
		&.active-link {
			color: #42b983;
		}
	}
}
</style>
