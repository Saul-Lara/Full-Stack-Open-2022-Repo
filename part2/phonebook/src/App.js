import { useState } from 'react'

var isEqual = require('lodash.isequal')

const Person = ({ person }) => <li>{person.name} {person.number}</li>

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personsToShow = filter ? persons.filter(person => RegExp(filter, 'i').test(person.name)) : persons

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    if (persons.some((element) => isEqual(element, personObject))) {
      return alert(`${newName} is already added to phonebook`)
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange} />
      </div>
      <form onSubmit={addPerson}>
        <h3>
          Add a new contact
        </h3>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {personsToShow.map(person =>
        <Person key={person.id} person={person} />
      )}
    </div>
  )
}

export default App