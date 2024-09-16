import axios from "axios";
const apiUrl = "https://dummyjson.com/todos";

// fetch all tasks
export const fetchTasks = async () => {
  const response = await axios.get(`${apiUrl}`);
  return response?.data?.todos;
};

// Craete a new Task
export const createTask = async (task) => {
  const response = await axios.post(`${apiUrl}`, task);
  return response.data;
};

// Update the task
export const updateTask = async (id, updates) => {
  const response = await axios.put(`${apiUrl}/${id}`, updates);
  return response.data;
};

// Delete the task
export const deleteTask = async (id) => {
  const response = await axios.delete(`${apiUrl}/${id}`);
  return response.data;
};
