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
		async fetchCategoryData({ commit, state }, categoryId) {
			try {
				const category = state.categoriesList.find(cat => cat.id === categoryId);
				if (category) {
					const module = await import(`@/components/data/${category.key}.js`);
					commit('setCategoryData', module.default);
				}
			} catch (error) {
				console.error("Error loading category data:", error);
			}
		},
		clearCategory({ commit }) {
			commit('clearCategoryData');
		}
	}
});
