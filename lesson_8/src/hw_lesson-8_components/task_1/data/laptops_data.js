import { v4 as uuidv4 } from 'uuid';
// Ноутбуки
const laptops = [
	{
		id: uuidv4(),
		brand: "Lenovo",
		model: "Lenovo IdeaPad 3 - Processor: Intel Core i5, RAM: 8GB",
		imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQN31iE69vAfGbRvCQ-f_Ghx0lgoFHjYlVNhjPoL5jXNI3i3or6E8O0lAuYYB4R",
		alt: "Lenovo IdeaPad 3 Laptop",
		link: "https://www.lenovo.com/my/en/p/laptops/ideapad/ideapad-3/ideapad-slim-3-gen-8-(15-inch-amd)/len101i0073",
		price: 40000
	},
	{
		id: uuidv4(),
		brand: "HP",
		model: "HP Pavilion 15 - Processor: Intel Core i7, RAM: 16GB",
		imgSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsM8iwRFg6lQBcRs8_VV1t-bX4fHoBC6TjwyhqOfqfieo11Fc-9CRa1KPLL_W-",
		alt: "HP Pavilion 15 Laptop",
		link: "https://www.amazon.in/HP-Pavilion-inches-Windows-Natural/dp/B09KV2CNHK",
		price: 50000
	}
];
export default laptops;