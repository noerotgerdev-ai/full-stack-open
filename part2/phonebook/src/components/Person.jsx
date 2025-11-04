const Person = ({item, index, handleDelete}) => {
  return (
    <li>
      {index +1}- {item.name}, {item.number} <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  );
};

export default Person