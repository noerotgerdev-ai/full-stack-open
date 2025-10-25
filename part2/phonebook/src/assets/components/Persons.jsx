const Persons = ({filter, persons}) => {

      const filtered = filter
    ? persons
        .filter((person) =>
          person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map((item) => (
          <li key={item.id}>
            {item.id}- {item.name}, {item.number}
          </li>
        ))
    : persons.map((item) => (
        <li key={item.id}>
          {item.id}- {item.name}, {item.number}
        </li>
      ));

    return (
        <ul>{filtered}</ul>
    )
}

export default Persons