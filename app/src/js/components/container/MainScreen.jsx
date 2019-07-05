import React from "react";
import FormContainer from "./FormContainer.jsx";
import ListContainer from "./ListContainer.jsx";
import { Logic } from "../logic/Logic.js";
import { ModalComponent } from "../presentational/ModalComponent.jsx";

export default class MainScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.logic = new Logic(this);
	}

	async componentDidMount() {
		await this.logic.init();
	}

	render() {
		return (
			<div className="container-fluid">
				<div
					className="jumbotron jumbotron-fluid"
					style={{ paddingTop: 10, paddingBottom: 0 }}
				>
					<div className="container">
						<h4>Accounting Notebook</h4>
					</div>
				</div>
				{this.state.showAlertError ? (
					<div className="alert alert-danger" role="alert">
						You don't have enough money to complete this transaction...
					</div>
				) : null}
				{this.state.showAlertSuccess ? (
					<div className="alert alert-success" role="alert">
						Your transaction was registered...
					</div>
				) : null}
				<div className="row justify-content-md-center">
					<div className="col-4 justify-content-md-center">
						<FormContainer
							completed={this.logic.completed}
							transaction={this.state.transaction}
							handleChange={this.logic.handleChange}
							onPressButton={this.logic.onPressButton}
						/>
					</div>
					<div
						className="col-8 justify-content-md-center"
						style={{ paddingLeft: 50 }}
					>
						<ListContainer
							transactions={this.state.transactions}
							selected={this.state.selected}
							getTransactionDetails={this.logic.getTransactionDetails}
							showModal={this.state.showModal}
							closeModal={this.logic.closeModal}
						/>
					</div>
				</div>
				<ModalComponent
					selected={this.state.selected}
					closeModal={this.logic.closeModal}
				/>
			</div>
		);
	}
}
