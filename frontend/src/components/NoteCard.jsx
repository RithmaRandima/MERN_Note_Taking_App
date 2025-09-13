import { PenSquareIcon, TrashIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils.js";
import api from "../lib/axios.js";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handelDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note Delete successfully");
    } catch (error) {
      console.log("Error in handelDelte", error);
      toast.error("Note Delete successfully");
    }
  };
  return (
    <Link
      to={`/note/${note._id}`}
      className="card-bg-base-100 hover:shadow-lg transition-all duraqtion-200 border-t border-solid border-[#00ff9d]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>

        <div className="card-actions  justify-between items-center mt-4">
          <span className="text-sm text-base-content mt-4">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              onClick={(e) => handelDelete(e, note._id)}
              className="btn btn-ghost btn-xs text-error"
            >
              <TrashIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
