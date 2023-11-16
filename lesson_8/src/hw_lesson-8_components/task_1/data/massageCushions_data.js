import { v4 as uuidv4 } from 'uuid';
// Масажні накидки
const massageCushions = [
	{
		id: uuidv4(),
		brand: "Homedics",
		model: "Homedics Shiatsu Elite - Massage Types: Shiatsu, Heat Function: true",
		imgSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrxyCcZK5en6LPkd5mYoh7Imca5ZoTu2cnmhRITLo5Fbqtl-mrmVlX57Oh9m0b",
		alt: "Homedics Shiatsu Elite Massage Cushion",
		link: "https://www.amazon.com/Adjustment-Programmed-Controller-Integrated-Strapping/dp/B00ZEMQK3K",
		price: 2000
	},
	{
		id: uuidv4(),
		brand: "Snailax",
		model: "Snailax SL-256 - Massage Types: Vibration, Heat Function: false",
		imgSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQixzBV3KVlEa0OL2j7j_caA5E6wZDCdlu5CK7dx8AHvn2LSo9OOZ9SgU9Q6yR5",
		alt: "Snailax SL-256 Massage Cushion",
		link: "https://www.amazon.com/Snailax-Shiatsu-Kneading-Massager-SL-256/dp/B076HWNCP5",
		price: 2500
	}
];
export default massageCushions;