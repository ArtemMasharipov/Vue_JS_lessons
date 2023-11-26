<template>
	<div class="task-container">
		<div class="contacts-manager">
			<search-component />
			<button @click="openContactForm">Create new contact</button>
			<contact-item-edit-form />
			<contact-list />
		</div>
	</div>
</template>

<script>
import { mapActions} from 'vuex';
import SearchComponent from '@/components/SearchComponent.vue';
import ContactList from '@/components/ContactList.vue';
import ContactItemEditForm from '@/components/ContactItemEditForm.vue';

export default {
	name: 'ContactsManager',
	components: {
		SearchComponent,
		ContactList,
		ContactItemEditForm
	},

	methods: {
		...mapActions(['openContactForm', 'searchContacts']),
	}
};
</script>
<style lang="css" scoped>
.contacts-manager>button {
	background-color: #5cb85c;
	color: white;
	padding: 0.5em 1em;
	border: none;
	border-radius: 4px;
	margin-bottom: 1em;
	font-size: 1em;
}

.contacts-manager>button:hover {
	background-color: #4cae4c;
}
</style>
