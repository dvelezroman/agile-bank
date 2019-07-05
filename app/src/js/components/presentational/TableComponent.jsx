import React from "react";

export const TableComponent = ({ transaction, onPressDetail }) => {
	return (
		<tr
			key={transaction.number}
			style={{
				backgroundColor:
					transaction.type === "deposit"
						? "#b5e7a0"
						: transaction.type === "withdrawal"
						? "#e3eaa7"
						: "#eca1a6"
			}}
		>
			<td className="text-center">
				{transaction.date ? transaction.date : "N/D"}
			</td>
			<td className="text-center">{transaction.number}</td>
			<td className="text-center">{transaction.type}</td>
			<td className="text-center">{transaction.amount}</td>
			<td className="text-center">{transaction.balance}</td>
			<td className="text-center" style={{ backgroundColor: "#034f84" }}>
				<button
					onClick={() => onPressDetail(transaction.number)}
					type="button"
					className="btn btn-primary"
					data-toggle="modal"
					data-target="#exampleModal"
				>
					Details
				</button>
			</td>
		</tr>
	);
};
