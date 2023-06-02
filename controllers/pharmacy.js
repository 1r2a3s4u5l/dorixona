const db = require("../config/db");

exports.getAllpharmacy = (req, res) => {
  db.query("SELECT * FROM pharmacy", (error, results) => {
    if (error) {
      console.log("Error retrieving pharmacy:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.createpharmacy = (req, res) => {
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;
  db.query(
    "INSERT INTO pharmacy(name,address,location,phone,email,region_id,district_id) VALUES(?,?,?,?,?,?,?)",
    [name, address, location, phone, email, region_id, district_id],
    (error, results) => {
      if (error) {
        console.log("Error creating pharmacy: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "pharmacy created successfully",
        pharmacyId: results.insertId,
      });
    }
  );
};

exports.getpharmacyByid = (req, res) => {
  const pharmacyId = req.params.id;
  db.query(
    "SELECT * FROM pharmacy WHERE id = ?",
    [pharmacyId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving pharmacy: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "pharmacy not found" });
      }
      res.json(results[0]);
    }
  );
};

exports.updatepharmacy = (req, res) => {
  const pharmacyId = req.params.id;
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;
  db.query(
    "UPDATE pharmacy SET name = ?, address = ?,location = ?,phone = ?,email = ?,region_id = ?,district_id = ? WHERE id = ?",
    [name, address, location, phone, email, region_id, district_id, pharmacyId],
    (error) => {
      if (error) {
        console.log("Error updating pharmacy: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "pharmacy updating successfully" });
    }
  );
};

exports.deletepharmacy = (req, res) => {
  const pharmacyId = req.params.id;
  db.query("DELETE FROM pharmacy WHERE id = ?", [pharmacyId], (error) => {
    if (error) {
      console.log("Error deleting pharmacy: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "pharmacy deleted successfully" });
  });
};
