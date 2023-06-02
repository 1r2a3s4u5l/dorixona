const express = require("express");
const router = express.Router();
const medicinestypeControllers = require("../controllers/medicinestype");

router.get("/", medicinestypeControllers.getAllmedicinestype);

router.get("/:id", medicinestypeControllers.getmedicinestypeByid);

router.put("/:id", medicinestypeControllers.updatemedicinestype);

router.delete("/:id", medicinestypeControllers.deletemedicinestype);

router.post("/", medicinestypeControllers.createmedicinestype);

module.exports = router;
