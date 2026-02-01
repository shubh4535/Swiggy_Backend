import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("TEST SERVER WORKING");
});

app.listen(8080, () => {
  console.log("TEST SERVER RUNNING ON 8080");
});
