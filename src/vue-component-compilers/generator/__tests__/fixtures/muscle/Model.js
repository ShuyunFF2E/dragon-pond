/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-09
 */

import http from 'axios';

export default class Model {

	query = {
		name: null,
		address: null,
		date: null
	};

	userData = {
		name: null,
		age: 10
	};

	async getUserData(id) {
		this.userData = await http.get(`/users/${id}`);
		return this.userData;
	}

	async search(query) {
		this.userData = await http.get('/resources/', { params: { ...query }});
		return this.userData;
	}

}
