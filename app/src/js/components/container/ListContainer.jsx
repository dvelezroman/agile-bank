import React from "react";
import {} from "../presentational/index.jsx";
import { TableComponent } from "../presentational/TableComponent.jsx";

const styles = {
	header: {
		backgroundColor: "#d6cbd3",
		position: "sticky",
		top: 0
	}
};

class ListContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { transactions, selected, getTransactionDetails } = this.props;
		return (
			<div>
				<div>
					<h4>Transaction List</h4>
				</div>
				<div style={{ height: 600, overflowY: "auto" }}>
					<table className="table">
						<thead>
							<tr key="table-header">
								<th className="text-center" style={styles.header} scope="col">
									Date
								</th>
								<th className="text-center" style={styles.header} scope="col">
									Number
								</th>
								<th className="text-center" style={styles.header} scope="col">
									Type
								</th>
								<th className="text-center" style={styles.header} scope="col">
									Amount
								</th>
								<th className="text-center" style={styles.header} scope="col">
									Balance
								</th>
								<th className="text-center" style={styles.header} scope="col">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{transactions.map(transaction => (
								<TableComponent
									key={`tableComponent_${transaction.number}`}
									transaction={transaction}
									selected={selected}
									onPressDetail={getTransactionDetails}
								/>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default ListContainer;
