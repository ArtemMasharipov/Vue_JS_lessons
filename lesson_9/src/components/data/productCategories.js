import { v4 as uuidv4 } from 'uuid';

export const categoryIdTVs = uuidv4();
export const categoryIdNotebooks = uuidv4();
export const categoryIdMobilePhones = uuidv4();
export const categoryIdMonitors = uuidv4();

export const categories = [
	{ id: categoryIdTVs, key: "tvs", title: "Телевізори" },
	{ id: categoryIdNotebooks, key: "notebooks", title: "Ноутбуки" },
	{ id: categoryIdMobilePhones, key: "mobilePhones", title: "Телефони" },
	{ id: categoryIdMonitors, key: "monitors", title: "Монітори" }
];
