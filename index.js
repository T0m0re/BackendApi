const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

const productRoutes = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello From Node API");
});

mongoose
  .connect(
    "mongodb+srv://hassanwahab147:7Lwdc8W20G4zvxQP@backenddb.tiogbub.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });

// const express = require("express");
// const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
// const productRoute = require("./routes/product.route.js");
// const app = express();

// // middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // routes
// app.use("/api/products", productRoute);

// app.get("/", (req, res) => {
//   res.send("Hello from Node API Server Updated");
// });

// mongoose
//   .connect(
//     "mongodb+srv://haris2iftikhar:GClTzr15XhkjvN6k@backenddb.nrurtot.mongodb.net/Node-API?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("Connected to database!");
//     app.listen(3000, () => {
//       console.log("Server is running on port 3000");
//     });
//   })
//   .catch(() => {
//     console.log("Connection failed!");
//   });
