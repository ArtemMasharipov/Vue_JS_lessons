import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default createStore({
	state: {
		contacts: [
			{ id: 1, name: 'Анна', phone: '0987654321', email: 'anna@gmail.com' },
			{ id: 2, name: 'Богдан', phone: '1234567890', email: 'bogdan@gmail.com' },
			{ id: 3, name: 'Віктор', phone: '0981234567', email: 'victor@gmail.com' }
		],
		currentContact: null,
		searchQuery: '',
		isCreatingNewContact: false,
	},

	getters: {
		getFilteredContacts: state => {
			const queryLower = state.searchQuery.toLowerCase();
			return state.contacts.filter(contact =>
				Object.values(contact).some(value =>
					value.toString().toLowerCase().includes(queryLower)
				)
			).sort((a, b) => a.name.localeCompare(b.name));
		},
		getCurrentContact: state => state.currentContact,
		isCreatingNewContact: state => state.isCreatingNewContact,
	},

	mutations: {
		addContact: (state, contact) => {
			state.contacts.push({ ...contact, id: uuidv4() });
		},
		deleteContact: (state, id) => {
			state.contacts = state.contacts.filter(contact => contact.id !== id);
		},
		editContact: (state, updatedContact) => {
			const index = state.contacts.findIndex(contact => contact.id === updatedContact.id);
			if (index !== -1) {
				state.contacts[index] = updatedContact;
			}
		},
		clearCurrentContact: state => state.currentContact = null,
		setCurrentContact: (state, id) => {
			state.currentContact = state.contacts.find(contact => contact.id === id);
		},
		setSearchQuery: (state, query) => state.searchQuery = query,
		setCreatingNewContact: (state, status) => state.isCreatingNewContact = status,
	},

	actions: {
		saveContact({ commit }, contact) {
			if (contact.id) {
				commit('editContact', contact);
			} else {
				commit('addContact', { ...contact, id: uuidv4() });
			}
			commit('clearCurrentContact');
		},
		removeContact: ({ commit }, id) => {
			commit('deleteContact', id);
			commit('clearCurrentContact');
		},
		editContact: ({ commit }, id) => {
			commit('setCreatingNewContact', false);
			commit('setCurrentContact', id);
		},
		cancelEdit: ({ commit }) => commit('clearCurrentContact'),
		searchContacts: ({ commit }, query) => commit('setSearchQuery', query),
		initiateCreateContact: ({ commit }) => {
			commit('setCreatingNewContact', true);
			commit('setCurrentContact', null);
		},
		cancelCreateContact: ({ commit }) => {
			commit('setCreatingNewContact', false);
			commit('setCurrentContact', null);
		},
	},
});
