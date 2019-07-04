import React from 'react';

export const TableComponent = ({ transaction, closeModal, onPressDetail }) => {
    return (
        <tr key={transaction.number} 
            style={{ backgroundColor: transaction.type === "deposit" ? "#b5e7a0" : transaction.type === "withdrawal" ? "#e3eaa7" : "#eca1a6" }}
        >
            <td>{transaction.date ? transaction.date : "N/D"}</td>
            <td>{transaction.number}</td>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.balance}</td>
            <td style={{ backgroundColor: "#034f84" }}>
                <button 
                    onClick={() => onPressDetail(transaction.number)}
                    type="button" 
                    className="btn btn-primary" 
                    data-toggle="modal" 
                    data-target="#exampleModalScrollable"
                >
                    Details
                </button>
            </td>
        </tr>
    )
}