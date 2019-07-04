const urlBase = "http://localhost:3000";
import axios from "axios";

export class BusinnessDAO {
	constructor(endpoints) {
		this.list = [];
		this.endpoints = endpoints;
	}

	getUrl(predicate) {
		return urlBase + this.endpoints[predicate];
	}

	init() {
		this.getAll();
	}

	getList() {
		return this.list;
	}

	async getAll() {
		try {
			const response = await axios.get(this.getUrl("getAll"));
			return response.data;
		} catch (error) {
			throw new Error(JSON.stringify(error));
		}
	}
}
