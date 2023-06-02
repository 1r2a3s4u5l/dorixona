const express = require("express");
const router = express.Router();
const pharmacyControllers = require("../controllers/pharmacy");

router.get("/", pharmacyControllers.getAllpharmacy);

router.get("/:id", pharmacyControllers.getpharmacyByid);

router.put("/:id", pharmacyControllers.updatepharmacy);

router.delete("/:id", pharmacyControllers.deletepharmacy);

router.post("/", pharmacyControllers.createpharmacy);

module.exports = router;
