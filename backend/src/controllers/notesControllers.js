// get
export const getAllNotes = async (req, res) => {
  res.status(201).json({ message: "you have 20 notes!" });
};

// create
export const createUser = async (req, res) => {
  res.status(201).json({ message: "Note Created Successfully!" });
};

// update
export const updateUser = async (req, res) => {
  res.status(201).json({ message: "Note Update Successfully!" });
};

// delete
export const deleteUser = async (req, res) => {
  res.status(201).json({ message: "Note delete Successfully!" });
};
