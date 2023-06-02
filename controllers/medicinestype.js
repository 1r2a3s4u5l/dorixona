const db = require("../config/db");

exports.getAllmedicinestype = (req, res) => {
  db.query("SELECT * FROM medicinestype", (error, results) => {
    if (error) {
      console.log("Error retrieving medicinestype:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.createmedicinestype = (req, res) => {
  const { name } = req.body;
  db.query(
    "INSERT INTO medicinestype(name) VALUES(?)",
    [name],
    (error, results) => {
      if (error) {
        console.log("Error creating medicinestype: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "medicinestype created successfully",
        medicinestypeId: results.insertId,
      });
    }
  );
};

exports.getmedicinestypeByid = (req, res) => {
  const medicinestypeId = req.params.id;
  db.query(
    "SELECT * FROM medicinestype WHERE id = ?",
    [medicinestypeId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving medicinestype: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "medicinestype not found" });
      }
      res.json(results[0]);
    }
  );
};

exports.updatemedicinestype = (req, res) => {
  const medicinestypeId = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE medicinestype SET name = ? WHERE id = ?",
    [name, medicinestypeId],
    (error) => {
      if (error) {
        console.log("Error updating medicinestype: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "medicinestype updating successfully" });
    }
  );
};

exports.deletemedicinestype = (req, res) => {
  const medicinestypeId = req.params.id;
  db.query("DELETE FROM medicinestype WHERE id = ?", [medicinestypeId], (error) => {
    if (error) {
      console.log("Error deleting medicinestype: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "medicinestype deleted successfully" });
  });
};
