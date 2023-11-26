<template>
	<div class="search-component">
		<input type="text" placeholder="Search contacts..." @input="updateSearchTerm">
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'SearchComponent',
	methods: {
		...mapActions(['searchContacts']),
		updateSearchTerm(event) {
			this.searchContacts(event.target.value);
		}
	}
};

</script>
<style lang="css" scoped>
.search-component input {
	width: 100%;
	padding: 0.5em;
	border: none;
	margin-bottom: 0.5em;
	font-size: 1em;
}
</style>
