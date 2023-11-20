<template>
	<products-categories-panel />
	<router-view />
</template>

<script>
import ProductsCategoriesPanel from '@/components/ProductsCategoriesPanel.vue';

export default {
	name: 'ShopView',
	components: {
		ProductsCategoriesPanel,
	},

}
</script>