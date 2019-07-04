import React from "react";
import { reverse } from 'lodash';
import FormContainer from "./FormContainer.jsx";
import ListContainer from "./ListContainer.jsx";
import { Logic } from "../logic/Logic.js"

export default class MainScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.logic = new Logic(this);
	}

	async componentDidMount () {
		await this.logic.init();
	}

	render() {
console.log(this.state);
		return (
			<div class="container-fluid">
				<div class="row justify-content-md-center">
					<h1>Accounting Notebook</h1>
				</div>
				<div class="row justify-content-md-center">
					<FormContainer 
						transaction={this.state.transaction} 
						handleChange={this.logic.handleChange} 
						onPressButton={this.logic.onPressButton} 
					/>
				</div>
				<div class="row justify-content-md-center">
					<ListContainer 
						transactions={this.state.transactions} 
						selected={this.state.selected}
						getTransactionDetails={this.logic.getTransactionDetails} 
						showModal={this.state.showModal}
						closeModal={this.logic.closeModal}
					/>
				</div>
				
			</div>
		);
	}
}
