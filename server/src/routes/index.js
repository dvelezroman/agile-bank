const Router = require("express");
const router = Router();

// import all routers;
const usersRoutes = require("./users");
const loginRoutes = require("./login");
const transactionRoutes = require("./transaction");
// ============================================
router.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
router.use("/users", usersRoutes);
router.use("/transaction", transactionRoutes);
router.use("/login", loginRoutes);
// load each router on a route
// i.e: router.use('/auth', authRouter);
//router.use('/', );

router.get("/test", (req, res, next) => {
	res.status(200).json({
		message: "Success",
		route: "/test"
	});
});

module.exports = router;
