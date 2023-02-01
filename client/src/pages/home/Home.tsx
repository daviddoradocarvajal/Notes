import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Note from "../../components/Note";
import { NoteType, RouterContextType } from "../../types";

const Home = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const { setLoading } = useOutletContext<RouterContextType>();

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

  return (
    <div className="flex flex-wrap gap-x-6">
      {notes.map((note: NoteType) => {
        return (
          <Note key={note.id} data={note} setNotes={setNotes} notes={notes} />
        );
      })}
    </div>
  );
};

export default Home;
