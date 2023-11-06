<template>
	<div class="product-cards-filters">
		<div :class="['filter', shopsFilterBorder]">
			<div class="filter-item">
				<label>Продавець:</label>
				<div v-for="(shop, index) in uniqueShops" :key="shop" class="checkbox-container">
					<input v-model="selectedShops" :id="'shop-' + index" type="checkbox"  :value="shop" />
					<label :for="'shop-' + index">{{ shop }}</label>
				</div>
			</div>
		</div>
		<div :class="['filter', brandsFilterBorder]">
			<div class="filter-item">
				<label>Бренд:</label>
				<div v-for="(brand, index) in sortedUniqueBrands" :key="brand" class="checkbox-container">
					<input v-model="selectedBrands" :id="'brand-' + index" type="checkbox" :value="brand" />
					<label :for="'brand-' + index">{{ brand }}</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProductCardsFilter",
	props: {
		cardsData: {
			type: Array,
			required: true,
		},
		shops: {
			type: Array,
			required: true,
		},
		shopsModifiers: {
			default: () => ({}),
		},
		brands: {
			type: Array,
			required: true,
		},
		brandsModifiers: {
			default: () => ({}),
		},
	},
	emits: ['update:shops', 'update:brands'],
	data() {
		return {
			selectedShops: [],
			selectedBrands: [],
		};
	},
	computed: {
		uniqueShops() {
			return [...new Set(this.cardsData.map(card => card.shop))];
		},
		sortedUniqueBrands() {
			const brands = this.cardsData.map(card => card.title.split(" ")[0]);
			const uniqueBrands = [...new Set(brands)];
			return uniqueBrands.sort((a, b) => a.localeCompare(b, 'en-US'));
		},
		shopsFilterBorder() {
			if (this.shopsModifiers.check && this.selectedShops.length === 0) {
				return 'green-border';
			}
			return '';
		},
		brandsFilterBorder() {
			if (this.brandsModifiers.check && this.selectedBrands.length === 0) {
				return 'green-border';
			}
			return '';
		},
	},
	watch: {
		selectedShops(newVal) {
			this.$emit('update:shops', newVal);
		},
		selectedBrands(newVal) {
			this.$emit('update:brands', newVal);
		},
	}
};
</script>


<style scoped>
.green-border {
	outline: 3px solid green;
	border-radius: 5px;
}

.product-cards-filters {
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
}

.filter {
	margin: 10px;
}
.filter-item {
	margin: 10px;
}

.filter-item>label {
	color: blue;
}

.checkbox-container {
	display: flex;
	align-items: center;
}

.checkbox-container label {
	margin-left: 8px;
}
.checkbox-container label:hover {
	text-decoration: underline;
}

.checkbox-container:not(.check) {
	border-color: green;
}
</style>

