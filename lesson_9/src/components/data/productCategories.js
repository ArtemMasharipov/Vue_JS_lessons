import { v4 as uuidv4 } from 'uuid';

export const categories = [
	{ id: uuidv4(), key: "tvs", title: "Телевізори" },
	{ id: uuidv4(), key: "notebooks", title: "Ноутбуки" },
	{ id: uuidv4(), key: "mobilePhones", title: "Телефони" },
	{ id: uuidv4(), key: "monitors", title: "Монітори" }
];
