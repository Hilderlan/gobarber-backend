import express from "express";
import routes from "./routes";

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "Hello World!" });
});

app.listen(5000, () => {
  console.log("Server started!");
});
