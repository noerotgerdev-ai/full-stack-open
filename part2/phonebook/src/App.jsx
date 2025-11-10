import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import contacts from "./services/contacts";
import Notification from "./components/Notification";
import ErrorNotification from "./components/ErrorNotification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);
  const [errorNotification, setErrorNotification] = useState(null);

  useEffect(() => {
    contacts
      .getAll()
      .then((res) => setPersons(res))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const addContact = {
      name: newName,
      number: newNumber,
    };
    if (newName === "") {
      alert(`Name is empty`);
      return;
    }
    if (newNumber === "") {
      alert(`Number is empty`);
      return;
    }
    if (persons.find((person) => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
      return;
    }

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    // This is the code for update number
    // if (persons.find((person) => person.name === newName)) {
    //   if (
    //     confirm(
    //       `${newName} is already added to phonebook, replace the old number with a new one?`
    //     )
    //   ) {
    //     const personExist = persons.find((person) => person.name === newName);
    //     const updateContact = { ...personExist, number: newNumber };
    //     contacts
    //       .update(updateContact.id, updateContact)
    //       .then((res) => {
    //         setPersons(
    //           persons.map((item) => (item.name === newName ? res : item))
    //         );
    //         setNewName("");
    //         setNewNumber("");
    //         setNotification(`Succes!! ${newName} number was updated.`);
    //         setTimeout(() => setNotification(null), 5000);
    //       })
    //       .catch((error) => {
    //         console.log(error.message);
    //         setErrorNotification(
    //           `Information of ${newName} has already been removed from server.`
    //         );
    //         setTimeout(() => {
    //           setErrorNotification(null);
    //           location.reload();
    //         }, 5000);
    //       });
    //   }
    //   return;
    // }

    contacts
      .create(addContact)
      .then((res) => {
        setPersons((prev) => [...prev, res]);
        setNewName("");
        setNewNumber("");
        setNotification(`Succes!! ${newName} was added.`);
        setTimeout(() => setNotification(null), 5000);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorNotification(`Some error happens creating the contact`);
        setTimeout(() => {
          setErrorNotification(null);
          location.reload();
        }, 5000);
      });
  };

  const handleDelete = (id) => {
    const personDelete = persons.find((item) => item.id === id);
    if (!personDelete) {
      alert("The person dont't exists");
      return;
    }
    if (!confirm(`Do you want delete ${personDelete.name}`)) return;

    contacts
      .deleteOne(id)
      .then(() => {
        const newPersons = persons.filter((item) => item.id !== id);
        setPersons(newPersons);
        setNotification(`Succes!! ${personDelete.name} number was deleted.`);
        setTimeout(() => setNotification(null), 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification message={notification} />
      <ErrorNotification message={errorNotification} />

      <Filter handleFilterChange={handleFilterChange} />

      <h2>Add a new</h2>

      <PersonForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>

      <Persons filter={filter} persons={persons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
