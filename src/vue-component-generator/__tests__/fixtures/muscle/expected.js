import http from 'axios';
export default {
	data() {
		return {
			query: {
				name: null,
				address: null,
				date: null
			},
			userData: {
				name: null,
				age: 10
			}
		};
	},

	methods: {
		async getUserData(id) {
			this.userData = await http.get(`/users/${id}`);
			return this.userData;
		},

		async search(query) {
			this.userData = await http.get('/resources/', {
				params: {
					...query
				}
			});
			return this.userData;
		}

	}
};
