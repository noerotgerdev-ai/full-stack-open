import Person from "./Person";

const Persons = ({ filter, persons, handleDelete }) => {
  const filtered = filter
    ? persons
        .filter((person) =>
          person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map((item, i) => <Person key={item.id} item={item} index={i} handleDelete={handleDelete} />)
    : persons.map((item, i) => <Person key={item.id} item={item} index={i} handleDelete={handleDelete} />);

  return <ul>{filtered}</ul>;
};

export default Persons;
