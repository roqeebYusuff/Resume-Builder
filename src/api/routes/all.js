const { Router } = require("express");
const pdfRoute = require("./pdfRoute");

let router = new Router();

router.use("/resume", pdfRoute);

module.exports = router;
