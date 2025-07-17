import express from "express";

const server = express();

server.get("/api/notes", (req, res) => {
  res.send("got 5 notes");
});

server.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});
