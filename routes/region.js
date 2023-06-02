const express = require("express");
const router = express.Router();
const regionControllers = require("../controllers/region");

router.get("/", regionControllers.getAllregion);

router.get("/:id", regionControllers.getregionByid);

router.put("/:id", regionControllers.updateregion);

router.delete("/:id", regionControllers.deleteregion);

router.post("/", regionControllers.createregion);

module.exports = router;
