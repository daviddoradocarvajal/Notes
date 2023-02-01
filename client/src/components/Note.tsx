import * as ContextMenu from "@radix-ui/react-context-menu";
import { cx, useNotification } from "@vechaiui/react";
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

  const handleDelete = () => {
    setLoading(true);

    setTimeout(() => {
      notification({
        title: "Success",
        description: "Note deleted successfully.",
        status: "success",
        position: "top",
      });

      setLoading(false);
    }, 200);
  };

  const handleFavorite = () => {
    const newNotes = notes
      .map((note) => {
        if (note.id === data.id) {
          return { ...note, isFavorite: !note.isFavorite };
        }
        return note;
      })
      .sort((a, b) => Number(b.isFavorite) - Number(a.isFavorite));
    setNotes(newNotes);
  };

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
                {data.isFavorite && "⭐"} {data.title}
              </h4>
              <p className="text-gray-800 text-xl underline decoration-dotted decoration-1 decoration-yellow-800">
                {data.description}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between text-gray-800">
                <p className="text-md">{data.createdAt.getDay()} </p>
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
};

export default Note;
