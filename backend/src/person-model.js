const query = require("./db");

async function getPeople() {
  return await query("SELECT * FROM person");
}

async function getOnePerson(id) {
  const [person] = await query("SELECT * FROM person WHERE id = ?", [id]);
  return person;
}

async function createPerson(name) {
  const { insertId } = await query("INSERT INTO person (name) VALUES (?)", [
    name,
  ]);
  return getOnePerson(insertId);
}

async function deletePerson(id) {
  await query("DELETE FROM person WHERE id = ?", [id]);
}

module.exports = {
  getPeople,
  getOnePerson,
  createPerson,
  deletePerson,
};
