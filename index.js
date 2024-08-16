const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example hello listening on port ${port}`);
});

mongoose
  .connect(
    "mongodb+srv://akashrebala:2PKJDuueYRWtlryY@akashcrud.ctxge.mongodb.net/Node-API?retryWrites=true&w=majority&appName=AkashCRUD"
  )
  .then(() => console.log("Connected!"))
  .catch(() => console.log("connection failed!"));
