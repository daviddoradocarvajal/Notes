import * as ContextMenu from "@radix-ui/react-context-menu";
import { cx, useNotification } from "@vechaiui/react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { NoteType, RouterContextType } from "../types";

type NotePropsType = {
  data: NoteType;
  setNotes: (notes: NoteType[]) => void;
  notes: NoteType[];
};

const Note = ({ data, setNotes, notes }: NotePropsType) => {
  const { setLoading } = useOutletContext<RouterContextType>();
  const notification = useNotification();
  const [editMode, setEditMode] = useState<Boolean>(false);
  const [title, setTitle] = useState<any>(data.titulo);
  const [description, setDescription] = useState<any>(data.descripcion);

  const handleDelete = async () => {
    setLoading(true);

    await fetch("http://localhost:8085/Notes/mvc/deleteNote", {
      method: "POST",
      body: String(data.id),
    });

    const newNotes: any = notes.filter((note) => note.id !== data.id);

    if (newNotes.length > 0) {
      setNotes(newNotes);
    } else {
      setNotes([]);
    }

    setLoading(false);
    notification({
      title: "Success",
      description: "Note deleted successfully.",
      status: "success",
      position: "top",
    });
  };

  const handleUpdate = () => {
    setEditMode(false);
  };

  const handleFavorite = async () => {
    setLoading(true);
    await fetch("http://localhost:8085/Notes/mvc/switchNoteFavorite", {
      method: "POST",
      body: String(data.id),
    });

    const newNotes = notes.map((note) => {
      if (note.id === data.id) {
        return { ...note, isFavorite: !note.isFavorite };
      }
      return note;
    });

    setNotes(newNotes);

    setLoading(false);
    notification({
      title: "Success",
      description: "Note marked as favorite successfully.",
      status: "success",
      position: "top",
    });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  if (editMode) {
    return (
      <>
        <div
          className={
            data.isFavorite
              ? "w-72 h-min shadow-lg ring-4 ring-yellow-300 shadow-slate-900 flex flex-col justify-between bg-yellow-100 rounded-lg border border-yellow-200 mb-6 py-5 px-4"
              : "w-72 h-min shadow-lg shadow-slate-900  flex flex-col justify-between bg-yellow-100 rounded-lg border border-yellow-200 mb-6 py-5 px-4"
          }
        >
          <div>
            <h4 className="text-gray-800 font-bold mb-3 text-2xl">
              {data.isFavorite && "⭐"}
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="rounded-lg p-2 bg-yellow-100 outline-none w-full ring-2 ring-slate-400 "
                placeholder={data.titulo}
              />
            </h4>
            <p className="text-gray-800 text-xl underline decoration-dotted decoration-1 decoration-yellow-800">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border-transparent focus:border-transparent focus:ring-2 focus:ring-slate-400 ring-2 ring-slate-400 rounded-lg p-2  outline-none  border-none text-gray-800 text-xl  bg-yellow-100  "
                placeholder={data.descripcion}
              ></textarea>
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="text-md"></p>
              <button
                onClick={handleUpdate}
                className="w-24 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-yellow-400  focus:ring-black"
                aria-label="edit note"
                role="button"
              >
                📝 Update
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!editMode) {
    return (
      <>
        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <div
              className={
                data.isFavorite
                  ? "w-72 h-min shadow-lg ring-4 ring-yellow-300 shadow-slate-900 flex flex-col justify-between bg-yellow-100 rounded-lg border border-yellow-200 mb-6 py-5 px-4"
                  : "w-72 h-min shadow-lg shadow-slate-900  flex flex-col justify-between bg-yellow-100 rounded-lg border border-yellow-200 mb-6 py-5 px-4"
              }
            >
              <div>
                <h4 className="text-gray-800 font-bold mb-3 text-2xl">
                  {data.isFavorite && "⭐"} {data.titulo}
                </h4>
                <p className="text-gray-800 text-xl underline decoration-dotted decoration-1 decoration-yellow-800">
                  {data.descripcion}
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between text-gray-800">
                  <p className="text-md mt-4">
                    <b>
                      {data.timestamp[2]}/{data.timestamp[1]}/
                      {data.timestamp[0]}
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content
            className={cx(
              "z-40 w-48 min-w-max py-1 rounded-lg outline-none",
              "bg-slate-100 font-bold  border-gray-200"
            )}
            alignOffset={-5}
          >
            <ContextMenu.Item
              onClick={handleFavorite}
              className={cx(
                "flex items-center  w-full px-3 h-8 flex-shrink-0 text-md text-left cursor-base focus:outline-none",
                "hover:bg-slate-300 transition hover:cursor-pointer"
              )}
            >
              <span className="flex-1 mr-2 text-black">
                {data.isFavorite
                  ? "❌ Remove from favorites"
                  : "⭐ Mark as favorite"}
              </span>
            </ContextMenu.Item>

            <ContextMenu.Item
              onClick={handleEdit}
              className={cx(
                "flex items-center  w-full px-3 h-8 flex-shrink-0 text-md text-left cursor-base focus:outline-none",
                "hover:bg-slate-300 transition hover:cursor-pointer"
              )}
            >
              <span className="flex-1 mr-2 text-black">✏️ Edit</span>
            </ContextMenu.Item>
            <ContextMenu.Item
              onClick={handleDelete}
              className={cx(
                "flex items-center  w-full px-3 h-8 flex-shrink-0 text-md text-left cursor-base focus:outline-none",
                "hover:bg-slate-300 transition hover:cursor-pointer"
              )}
            >
              <span className="flex-1 mr-2 text-black">🗑️ Delete</span>
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>
      </>
    );
  }

  return <></>;
};

export default Note;
