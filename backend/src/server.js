import express from "express";
import noteRouter from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const server = express();
server.use(express.json());
const PORT = process.env.PORT || 5001;

connectDB();

server.use("/api/notes", noteRouter);

server.listen(PORT, () => {
  console.log("Server started on PORT: ", PORT);
});
