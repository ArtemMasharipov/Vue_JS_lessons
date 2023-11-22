import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
const routes = [
	{
		path: "/",
		name: "main",
		component: MainView, ,
	},
	{
		path: "/shop",
		name: "shop",
		component: () => import("@/views/ShopView.vue"),
		children: [
			{
				path: ":categoryId?",
				name: "products",
				component: () => import("@/components/ProductsList.vue"),
			}
		],
	},
	{
		path: "/payment",
		name: "payment",
		component: () => import("@/views/PaymentRulesView.vue"),
	},
	{
		path: "/contacts",
		name: "contacts",
		component: () => import("@/views/ContactsView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
