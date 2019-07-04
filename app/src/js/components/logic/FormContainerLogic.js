import uuidv4 from "uuid/v4";
import axios from "axios";
// import { TransactionDAO } from "../../../dao/TransactionDAO.js";

export class FormContainerLogic {
	constructor(container) {
		this.setState = container.setState.bind(container);
		container.state = {
			transaction: {
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
		this.init = this.init.bind(container);
	}

	init() {
		// no soporta async await
		axios
			.get("http://localhost:3000/transaction/all")
			.then(res => console.log(res.data));
		// const response = TransactionDAO.getList();
		const { transaction } = this.state;
		transaction["number"] = uuidv4();
		this.setState({ transaction });
	}

	handleChange(name, event) {
		const { value } = event.target;
		const { transaction } = this.state;
		switch (name) {
			case "amount": {
				transaction[name] = parseFloat(value) < 0 ? 0 : parseFloat(value);
				break;
			}
			default: {
				transaction[name] = value;
				break;
			}
		}
		this.setState({ transaction });
	}

	onPressButton(event) {
		event.preventDefault();
		const reset = {
			number: uuidv4(),
			description: "",
			amount: 0,
			type: "deposit",
			method: "cash"
		};
		this.setState({ transaction: reset });
	}
}
