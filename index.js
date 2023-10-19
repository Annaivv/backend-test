const express = require("express");
const dealsRouter = require("./routes/routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", dealsRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
