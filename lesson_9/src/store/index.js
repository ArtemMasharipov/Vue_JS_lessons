import { createStore } from "vuex";
import { categories } from "@/components/data/productCategories.js"

export default createStore({
	state: {
		categoryData: null,
		categoriesList: categories
	},
	getters: {
		allCategories: (state) => state.categoriesList,
		categoryProducts: (state) => state.categoryData?.products || [],
	},
	mutations: {
		setCategoryData(state, data) {
			state.categoryData = data;
		},
		clearCategoryData(state) {
			state.categoryData = null;
		}
	},
	actions: {
		async fetchCategoryData({ commit }, category) {
			const module = await import(`@/components/data/${category}.js`);
			commit('setCategoryData', module.default);
		},
		clearCategory({ commit }) {
			commit('clearCategoryData');
		}
	}
});
