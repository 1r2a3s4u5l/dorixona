const db = require("../config/db");

exports.getAllstock = (req, res) => {
  db.query("SELECT * FROM stock", (error, results) => {
    if (error) {
      console.log("Error retrieving stock:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.createstock = (req, res) => {
  const { pharmacy_id, medicine_id, quantity } = req.body;
  db.query(
    "INSERT INTO stock(pharmacy_id,medicine_id,quantity) VALUES(?,?,?)",
    [pharmacy_id, medicine_id, quantity, medicine_id],
    (error, results) => {
      if (error) {
        console.log("Error creating stock: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "stock created successfully",
        stockId: results.insertId,
      });
    }
  );
};

exports.getstockByid = (req, res) => {
  const stockId = req.params.id;
  db.query("SELECT * FROM stock WHERE id = ?", [stockId], (error, results) => {
    if (error) {
      console.log("Error retrieving stock: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "stock not found" });
    }
    res.json(results[0]);
  });
};

exports.updatestock = (req, res) => {
  const stockId = req.params.id;
  const { pharmacy_id, medicine_id, quantity } = req.body;
  db.query(
    "UPDATE stock SET pharmacy_id = ?, medicine_id = ?,quantity = ? WHERE id = ?",
    [pharmacy_id, medicine_id, quantity, stockId],
    (error) => {
      if (error) {
        console.log("Error updating stock: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "stock updating successfully" });
    }
  );
};

exports.deletestock = (req, res) => {
  const stockId = req.params.id;
  db.query("DELETE FROM stock WHERE id = ?", [stockId], (error) => {
    if (error) {
      console.log("Error deleting stock: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "stock deleted successfully" });
  });
};
