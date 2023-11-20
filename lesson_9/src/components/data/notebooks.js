import { v4 as uuidv4 } from 'uuid';

const notebooks = {
	id: uuidv4(),
	title: "Ноутбуки",
	products: [
		{ id: uuidv4(), brand: "Lenovo", model: "Laptop A", price: "3000", imgSrc: require("@/assets/products_items_img/laptop.png") },
		{ id: uuidv4(), brand: "HP", model: "Laptop B", price: "3500", imgSrc: require("@/assets/products_items_img/laptop.png") },
	]
};

export default notebooks;
