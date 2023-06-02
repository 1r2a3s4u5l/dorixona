const express = require("express");
const router = express.Router();
const districtRoutes = require("./district");
const medicinesRoutes = require("./medicines");
const regionRoutes = require("./region");
const medicinestypeRoutes = require("./medicinestype");
const pharmacyRoutes = require("./pharmacy");
const stockRoutes = require("./stock");

router.use("/district", districtRoutes);
router.use("/medicines", medicinesRoutes);
router.use("/region", regionRoutes);
router.use("/medicinestype", medicinestypeRoutes);
router.use("/pharmacy", pharmacyRoutes);
router.use("/stock", stockRoutes);
module.exports = router;
