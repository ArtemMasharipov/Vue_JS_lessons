import { v4 as uuidv4 } from 'uuid';
// Автомобільні акумулятори
const carBatteries = [
	{
		id: uuidv4(),
		brand: "Bosch",
		model: "Bosch S4 - Voltage: 12V, Capacity: 40Ah",
		imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35fHel-dnjWDh7mti7HEgTsNSq8taOFrkgYUzhBPiqyGZUKEsiYGWhM5vbfPk",
		alt: "Bosch S4 Car Battery",
		link: "https://www.tayna.co.uk/car-batteries/bosch/s4021/",
		price: 2000
	},
	{
		id: uuidv4(),
		brand: "Varta",
		model: "Varta Blue Dynamic - Voltage: 12V, Capacity: 60Ah",
		imgSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTjGXX5ZcklA3EXQAI2oNxIxLzviQXcwYNlBFMLnxbenD0OmOFNdfhUcih7MABB",
		alt: "Varta Blue Dynamic Car Battery",
		link: "https://www.varta-automotive.com/en-gb/products/varta-blue-dynamic",
		price: 3000
	}
];
export default carBatteries;