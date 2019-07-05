const urlBase = "http://localhost:3000";
import { findIndex } from "lodash";
import axios from "axios";

export class BusinnessDAO {
	constructor(endpoints = []) {
		this.list = [];
		this.endpoints = endpoints;
		this.init();
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

	getDetails(number) {
		const index = findIndex(
			this.list,
			transaction => transaction.number === number
		);
		return index;
	}

	async getAll() {
		const endpoint = this.getUrl("getAll");
		try {
			const response = await axios.get(endpoint);
			this.list = response.data.data.transactions;
			return response.data.status ? this.list : [];
		} catch (error) {
			throw new Error(JSON.stringify(error));
		}
	}

	async save(transaction) {
		const endpoint = this.getUrl("save");
		try {
			const response = await axios.post(endpoint, { transaction });
			if (response.data.status) {
				const newTransaction = {
					...transaction,
					balance: response.data.balance
				};
				this.list = [newTransaction, ...this.list];
			}
			return response.data;
		} catch (error) {
			throw new Error(JSON.stringify(error));
		}
	}
}
