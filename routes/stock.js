const express = require("express");
const router = express.Router();
const stockControllers = require("../controllers/stock");

router.get("/", stockControllers.getAllstock);

router.get("/:id", stockControllers.getstockByid);

router.put("/:id", stockControllers.updatestock);

router.delete("/:id", stockControllers.deletestock);

router.post("/", stockControllers.createstock);

module.exports = router;
