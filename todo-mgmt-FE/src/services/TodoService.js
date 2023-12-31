import axios from 'axios';
import {getToken} from "./AuthService.js";

axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = getToken();
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

const TODO_API_BASE_URL = "https://todo-spring-env.eba-3atqpz9u.ap-southeast-2.elasticbeanstalk.com/api/v1/todos";
const TODO_API_BASE_URL_CREATE = "https://todo-spring-env.eba-3atqpz9u.ap-southeast-2.elasticbeanstalk.com/api/v1/todos/create";
const TODO_API_BASE_URL_UPDATE = "https://todo-spring-env.eba-3atqpz9u.ap-southeast-2.elasticbeanstalk.com/api/v1/todos/update";
const TODO_API_BASE_URL_DELETE = "https://todo-spring-env.eba-3atqpz9u.ap-southeast-2.elasticbeanstalk.com/api/v1/todos/delete";

export const getAllTodos = () => axios.get(TODO_API_BASE_URL);
export const createTodo = (todo) => axios.post(TODO_API_BASE_URL_CREATE, todo);
export const getTodoById = (todoId) => axios.get(TODO_API_BASE_URL + "/" + todoId);
export const updateTodo = (todoId, todo) => axios.put(TODO_API_BASE_URL_UPDATE + "/" + todoId, todo);
export const deleteTodo = (todoId) => axios.delete(TODO_API_BASE_URL_DELETE + "/" + todoId);
export const completedTodo = (todoId) => axios.patch(TODO_API_BASE_URL + "/" + todoId + "/completed");
export const uncompletedTodo = (todoId) => axios.patch(TODO_API_BASE_URL + "/" + todoId + "/uncompleted");
