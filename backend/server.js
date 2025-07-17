import express from "express";
import noteRouter from "./routes/noteRoutes.js";

const server = express();
server.use(express.json());

server.use("/api/notes", noteRouter);

server.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});
