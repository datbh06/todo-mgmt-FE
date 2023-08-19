import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {createTodo, getAllTodos, getTodoById, updateTodo} from "../services/TodoService.js";

const TodoComponent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const [todos, setTodos] = useState([]);

    const navigator = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        if (id) {
            getTodoById(id).then((res) => {
                setTitle(res.data.title);
                setDescription(res.data.description);
                setCompleted(res.data.completed);
            }).catch((err) => {
                console.error(err);
            });
        }
    }, []);

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Task</h2>;
        } else {
            return <h2 className='text-center'>Add Task</h2>;
        }
    }

    function saveOrUpdateTodo(e) {

        e.preventDefault();

        const todo = {title, description, completed};
        console.log(todo);

        if (id) {
            updateTodo(id, todo).then((res) => {
                console.log(res.data);
                navigator('/todos');
            }).catch((err) => {
                console.error(err);
            });
        } else {
            createTodo(todo).then((res) => {
                console.log(res.data);
                navigator('/todos');
            }).catch((err) => {
                console.error(err);
            });
        }
    }

    return (<div className='container'>
        <br/>
        <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className='form-label'>Task:</label>
                            <input type="text" className='form-control' value={title} placeholder="Enter task"
                                   onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Description:</label>
                            <input type="text" className='form-control' value={description}
                                   placeholder="Enter description"
                                   onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Status:</label>
                            <select className='form-control' value={completed}
                                    onChange={(e) => setCompleted(e.target.value)}>
                                <option value=""></option>
                                <option value="true">Completed</option>
                                <option value="false">Pending</option>
                            </select>
                        </div>
                        <button className="btn btn-success" onClick={saveOrUpdateTodo}>Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>)
};
export default TodoComponent;