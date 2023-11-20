import { v4 as uuidv4 } from 'uuid';

const mobilePhones = {
	id: uuidv4(),
	title: "Телефони",
	products: [
		{ id: uuidv4(), brand: "Apple", model: "Phone A", price: "4000", imgSrc: require("@/assets/products_items_img/mobile.png") },
		{ id: uuidv4(), brand: "Samsung", model: "Phone B", price: "4500", imgSrc: require("@/assets/products_items_img/mobile.png") },
	]
};

export default mobilePhones;
