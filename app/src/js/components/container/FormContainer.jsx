import React from "react";
import {
	ButtonComponent,
	InputComponent,
	TextAreaComponent,
	SelectComponent
} from "../presentational/index.jsx";

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
		width: "100%"
	},
	input: {
		alignItems: "center"
	}
};

class FormContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			transaction: { date, number, description, amount, type, method },
			handleChange,
			onPressButton,
			completed
		} = this.props;
		return (
			<div>
				<h4>Transaction Form</h4>
				<form id="form" style={{ justifyContent: "center" }}>
					<InputComponent
						title="Number"
						name="number"
						disabled={true}
						type="text"
						id="number"
						value={number}
						styles={styles}
						handleChange={handleChange}
					/>
					<InputComponent
						title="Date"
						name="date"
						disabled={true}
						type="text"
						id="date"
						value={date}
						styles={styles}
						handleChange={handleChange}
					/>
					<SelectComponent
						title="Payment Method"
						name="method"
						id="method"
						value={method}
						options={methods}
						styles={styles}
						handleChange={handleChange}
					/>
					<TextAreaComponent
						title="Description"
						name="description"
						type="text"
						id="description"
						value={description}
						styles={styles}
						handleChange={handleChange}
					/>
					<InputComponent
						title="Amount"
						name="amount"
						type="number"
						id="amount"
						value={amount}
						styles={styles}
						handleChange={handleChange}
					/>
					<SelectComponent
						title="Type of Transaction"
						name="type"
						id="type"
						value={type}
						options={transactionTypes}
						styles={styles}
						handleChange={handleChange}
					/>
					<ButtonComponent
						name="submit"
						title="Submit"
						onPressButton={onPressButton}
					/>
				</form>
			</div>
		);
	}
}

export default FormContainer;
