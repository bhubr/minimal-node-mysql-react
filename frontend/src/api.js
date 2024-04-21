import axios from "axios";
import { serverUrl } from "./settings";

const instance = axios.create({
  baseURL: `${serverUrl}/api`,
});

export const getPeople = async () => {
  const response = await instance.get("/people");
  return response.data;
};

export const createPerson = async (name) => {
  const response = await instance.post("/people", { name });
  return response.data;
};

export const deletePerson = async (id) => {
  const response = await instance.delete(`/people/${id}`);
  return response.data;
};
