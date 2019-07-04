import { BusinnessDAO } from "./BusinnessDAO.js";

const endpoints = {
	save: "/transaction/save",
	getBalance: "/transaction/getBalance",
	getAll: "/transaction/all",
	remove: "/transaction/remove"
};

class TransactionDAORaw extends BusinnessDAO {
	constructor() {
		super(endpoints);
	}
}

export const TransactionDAO = new TransactionDAORaw();
