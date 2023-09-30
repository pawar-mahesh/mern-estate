import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoute from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.mongodb_connection_string)
  .then(() => {
    console.log("Connected to mongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use("/api/user", UserRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
