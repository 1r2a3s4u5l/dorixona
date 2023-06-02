const db = require("../config/db");

exports.getAllregion = (req, res) => {
  db.query("SELECT * FROM region", (error, results) => {
    if (error) {
      console.log("Error retrieving region:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.createregion = (req, res) => {
  const { id, name } = req.body;
  db.query(
    "INSERT INTO region(id,name) VALUES(?,?)",
    [id, name],
    (error, results) => {
      if (error) {
        console.log("Error creating region: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "region created successfully",
        regionId: results.insertId,
      });
    }
  );
};

exports.getregionByid = (req, res) => {
  const regionId = req.params.id;
  db.query(
    "SELECT * FROM region WHERE id = ?",
    [regionId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving region: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "region not found" });
      }
      res.json(results[0]);
    }
  );
};

exports.updateregion = (req, res) => {
  const regionId = req.params.id;
  const { id, name } = req.body;
  db.query(
    "UPDATE region SET id = ?, name = ? WHERE id = ?",
    [id, name, regionId],
    (error) => {
      if (error) {
        console.log("Error updating region: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "region updating successfully" });
    }
  );
};

exports.deleteregion = (req, res) => {
  const regionId = req.params.id;
  db.query("DELETE FROM region WHERE id = ?", [regionId], (error) => {
    if (error) {
      console.log("Error deleting region: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "region deleted successfully" });
  });
};
