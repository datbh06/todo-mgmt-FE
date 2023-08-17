import axios from 'axios';

const TODO_API_BASE_URL = "http://localhost:8080/api/v1/todos";

export const getAllTodos = () => axios.get(TODO_API_BASE_URL);

