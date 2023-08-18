import axios from 'axios';

const TODO_API_BASE_URL = "http://localhost:8080/api/v1/todos";
const TODO_API_BASE_URL_CREATE = "http://localhost:8080/api/v1/todos/create";

export const getAllTodos = () => axios.get(TODO_API_BASE_URL);

export const createTodo = (todo) => axios.post(TODO_API_BASE_URL_CREATE, todo);

