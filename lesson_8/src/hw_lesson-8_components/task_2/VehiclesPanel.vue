<template>
	<div class="task-container">
		<h3>
			<b>Задача 2.</b><br>
		</h3>
		<div class="vehicles-container">
			<div class="vehicles-filter-container">

				<div class="vehicle-type">
					<label for="vehicleTypeSelect">Тип транспорта:</label>
					<select v-model="filterData.vehicleType" id="vehicleTypeSelect">
						<option value="">Не обрано</option>
						<option v-for="vehicleType in getFilterOptions.vehicleTypes" :key="vehicleType" :value="vehicleType">
							{{ vehicleType }}
						</option>
					</select>
				</div>

				<div class="vehicle-type">
					<label>Тип кузова:</label>
					<div v-for="bodyType in getFilterOptions.bodyTypes" :key="bodyType">
						<input v-model="filterData.bodyType" :id="bodyType" type="checkbox" :value="bodyType">
						<label class="checkbox-style" :for="bodyType">{{ bodyType }}</label>
					</div>
				</div>

				<div class="vehicle-type">
					<label for="brandSelect">Марка:</label>
					<select v-model="filterData.brand" id="brandSelect">
						<option value="">Не обрано</option>
						<option v-for="brand in getFilterOptions.brands" :key="brand" :value="brand">{{ brand }}</option>
					</select>
				</div>

				<div class="vehicle-type">
					<label for="modelSelect">Модель:</label>
					<select v-model="filterData.model" id="modelSelect">
						<option value="">Не обрано</option>
						<option v-for="model in getFilterOptions.models" :key="model" :value="model">{{ model }}</option>
					</select>
				</div>

				<div class="vehicle-type">
					<label for="yearFromSelect">Рік:</label>
					<select v-model="filterData.yearFrom" id="yearFromSelect">
						<option value="">Від</option>
						<option v-for="year in yearsFromOptions" :key="year" :value="year">{{ year }}</option>
					</select>
					<select id="yearToSelect" v-model="filterData.yearTo">
						<option value="">До</option>
						<option v-for="year in yearsToOptions" :key="year" :value="year">{{ year }}</option>
					</select>
				</div>
				<button @click="onReset">Reset</button>
			</div>
			<div>
				<vehicles-list />
			</div>
		</div>
	</div>
</template>



<script>
import VehiclesList from "@/hw_lesson-8_components/task_2/VehiclesList.vue";
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'VehiclesPanel',
	components: {
		VehiclesList,
	},
	data() {
		return {
			filterData: {
				vehicleType: '',
				bodyType: [],
				brand: '',
				model: '',
				yearFrom: '',
				yearTo: '',
			}
		}
	},

	computed: {
		...mapGetters(['getFilterOptions']),

		yearsFromOptions() {
			const yearTo = this.filterData.yearTo;
			return this.getFilterOptions.years.filter(year => !yearTo || year <= yearTo);
		},

		yearsToOptions() {
			const yearFrom = this.filterData.yearFrom;
			return this.getFilterOptions.years.filter(year => !yearFrom || year >= yearFrom);
		},
	},

	watch: {
		filterData: {
			handler(newFilterValue) {
				this.updateFilters(newFilterValue);
			},
			deep: true,
		},
	},
	methods: {
		...mapActions([
			'updateFilters',
		]),
		onReset() {
			this.filterData = {
				vehicleType: '',
				bodyType: [],
				brand: '',
				model: '',
				yearFrom: '',
				yearTo: '',
			}
		},
	},
};
</script>




<style lang="css" scoped>
.vehicles-container {
	display: flex;
	gap: 50px;
}

.vehicles-filter-container {
	max-width: 200px;
	max-height: 500px;
	border: 1px solid gray;
	border-radius: 5px;
	padding: 10px;
}

.vehicles-container .vehicle-type label {
	font-weight: bold;
}

.vehicles-container .vehicle-type .checkbox-style {
	font-weight: normal;
}

.checkbox-style:hover {
	text-decoration: underline;
}

.vehicle-type {
	margin-bottom: 20px;
}

.vehicle-type>div {
	display: flex;
	align-items: center;
	gap: 10px;
}

@media only screen and (max-width: 768px) {
	.vehicles-container {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 20px;
	}
}
</style>