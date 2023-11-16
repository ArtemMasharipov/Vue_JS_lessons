<template>
	<div class="list-container">
		<vehicles-list-item v-for="vehicle in filteredVehiclesList" :id="vehicle.id" :key="vehicle.id" />
	</div>
</template>

<script>
import VehiclesListItem from '@/hw_lesson-8_components/task_2/VehiclesListItem.vue'
import { mapGetters } from 'vuex';

export default {
	name: 'VehiclesList',
	components: {
		VehiclesListItem,
	},
	computed: {
		...mapGetters([
			'filteredVehiclesList',
		]),
	}
};
</script>

<style lang="css" scoped>
.list-container {
	display: flex;
	flex-wrap: wrap;
	gap: 10px
}
</style>
