import express from "express";
import noteRouter from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const server = express();
server.use(express.json());
const PORT = process.env.PORT || 5001;

server.use("/api/notes", noteRouter);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
  });
});
