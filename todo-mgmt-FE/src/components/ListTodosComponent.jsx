import React, {useEffect, useState} from 'react';
import {getAllTodos} from "../services/TodoService.js";

const ListTodosComponent = () => {

    const [todos, setTodos] = useState([]);

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


    return (<div className='container'>
        <h2 className='text-center'>List of Todo Tasks</h2>
        <div>
            <table className='table table-striped table-bordered'>
                <thead>
                <tr>
                    <th>Task Title</th>
                    <th>Task Description</th>
                    <th>Task Status</th>
                </tr>
                </thead>
                <tbody>
                {todos.map(todo => <tr key={todo.id}>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.completed ? 'Completed' : 'Pending'}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    </div>);
};

export default ListTodosComponent;