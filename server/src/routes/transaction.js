const { Router } = require("express");
const router = Router();

const TransactionDAO = require("../dao/TransactionDAO");

router.get("/test", (req, res, next) => {
	res.status(200).json({
		message: "Success",
		route: "/transaction/test"
	});
});

router.get("/getBalance", (req, res, next) => {
	res.status(200).json({
		status: true,
		data: {
			balance: TransactionDAO.getBalance()
		}
	});
});

router.get("/all", (req, res, next) => {
	res.status(200).json({
		status: true,
		data: {
			transactions: TransactionDAO.getAll()
		}
	});
});

router.get("/:number", (req, res, next) => {
	const index = TransactionDAO.getDetails(req.params.number);
	let status = true;
	if (index === -1) {
		status = false,
		data = {
			message: "Wrong transaction number"
		}
	} else {
		data = { details: TransactionDAO.transactions[index] }
	}
	res.status(200).json({
		status,
		data
	});
});

router.get("/filter", (req, res, next) => {
	const { filter } = req.body;
	const response = {
		status: true,
		data: {
			transactions: TransactionDAO.filterBy(filter)
		}
	};
	res.status(200).json(response);
});

router.post("/save", (req, res, next) => {
	const { transaction } = req.body;
	let response;
	response = TransactionDAO.isTransactionPosible(
		transaction.amount,
		transaction.type
	)
		? {
				status: true,
				balance: TransactionDAO.save(transaction),
				msg: "Succesful transaction"
		}
		: { status: false, msg: "You do not have enough money" };
	res.status(201).json(response);
});

router.delete("/remove", (req, res, next) => {
	const { transaction } = req.body;
	response = {
		status: true,
		msg: "Transaction removed",
		data: {
			transactions: TransactionDAO.removeTransaction(transaction)
		}
	};
	res.status(200).json(response);
});

module.exports = router;
