import { v4 as uuidv4 } from 'uuid';

const monitors = {
	id: uuidv4(),
	title: "Монітори",
	products: [
		{ id: uuidv4(), brand: "Dell", model: "Monitor A", price: "1500", imgSrc: require("@/assets/products_items_img/computer_monitor.png") },
		{ id: uuidv4(), brand: "LG", model: "Monitor B", price: "2000", imgSrc: require("@/assets/products_items_img/computer_monitor.png") },
	]
};

export default monitors;
