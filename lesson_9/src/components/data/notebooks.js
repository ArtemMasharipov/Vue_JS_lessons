import { v4 as uuidv4 } from 'uuid';
import { categoryIdTVs } from '@/components/data/productCategories.js';

const tvs = {
	categoryId: categoryIdTVs,
	products: [
		{ id: uuidv4(), brand: "Brand A", model: "TV Model A", price: "2000", imgSrc: require("@/assets/products_items_img/tv.png") },
		{ id: uuidv4(), brand: "Brand B", model: "TV Model B", price: "2500", imgSrc: require("@/assets/products_items_img/tv.png") }
	]
};

export default tvs;
