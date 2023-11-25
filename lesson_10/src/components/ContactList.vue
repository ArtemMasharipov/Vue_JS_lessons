<template>
	<div class="contact-list">
		<contact-list-item v-for="contact in getFilteredContacts" :key="contact.id" :contact="contact" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactListItem from '@/components/ContactListItem.vue'

export default {
	name: 'ContactList',
	components: {
		ContactListItem,
	},
	computed: {
		...mapGetters(['getFilteredContacts'])
	},
};
</script>
