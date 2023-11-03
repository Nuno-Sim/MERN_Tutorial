import express from "express";
import { PORT, mongoDB_URL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log("Hi");
  return response.status(420).send("Pie");
});

console.log("Going to connect to database.");
mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("App connecterd to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
