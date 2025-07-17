import express from "express";

const noteRouter = express.Router();

// get
noteRouter.get("/", (_, res) => {
  res.status(201).json({ message: "you have 20 notes!" });
});

// create
noteRouter.post("/", (req, res) => {
  res.status(201).json({ message: "Note Created Successfully!" });
});

// update
noteRouter.put("/:id", (req, res) => {
  res.status(201).json({ message: "Note Update Successfully!" });
});

// delete
noteRouter.delete("/:id", (req, res) => {
  res.status(201).json({ message: "Note delete Successfully!" });
});

export default noteRouter;
