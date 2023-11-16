import { v4 as uuidv4 } from 'uuid';
// Апарати високого тиску
const pressureWashers = [
	{
		id: uuidv4(),
		brand: "Kärcher",
		model: "Kärcher K5 Premium - Pressure: 2000 PSI, Power: 2100W",
		imgSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQygPm-T3LC8DmfYOa2Qx2EKVGTdYgjhkL0gXzAYzYLxu42nk8DnT2OfGXNH7an",
		alt: "Kärcher K5 Premium Pressure Washer",
		link: "https://www.kaercher.com/us/outlet/products/k-5-premium-16033610.html",
		price: 10000
	},
	{
		id: uuidv4(),
		brand: "Sun Joe",
		model: "Sun Joe SPX3000 - Pressure: 2030 PSI, Power: 1800W",
		imgSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRT1SGWaX38J2mKlDnyE6EibksqO4DBiwza6npU5sStcIAOnAxXkYlk71JI44rU",
		alt: "Sun Joe SPX3000 Pressure Washer",
		link: "https://www.amazon.com/Sun-Joe-SPX3000-Pressure-14-5-Amp/dp/B00CPGMUXW",
		price: 9000
	}
];
export default pressureWashers;
