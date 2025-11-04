import { useEffect, useState } from "react";
import Note from "./components/Note";
import noteServices from "./services/notes";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

  const hook = () => {
    noteServices.
    getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  };

  useEffect(hook, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };
    noteServices.
    create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const toogleImportanceOf = (id) => {
    const note = notes.find(note => note.id === id)
    const changedNote = {...note, important: !note.important}

    noteServices.
    update(id, changedNote)
    .then(returnedNote => {
      const notesUpdated= notes.map(note => note.id !== id ? note : returnedNote )
      setNotes(notesUpdated)
    })
    .catch(err => {
      setErrorMessage(
        `The note ${note.content} was already deleted from server.`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000)
      setNotes(notes.filter(note => note.id !== id))
      console.log(err)
    })
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ol>
        {notesToShow.map((note, index) => (
          <Note key={index} note={note} toogleImportance={() => toogleImportanceOf(note.id)} />
        ))}
      </ol>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
          placeholder="New note"
        />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;
