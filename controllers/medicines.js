const db = require("../config/db");

exports.getAllmedicines = (req, res) => {
  db.query("SELECT * FROM medicines", (error, results) => {
    if (error) {
      console.log("Error retrieving medicines:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.createmedicines = (req, res) => {
  const { name, manufacturer, madicine_type_id, price, expiry_date, info } =
    req.body;
  db.query(
    "INSERT INTO medicines(name,manufacturer,madicine_type_id,price,expiry_date,info) VALUES(?,?,?,?,?,?)",
    [name, manufacturer, madicine_type_id, price, expiry_date, info],
    (error, results) => {
      if (error) {
        console.log("Error creating medicines: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "medicines created successfully",
        medicinesId: results.insertId,
      });
    }
  );
};

exports.getmedicinesByid = (req, res) => {
  const medicinesId = req.params.id;
  db.query(
    "SELECT * FROM medicines WHERE id = ?",
    [medicinesId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving medicines: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "medicines not found" });
      }
      res.json(results[0]);
    }
  );
};

exports.updatemedicines = (req, res) => {
  const medicinesId = req.params.id;
  const { name, manufacturer, madicine_type_id, price, expiry_date, info } =
    req.body;
  db.query(
    "UPDATE medicines SET name = ?, manufacturer = ?,madicine_type_id = ?,price = ?,expiry_date = ?,info = ? WHERE id = ?",
    [
      name,
      manufacturer,
      madicine_type_id,
      price,
      expiry_date,
      info,
      medicinesId,
    ],
    (error) => {
      if (error) {
        console.log("Error updating medicines: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "medicines updating successfully" });
    }
  );
};

exports.deletemedicines = (req, res) => {
  const medicinesId = req.params.id;
  db.query("DELETE FROM medicines WHERE id = ?", [medicinesId], (error) => {
    if (error) {
      console.log("Error deleting medicines: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "medicines deleted successfully" });
  });
};
