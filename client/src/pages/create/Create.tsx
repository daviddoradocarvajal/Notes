import { useState } from "react";
import { useNavigate, useNavigation, useOutletContext } from "react-router-dom";
import { RouterContextType } from "../../types";

const Create = () => {
  const { setLoading } = useOutletContext<RouterContextType>();
  const navigate = useNavigate();
  const [title, setTitle] = useState<any>("");
  const [description, setDescription] = useState<any>("");

  const writeNote = async () => {
    setLoading(true);

    await fetch("http://localhost:8085/Notes/mvc/insertNote", {
      method: "POST",
      body: JSON.stringify({
        titulo: title,
        descripcion: description,
        isFavorite: false,
      }),
    });

    setLoading(false);
    navigate("/");
  };

  return (
    <div className="w-1/2  h-min flex flex-col justify-between bg-yellow-200 rounded-lg border border-yellow-200 mb-6 py-5 px-4">
      <div>
        <h4 className="text-gray-800 font-bold mb-3 text-2xl">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
            className="rounded-lg p-2 bg-yellow-100 outline-none w-1/2 "
          />
        </h4>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Note body"
          rows={10}
          className="w-full border-transparent focus:border-transparent focus:ring-0 rounded-lg p-2  outline-none  border-none text-gray-800 text-xl  bg-yellow-100  "
        />
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-800">
          <p className="text-md"></p>
          <button
            onClick={writeNote}
            className="w-20 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-yellow-400  focus:ring-black"
            aria-label="edit note"
            role="button"
          >
            📝 Write
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
