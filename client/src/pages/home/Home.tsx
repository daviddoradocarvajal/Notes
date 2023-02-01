import { useState } from "react";
import Note from "../../components/Note";
import { NoteType } from "../../types";

const Home = () => {
  let notesDefault: NoteType[] = [
    {
      id: 1,
      title: "Learn Spring Boot",
      description:
        "This note is an example to lear spring boot blah blah i don't know what else to say here",
      createdAt: new Date(),
      isFavorite: true,
    },
    {
      id: 2,
      title: "Code this app",
      description: "Simple, just finish this app",
      createdAt: new Date(),
      isFavorite: false,
    },
  ];

  const [notes, setNotes] = useState<NoteType[]>(notesDefault);

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
