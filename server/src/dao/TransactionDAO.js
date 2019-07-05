const { filter, remove, sortBy, findIndex } = require("lodash");

class TransactionDAORaw {
	constructor() {
		this.key = "agile-2019";
		this.transactions = [];
		this.balance = 0;
	}

	save(data) {
		this.setBalance(data.amount, data.type);
		const transaction = { ...data, balance: this.balance };
		this.transactions = [transaction, ...this.transactions];
		return this.balance;
	}

	setBalance(amount, type) {
		this.balance =
			type === "deposit" ? this.balance + amount : this.balance - amount;
	}

	getAll() {
		return this.transactions;
	}

	getDetails(number) {
		const index = findIndex(
			this.transactions,
			transaction => transaction.number === number
		);
		return index;
	}

	filterBy(data) {
		return filter(this.transactions, [data.field, data.value]);
	}

	removeTransaction(data) {
		const { amount } = data;
		remove(this.transactions, transaction => {
			return transaction._id === data._id;
		});
		this.balance =
			data.type === "deposit" ? this.balance - amount : this.balance + amount;
		return this.transactions;
	}

	sortTransactions(fields) {
		sortBy(this.transactions, fields.length ? [...fields] : "date");
	}

	getBalance() {
		return this.balance;
	}

	isTransactionPosible(amount, type) {
		return type === "deposit" ? true : this.balance >= amount;
	}
}

const TransactionDAO = new TransactionDAORaw();

module.exports = TransactionDAO;
