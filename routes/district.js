const express = require("express");
const router = express.Router();
const districtControllers = require("../controllers/district");

router.get("/", districtControllers.getAlldistrict);

router.get("/:id", districtControllers.getdistrictByid);

router.put("/:id", districtControllers.updatedistrict);

router.delete("/:id", districtControllers.deletedistrict);

router.post("/", districtControllers.createdistrict);

module.exports = router;
