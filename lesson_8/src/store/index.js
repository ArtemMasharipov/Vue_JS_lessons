import { createStore } from "vuex";
import { categoriesList } from "@/hw_lesson-8_components/task_1/data/categories_list.js"
import { vehiclesDatabase, brands, models, bodyTypes, vehicleTypes, years } from "@/hw_lesson-8_components/task_2/data/vehicles_data.js"

export default createStore({
	state: {
		// --------------------------------------Task_1--------------------------------------
		categories: categoriesList,
		currentCategoryId: null,
		currentCategoryProducts: [],
		// --------------------------------------Task_2--------------------------------------
		vehiclesList: vehiclesDatabase,
		filterOptions: {
			brands,
			models,
			bodyTypes,
			vehicleTypes,
			years
		},
		selectedFilters: {
			vehicleType: '',
			bodyType: [],
			brand: '',
			model: '',
			yearFrom: '',
			yearTo: '',
		},
	},
	getters: {
		// --------------------------------------Task_1--------------------------------------
		getProductCategories: state => state.categories,
		getCurrentCategoryId: state => state.currentCategoryId,
		currentCategoryProducts: state => state.currentCategoryProducts,
		getProductById: state => id => state.currentCategoryProducts.find(product => product.id === id),
		// --------------------------------------Task_2--------------------------------------
		getVehiclesList: state => state.vehiclesList,
		getFilterOptions: state => state.filterOptions,
		getSelectedFilters: state => state.selectedFilters,
		getVehicleById: state => id => state.vehiclesList.find(vehicle => vehicle.id === id),
		filteredVehiclesList: (state) => {
			return state.vehiclesList.filter(vehicle => {
				const filters = state.selectedFilters;
				return (!filters.vehicleType || vehicle.vehicleType === filters.vehicleType) &&
					(!filters.bodyType.length || filters.bodyType.includes(vehicle.type)) &&
					(!filters.brand || vehicle.brand === filters.brand) &&
					(!filters.model || vehicle.model === filters.model) &&
					(!filters.yearFrom || vehicle.year >= filters.yearFrom) &&
					(!filters.yearTo || vehicle.year <= filters.yearTo);
			});
		},
	},
	mutations: {
		// --------------------------------------Task_1--------------------------------------
		setCurrentCategoryId(state, categoryId) {
			state.currentCategoryId = categoryId;
		},
		setProducts(state, products) {
			state.currentCategoryProducts = products;
		},
		// --------------------------------------Task_2--------------------------------------
		updateSelectedFilters(state, fiterData) {
			state.selectedFilters = { ...state.selectedFilters, ...fiterData };
		},
	},
	actions: {
		// --------------------------------------Task_1--------------------------------------
		async chooseCategory({ commit, state }, categoryId) {
			const category = state.categories.find(cat => cat.id === categoryId);
			if (!category) return;

			commit('setCurrentCategoryId', categoryId);

			const productsModule = await import(`@/hw_lesson-8_components/task_1/data/${category.fileName}.js`);
			commit('setProducts', productsModule.default);
		},
		// --------------------------------------Task_2--------------------------------------
		updateFilters({ commit }, fiterData) {
			commit('updateSelectedFilters', fiterData);
		},
	},
});