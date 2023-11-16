import { v4 as uuidv4 } from 'uuid';

export const categoriesList = [
	{
		id: uuidv4(),
		title: "Ноутбуки",
		imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQN31iE69vAfGbRvCQ-f_Ghx0lgoFHjYlVNhjPoL5jXNI3i3or6E8O0lAuYYB4R",
		fileName:'laptops_data',
	},
	{
		id: uuidv4(),
		title: "Автомобільні аккумулятори",
		imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35fHel-dnjWDh7mti7HEgTsNSq8taOFrkgYUzhBPiqyGZUKEsiYGWhM5vbfPk",
		fileName: 'carBatteries_data',
	},
	{
		id: uuidv4(),
		title: "Масажні накидки",
		imgSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrxyCcZK5en6LPkd5mYoh7Imca5ZoTu2cnmhRITLo5Fbqtl-mrmVlX57Oh9m0b",
		fileName: 'massageCushions_data',
	},
	{
		id: uuidv4(),
		title: "Апарти високого тиску",
		imgSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQygPm-T3LC8DmfYOa2Qx2EKVGTdYgjhkL0gXzAYzYLxu42nk8DnT2OfGXNH7an",
		fileName: 'pressureWashers_data',
	},
]