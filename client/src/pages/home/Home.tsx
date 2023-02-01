import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Note from "../../components/Note";
import NoteSkeleton from "../../components/NoteSkeleton";
import { NoteType, RouterContextType } from "../../types";

const Home = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const { setLoading, loading } = useOutletContext<RouterContextType>();

  const loadNotes = async () => {
    return fetch("http://localhost:8085/Notes/mvc/listNotes").then((data) =>
      data.json()
    );
  };

  useEffect(() => {
    setLoading(true);

    loadNotes().then((res) => {
      setNotes(res);
      setLoading(false);
    });
  }, []);

  if ((!notes && !loading) || (notes.length <= 0 && !loading)) {
    return (
      <div className="flex flex-wrap gap-x-6">
        You have no notes 😟, start by creating a new note 📝 !
      </div>
    );
  }

  if (notes.length > 0) {
    return (
      <>
        <div className="flex flex-wrap gap-x-6">
          {notes.map((note: NoteType) => {
            return (
              <Note
                key={note.id}
                data={note}
                setNotes={setNotes}
                notes={notes}
              />
            );
          })}
        </div>
      </>
    );
  }
};

export default Home;
