import React from "react";
import {
	
} from "../presentational/index.jsx";
import { TableComponent } from "../presentational/TableComponent.jsx";

class ListContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { transactions, selected, getTransactionDetails } = this.props;
		return (
			<div style={{ paddingBottom: 50 }}>
                <h2>Transaction List</h2>
                <table class="table">
                    <thead style={{ backgroundColor: "#d6cbd3"}}>
                        <tr key="table-header">
                            <th scope="col">Date</th>
                            <th scope="col">Number</th>
                            <th scope="col">Type</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Balance</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => <TableComponent transaction={transaction} selected={selected} onPressDetail={getTransactionDetails} />)}
                    </tbody>
                </table>                
            </div>
		);
	}
}

export default ListContainer;