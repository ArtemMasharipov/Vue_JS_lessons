import { v4 as uuidv4 } from 'uuid';
import { categoryIdMonitors } from '@/components/data/productCategories.js';

const monitors = {
	categoryId: categoryIdMonitors,
	products: [
		{ id: uuidv4(), brand: "Dell", model: "Monitor A", price: "1500", imgSrc: require("@/assets/products_items_img/computer_monitor.png") },
		{ id: uuidv4(), brand: "LG", model: "Monitor B", price: "2000", imgSrc: require("@/assets/products_items_img/computer_monitor.png") }
	]
};

export default monitors;
