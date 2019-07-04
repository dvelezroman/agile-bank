import React from "react";
import {
	ButtonComponent,
	InputComponent,
	TextAreaComponent,
	SelectComponent
} from "../presentational/index.jsx";
import { FormContainerLogic } from "../logic/FormContainerLogic.js";

const transactionTypes = [
	{ value: "deposit", label: "DEPOSIT" },
	{ value: "pay", label: "PAY" },
	{ value: "withdrawal", label: "WITHDRAWAL" }
];

const methods = [
	{ value: "cash", label: "CASH" },
	{ value: "credit_card", label: "CREDIT CARD" },
	{ value: "check", label: "CHECK" }
];

const styles = {
	fieldset: {
		width: 350
	},
	input: {
		alignItems: "center"
	}
};

class FormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.logic = new FormContainerLogic(this);
	}

	componentDidMount() {
		this.logic.init();
	}

	render() {
		console.log(this.state);
		const {
			transaction: { number, description, amount, type, method }
		} = this.state;
		return (
			<form id="form" style={{ justifyContent: "center" }}>
				<InputComponent
					title="Transaction Number"
					name="number"
					disabled={true}
					type="text"
					id="number"
					value={number}
					styles={styles}
					handleChange={this.logic.handleChange}
				/>
				<SelectComponent
					title="Payment Method"
					name="method"
					id="method"
					options={methods}
					styles={styles}
					handleChange={this.logic.handleChange}
				/>
				<TextAreaComponent
					title="Description"
					name="description"
					type="text"
					id="description"
					value={description}
					styles={styles}
					handleChange={this.logic.handleChange}
				/>
				<InputComponent
					title="Amount"
					name="amount"
					type="number"
					id="amount"
					value={amount}
					styles={styles}
					handleChange={this.logic.handleChange}
				/>
				<SelectComponent
					title="Type of Transaction"
					name="type"
					id="type"
					options={transactionTypes}
					styles={styles}
					handleChange={this.logic.handleChange}
				/>
				<ButtonComponent
					name="submit"
					title="Submit"
					onPressButton={this.logic.onPressButton}
				/>
			</form>
		);
	}
}

export default FormContainer;
