const express = require("express");
const router = express.Router();
const medicinesControllers = require("../controllers/medicines");

router.get("/", medicinesControllers.getAllmedicines);

router.get("/:id", medicinesControllers.getmedicinesByid);

router.put("/:id", medicinesControllers.updatemedicines);

router.delete("/:id", medicinesControllers.deletemedicines);

router.post("/", medicinesControllers.createmedicines);

module.exports = router;