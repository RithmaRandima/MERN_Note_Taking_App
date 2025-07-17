import express from "express";
import noteRouter from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const server = express();
server.use(express.json());
connectDB();

server.use("/api/notes", noteRouter);

server.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});

// mongodb+srv://programmingrandy:mR0vS29D0b6lTOM2@cluster0.sbxqysb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
