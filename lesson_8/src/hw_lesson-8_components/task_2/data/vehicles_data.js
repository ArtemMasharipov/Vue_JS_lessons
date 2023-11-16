import { v4 as uuidv4 } from 'uuid';

// Масиви для доступних опцій
export const brands = ["Бренд 1", "Бренд 2", "Бренд 3", "Бренд 4", "Бренд 5"];
export const models = ["Модель 1", "Модель 2", "Модель 3", "Модель 4", "Модель 5"];
export const bodyTypes = ["Седан", "Позашляховик/Кроссовер", "Мінівен", "Мікровен", "Хетчбек"];
export const vehicleTypes = ["Легковий автомобіль"];
export const years = [...generateYears(2010, new Date().getFullYear())];

const locations = ["Київ", "Одеса", "Львів", "Дніпро", "Харків"];
const engineTypes = ["Бензин", "Дизель", "Гібрид", "Електричний"];
const minEngineVolume = 1.5;
const maxEngineVolume = 5.0;

// Функція для отримання діапазону років
function* generateYears(start, end) {
	while (start <= end) yield start++;
}
// Функція для отримання URL фото на основі типу кузова
function getPhotoUrl(bodyType) {
	switch (bodyType) {
		case "Седан":
			return "https://github.com/ArtemMasharipov/vue_js_lessons/blob/main/lesson_8/task_2/sedan.png?raw=true";
		case "Позашляховик/Кроссовер":
			return "https://github.com/ArtemMasharipov/vue_js_lessons/blob/main/lesson_8/task_2/SUV_Crossover.png?raw=true";
		case "Мінівен":
			return "https://github.com/ArtemMasharipov/vue_js_lessons/blob/main/lesson_8/task_2/minivan.png?raw=true";
		case "Мікровен":
			return "https://github.com/ArtemMasharipov/vue_js_lessons/blob/main/lesson_8/task_2/microvan.png?raw=true";
		case "Хетчбек":
			return "https://github.com/ArtemMasharipov/vue_js_lessons/blob/main/lesson_8/task_2/hatchback%20.png?raw=true";
		default:
			return "https://via.placeholder.com/150";
	}
}

// Допоміжна функція для отримання випадкового елемента з масиву
function getRandomElementFromArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

// Допоміжна функція для отримання випадкового об'єму двигуна
function getRandomEngineVolume(min, max) {
	return (Math.random() * (max - min) + min).toFixed(1);
}

// Створення бази даних автомобілів
function createVehiclesDatabase() {
	const vehicles = [];
	for (let i = 0; i < 20; i++) {
		const type = getRandomElementFromArray(bodyTypes);
		const car = {
			id: uuidv4(),
			brand: getRandomElementFromArray(brands),
			model: getRandomElementFromArray(models),
			year: new Date().getFullYear() - Math.floor(Math.random() * 20),
			price: `${Math.floor(Math.random() * 100) + 10},000`,
			mileage: `${Math.floor(Math.random() * 200) + 10},000`,
			location: getRandomElementFromArray(locations),
			transmission: Math.random() > 0.5 ? "Автоматична" : "Механічна",
			imgSrc: getPhotoUrl(type),
			vehicleType: getRandomElementFromArray(vehicleTypes),
			engineType: getRandomElementFromArray(engineTypes),
			engineVolume: getRandomEngineVolume(minEngineVolume, maxEngineVolume),
			type: type
		};
		vehicles.push(car);
	}
	return vehicles;
}

// Експорт бази даних автомобілів
export const vehiclesDatabase = createVehiclesDatabase();