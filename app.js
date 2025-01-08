const express = require("express");
const path = require("node:path");
const app = express();
const indexRouter = require("./routes/indexRouter.js");
const newRouter = require("./routes/messageRouter.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);


const port = 3000;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

