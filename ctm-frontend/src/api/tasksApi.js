import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/ctm";

export const getAllTasks = () => axios.get(`${BASE_URL}/tasks`);

export const getTaskById = (id) => axios.get(`${BASE_URL}/tasks/${id}`);

export const createTask = (taskData) => 
  axios.post(`${BASE_URL}/tasks`, taskData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const updateTaskStatus = (id, status) =>
  axios.patch(`${BASE_URL}/tasks/${id}`, { status });

export const deleteTask = (id) => axios.delete(`${BASE_URL}/tasks/${id}`);
