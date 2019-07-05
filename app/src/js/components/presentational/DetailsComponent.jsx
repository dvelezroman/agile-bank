import React from "react";

export const DetailsComponent = ({ selected }) => {
	return (
		<table className="table">
			<thead style={{ backgroundColor: "#d6cbd3" }}>
				<tr key="table-header">
					<th scope="col">Date</th>
					<th scope="col">Number</th>
					<th scope="col">Type</th>
					<th scope="col">Description</th>
					<th scope="col">Method</th>
					<th scope="col">Amount</th>
					<th scope="col">Balance</th>
				</tr>
			</thead>
			<tbody>
				<tr
					key={selected.number}
					style={{
						backgroundColor:
							selected.type === "deposit"
								? "#b5e7a0"
								: selected.type === "withdrawal"
								? "#e3eaa7"
								: "#eca1a6"
					}}
				>
					<td>{selected.date ? selected.date : "N/D"}</td>
					<td>{selected.number}</td>
					<td>{selected.type}</td>
					<td>{selected.description}</td>
					<td>{selected.method}</td>
					<td>{selected.amount}</td>
					<td>{selected.balance}</td>
				</tr>
			</tbody>
		</table>
	);
};
