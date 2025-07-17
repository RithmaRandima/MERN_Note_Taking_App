import express from "express";
import {
  createUser,
  deleteUser,
  getAllNotes,
  getNotebyId,
  updateUser,
} from "../controllers/notesControllers.js";

const noteRouter = express.Router();

// get
noteRouter.get("/", getAllNotes);

// get Note by ID
noteRouter.get("/:id", getNotebyId);

// create
noteRouter.post("/", createUser);

// update
noteRouter.put("/:id", updateUser);

// delete
noteRouter.delete("/:id", deleteUser);

export default noteRouter;
