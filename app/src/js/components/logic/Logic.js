import uuidv4 from "uuid/v4";
import { TransactionDAO } from "../../../dao/TransactionDAO.js";
import Moment from 'moment';

export class Logic {
	constructor(container) {
		this.setState = container.setState.bind(container);
		container.state = {
			showModal: false,
			transactions: [],
			selected: null,
			transaction: {
				date: "",
				number: "",
				description: "",
				amount: 0,
				type: "deposit",
				method: "cash"
			}
		};
		this.state = container.state;
		this.props = container.props;
		this.handleChange = this.handleChange.bind(container);
		this.onPressButton = this.onPressButton.bind(container);
		this.getTransactionDetails = this.getTransactionDetails.bind(container);
		this.init = this.init.bind(container);
		this.closeModal = this.closeModal.bind(container);
	}

	async init() {
		const { transaction } = this.state;
		const date = Moment().format('YYYY/MM/DD');
		const transactions = await TransactionDAO.getAll();
		transaction["number"] = uuidv4();
		transaction["date"] = date;
		this.setState({ transaction, transactions });
	}

	handleChange(name, event) {
		const { value } = event.target;
		const { transaction } = this.state;
		switch (name) {
			case "amount": {
				transaction[name] = value != "" ? parseFloat(value) < 0 ? 0 : parseFloat(value) : 0;
				break;
			}
			default: {
				transaction[name] = value;
				break;
			}
		}
		this.setState({ transaction });
	}

	async onPressButton(event) {
		event.preventDefault();
		const { transaction } = this.state;
		const date = Moment().format('YYYY/MM/DD');
		const response = await TransactionDAO.save(transaction);
		if (response.status) {
			const reset = {
				number: uuidv4(),
				description: "",
				amount: 0,
				type: "deposit",
				method: "cash",
				date
			};
			this.setState({ transaction: reset });
		}
		const transactions = TransactionDAO.list;
		this.setState({ transactions });
	}

	getTransactionDetails (number) {
		const index = TransactionDAO.getDetails(number);
        const selected = index != -1 ? TransactionDAO.list[index] : false;
        this.setState({ selected, showModal: true });
	}

	closeModal () {
		this.setState({ showModal: false })
	}
}
