<template>
	<div class="contact-item">
		<div class="contact-badge">{{ initials }}</div>
		<div class="contact-info">
			<div class="contact-data">
				<div class="contact-name">{{ contact.name }}, </div>
				<div class="contact-phone">{{ contact.phone }}</div>
			</div>
			<div class="contact-email">{{ contact.email }}</div>
		</div>
		<div class="contact-actions">
			<button class="edit" @click="editCurrentContact">Edit</button>
			<button class="delete" @click="deleteCurrentContact">Delete</button>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'ContactListItem',
	props: {
		contact: {
			type: Object,
			required: true
		},
	},
	computed: {
		...mapGetters(['getFilteredContacts']),
		initials() {
			return this.contact.name.split(' ')
				.map(word => word.substring(0, 2))
				.join('')
				.toUpperCase();
		}
	},
	methods: {
		...mapActions(['removeContact', 'editContact']),
		editCurrentContact() {
			if (this.contact.id) {
				this.editContact(this.contact.id);
			}
		},
		deleteCurrentContact() {
			this.removeContact(this.contact.id);
		}
	},
};

</script>
<style lang="css" scoped>
.contact-item {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	border-radius: 5px;
	padding: 1em;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-badge {
	min-width: 50px;
	height: 50px;
	flex-shrink: 0;
	border-radius: 50%;
	background-color: #007bff;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1em;
	margin-right: 1em;
}

.contact-data {
	display: flex;
	font-weight: bold;
	font-size: 18px;
}

.contact-email {
	text-decoration: underline;
	cursor: pointer;
}

.contact-info {
	flex: 1;
}

.contact-actions button {
	border: none;
	background-color: #f44336;
	color: #fff;
	padding: 0.5em 1em;
	margin-left: 0.5em;
	border-radius: 4px;
	font-size: 0.8em;
}

.contact-actions button.edit {
	background-color: #4caf50;
}

@media only screen and (max-width: 768px) {
	.contact-badge {
		min-width: 40px;
		height: 40px;
		font-size: 0.85em;
	}

	.contact-data {
		display: flex;
		flex-direction: column;
		font-weight: bold;
		font-size: 16px;
	}
.contact-item {
padding: 0.5em;
}

	.contact-actions {
		display: flex;
		flex-wrap: nowrap;
	}

	.contact-actions button {
		padding: 0.4em 0.8em;
		font-size: 0.75em;
	}
}
</style>
