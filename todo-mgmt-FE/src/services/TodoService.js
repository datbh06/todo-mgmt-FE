import axios from 'axios';

const TODO_API_BASE_URL = "http://localhost:8080/api/v1/todos";
const TODO_API_BASE_URL_CREATE = "http://localhost:8080/api/v1/todos/create";
const TODO_API_BASE_URL_UPDATE = "http://localhost:8080/api/v1/todos/update";
const TODO_API_BASE_URL_DELETE = "http://localhost:8080/api/v1/todos/delete";

export const getAllTodos = () => axios.get(TODO_API_BASE_URL);

export const createTodo = (todo) => axios.post(TODO_API_BASE_URL_CREATE, todo);

export const getTodoById = (todoId) => axios.get(TODO_API_BASE_URL + "/" + todoId);

export const updateTodo = (todoId, todo) => axios.put(TODO_API_BASE_URL_UPDATE + "/" + todoId, todo);

export const deleteTodo = (todoId) => axios.delete(TODO_API_BASE_URL_DELETE + "/" + todoId);

