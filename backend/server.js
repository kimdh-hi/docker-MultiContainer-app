const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const app = express();
app.use(bodyParser.json());

db.pool.query(
  "CREATE TABLE contents (id INTEGER AUTO_INCREMENT, value TEXT, PRIMARY KEY (id));",
  (err, results, fields) => {
    if (err) console.log(err);
    console.log(results);
  }
);

app.get("/api/values", (req, res, next) => {
  db.pool.query("SELECT * FROM contents;", (err, results, fields) => {
    if (err) return res.status(500).send(err);
    return res.json(results);
  });
});

app.post("/api/value", (req, res, next) => {
  console.log("save query: ", req.body.value);
  db.pool.query(
    `INSERT INTO contents(value) VALUE(${req.body.value});`,
    (err, results, fields) => {
      if (err) return res.status(500).send(err);
      return res.json({ success: true, value: req.body.value });
    }
  );
});

app.listen(5000, () => {
  console.log("server running on 5000");
});
