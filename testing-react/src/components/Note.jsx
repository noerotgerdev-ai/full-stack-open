const Note = ({ note }) => {
  return <li>{note.id}- {note.content}</li>;
};

export default Note