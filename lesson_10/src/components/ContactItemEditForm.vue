<template>
	<div v-if="formVisible"  class="edit-form-container">
		<form class="edit-form" @submit.prevent="saveContact">
			<div class="input-group">
				<input v-model="localContact.name" type="text" class="input-field" placeholder="Name" required>
			</div>
			<div class="input-group">
				<input v-model="localContact.phone" type="number" class="input-field" placeholder="Phone" required>
			</div>
			<div class="input-group">
				<input v-model="localContact.email" type="email" class="input-field" placeholder="Email">
			</div>
			<div class="form-actions">
				<button type="submit" class="btn-save">{{ submitButtonText }}</button>
				<button type="button" class="btn-cancel" @click="cancelEdit">Cancel</button>
			</div>
		</form>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	name: 'ContactItemEditForm',
	computed: {
		...mapGetters(['getCurrentContact']),
		formVisible() {
			return this.getCurrentContact !== null;
		},
		submitButtonText() {
			if (this.formVisible) {
				return this.getCurrentContact.id ? 'Save' : 'Create';
			}
			return '';
		},
	},

	watch: {
		getCurrentContact(newVal) {
			if (newVal) {
				this.localContact = { ...newVal };
			} else {
				this.localContact = {};
			}
		}
	},
	methods: {
		...mapActions(['handleContact', 'openContactForm']),
		saveContact() {
			this.handleContact(this.localContact);
		},
		cancelEdit() {
			this.openContactForm(null);
		},
	}
};
</script>
<style scoped>
.edit-form-container {
	background: #ffffff;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
}

.input-group {
	margin-bottom: 15px;
}

.input-field {
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;
}

.form-actions {
	display: flex;
	justify-content: space-between;
}

.btn-save,
.btn-cancel {
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-save {
	background-color: #4CAF50;
	color: white;
}

.btn-cancel {
	background-color: #f44336;
	color: white;
}

.btn-save:hover {
	background-color: #45a049;
}

.btn-cancel:hover {
	background-color: #d32f2f;
}
</style>
