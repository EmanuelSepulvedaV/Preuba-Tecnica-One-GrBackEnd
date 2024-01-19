const express = require("express");
const multer = require("multer");
const cors = require("cors");

const routes = require("./routes/index");
const app = express();

app.use(cors("*"));

app.use("/api/v1/", routes());

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("Server listening on port", "http://localhost:" + port);
});
