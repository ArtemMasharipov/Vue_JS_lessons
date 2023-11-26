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
	},

	mutations: {

		upsertContact: (state, contact) => {
			const index = state.contacts.findIndex(c => c.id === contact.id);
			if (index !== -1) {
				state.contacts[index] = contact;
			} else {
				state.contacts.push({ ...contact, id: uuidv4() });
			}
		},
		deleteContact: (state, id) => {
			state.contacts = state.contacts.filter(contact => contact.id !== id);
		},
		setCurrentContact: (state, contact) => state.currentContact = contact,
		setSearchQuery: (state, query) => state.searchQuery = query,
	},

	actions: {
		handleContact: ({ commit }, contact) => {
			commit('upsertContact', contact);
			commit('setCurrentContact', null);
		},
		removeContact: ({ commit }, id) => {
			commit('deleteContact', id);
			commit('setCurrentContact', null);
		},
		openContactForm: ({ commit }, contact = null) => {
			commit('setCurrentContact', contact);
		},
		searchContacts: ({ commit }, query) => commit('setSearchQuery', query),
	},
});
