import Note from "./components/Note"

const App = ({ notes }) => {
  const result = notes.map((note) => note.content);
  console.log(result);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((item) => (
          <Note key={item.id} note={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;
