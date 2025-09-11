import express from "express";
import noteRouter from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 5001;

server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:5173",
  })
);

server.use("/api/notes", noteRouter);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
  });
});
