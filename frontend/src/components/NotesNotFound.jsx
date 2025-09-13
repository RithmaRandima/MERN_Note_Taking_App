import { Link, NotebookIcon, PlusCircleIcon } from "lucide-react";
import React from "react";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md max-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon />
      </div>

      <h3 className="text-2xl font-bold">No Notes Yet</h3>
      <p className="text-base-content/70">
        Ready to organize your thoughts Create your first not to get started on
        your journey.
      </p>
      <Link to={"/create"} className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
