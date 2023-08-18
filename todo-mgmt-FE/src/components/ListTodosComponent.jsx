import React, {useEffect, useState} from 'react';
import {getAllTodos} from "../services/TodoService.js";
import {useNavigate} from "react-router-dom";

const ListTodosComponent = () => {

    const [todos, setTodos] = useState([]);

    const navigator = useNavigate()

    useEffect(() => {
        listTodos();
    }, []);

    function listTodos() {
        getAllTodos().then(response => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        });
    }


    function addNewTodo() {
        navigator('/add-todo');
    }

    function updateTodo(id) {
        navigator(`/update-todo/${id}`);
    }

    function removeTodo() {

    }

    return (<div className='container'>
        <h2 className='text-center'>List of Todo Tasks</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo Task</button>
        <div>
            <table className='table table-striped table-bordered'>
                <thead>
                <tr>
                    <th>Task Title</th>
                    <th>Task Description</th>
                    <th>Task Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {todos.map(todo => <tr key={todo.id}>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.completed ? 'Completed' : 'Pending'}</td>
                    <td>
                        <button className='btn btn-info' onClick={() => updateTodo(todo.id)}>Update</button>
                        <button className='btn btn-danger' onClick={() => removeTodo(todo.id)}
                                style={{marginLeft: '10px'}}>Delete
                        </button>
                    </td>
                </tr>)}
                </tbody>
            </table>
        </div>
    </div>);
};

export default ListTodosComponent;