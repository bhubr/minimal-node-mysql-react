const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { port } = require("./settings");
const { getPeople, createPerson, deletePerson } = require("./person-model");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/people", async (req, res) => {
  const people = await getPeople();
  res.json(people);
});

app.post("/api/people", async (req, res) => {
  const { name } = req.body;
  const person = await createPerson(name);
  res.send(person);
});

app.delete("/api/people/:id", async (req, res) => {
  const { id } = req.params;
  await deletePerson(id);
  res.send({ message: `deleted person with id ${id}`});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
