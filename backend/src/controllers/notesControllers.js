import Note from "../models/notes.js";

// get
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(201).json(notes);
  } catch (error) {
    console.log("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

// get note By Id
export const getNotebyId = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.statue(404).json({ message: "Note not found!" });
    res.status(200).json(note);
  } catch (error) {
    console.log("Error in getNotebyId controller", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

// create
export const createUser = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log("Error in createUser controller", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

// update
export const updateUser = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Note not found!" });

    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error in updateUser controller", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

// delete
export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await Note.findByIdAndDelete(req.params.id);

    if (!deleteUser)
      return res.status(404).json({ message: "Note not found!" });

    res.status(200).json(deleteUser);
  } catch (error) {
    console.log("Error in deleteUser controller", error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
