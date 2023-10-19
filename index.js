const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dealsRouter = require("./routes/routes");

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", dealsRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(500).json({ message });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
