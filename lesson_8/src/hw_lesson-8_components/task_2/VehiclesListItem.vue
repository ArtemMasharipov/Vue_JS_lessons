<template>
	<div v-if="vehicleData" class="vehicle-item">
		<img :src="vehicleData.imgSrc" class="vehicle-image" :alt="`Зображення ${vehicleData.model}`">
		<div class="vehicle-details">
			<h2 class="vehicle-title">{{ vehicleData.brand }} {{ vehicleData.model }} {{ vehicleData.year }}</h2>
			<div class="vehicle-price">{{ vehicleData.price }}$</div>
			<ul class="vehicle-specs">
				<li>{{ vehicleData.engineType }}, <span v-if="shouldDisplayEngineInfo">{{ vehicleData.engineVolume }} л.</span>
				</li>
				<li>{{ vehicleData.mileage }} км</li>
				<li>{{ vehicleData.location }}</li>
				<li v-if="shouldDisplayEngineInfo">{{ vehicleData.transmission }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'VehiclesListItem',
	props: {
		id: {
			type: [String, Number],
			required: true
		}
	},
	computed: {
		...mapGetters([
			'getVehicleById'
		]),
		shouldDisplayEngineInfo() {
			return this.vehicleData.engineType !== 'Електричний';
		},
		vehicleData() {
			return this.getVehicleById(this.id);
		}
	},
};
</script>

<style scoped>
.vehicle-item {
	display: flex;
	max-width: 400px;
	border: 1px solid #ccc;
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.vehicle-item:hover {
	transform: scale(1.03);
	transition: all .2s ease-in-out;

}

.vehicle-image {
	margin: 5px;
	margin-right: 0;
	width: 100%;
	height: 200px;
	object-fit: cover;
}

.vehicle-details {
	margin: 5px;
	padding: 10px;
	background-color: #fff;
}

.vehicle-title {
	color: rgb(0, 128, 255);
	font-size: 18px;
	font-weight: bold;
	margin: 0 0 10px;
}

.vehicle-price {
	font-size: 18px;
	font-weight: bold;
	color: green;
	margin: 0 0 10px;
}

.vehicle-specs {
	list-style: none;
	padding: 0;
	margin: 0;
}

.vehicle-specs li {
	font-size: 14px;
	margin-bottom: 5px;
}
</style>
