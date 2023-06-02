const db = require("../config/db");

exports.getAlldistrict = (req, res) => {
  db.query("SELECT * FROM district", (error, results) => {
    if (error) {
      console.log("Error retrieving district:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.createdistrict = (req, res) => {
  const { name, region_id } = req.body;
  db.query(
    "INSERT INTO district(name,region_id) VALUES(?,?)",
    [name, region_id],
    (error, results) => {
      if (error) {
        console.log("Error creating district: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "district created successfully",
        districtId: results.insertId,
      });
    }
  );
};

exports.getdistrictByid = (req, res) => {
  const districtId = req.params.id;
  db.query(
    "SELECT * FROM district WHERE id = ?",
    [districtId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving district: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "district not found" });
      }
      res.json(results[0]);
    }
  );
};

exports.updatedistrict = (req, res) => {
  const districtId = req.params.id;
  const { name, region_id } = req.body;
  db.query(
    "UPDATE district SET name = ?, region_id = ? WHERE id = ?",
    [name, region_id, districtId],
    (error) => {
      if (error) {
        console.log("Error updating district: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "district updating successfully" });
    }
  );
};

exports.deletedistrict = (req, res) => {
  const districtId = req.params.id;
  db.query("DELETE FROM district WHERE id = ?", [districtId], (error) => {
    if (error) {
      console.log("Error deleting district: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "district deleted successfully" });
  });
};
