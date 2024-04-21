import { useEffect, useState } from "react";
import "./App.css";
import { createPerson, deletePerson, getPeople } from "./api";

function App() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPeople()
      .then((data) => setPeople(data))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newPerson = await createPerson(name);
    setPeople([...people, newPerson]);
    setName("");
  };

  const onDelete = async (id) => {
    await deletePerson(id);
    setPeople(people.filter((person) => person.id !== id));
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>People list</h1>
      {error && (
        <div className="error">
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      )}
      <div className="card">
        <form onSubmit={onSubmit}>
          <input
            style={{ marginRight: "1rem" }}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn-add" type="submit">Add</button>
        </form>
        <ul>
          {people &&
            people.map((person) => (
              <li className="person" key={person.id}>
                <span>{person.name}</span>
                <button
                  className="btn-danger"
                  onClick={() => onDelete(person.id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
