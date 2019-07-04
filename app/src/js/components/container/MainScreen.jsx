import React from "react";
import FormContainer from "./FormContainer.jsx";

export default class MainScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div class="container-fluid">
				<div class="row justify-content-md-center">
					<h1>Accounting Notebook</h1>
				</div>
				<div class="row justify-content-md-center">
					<FormContainer />
				</div>
				<div class="row justify-content-md-center">
					<h4>Transactions</h4>
				</div>
			</div>
		);
	}
}
