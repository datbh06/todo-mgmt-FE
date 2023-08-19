import React, {useState} from 'react';
import {loginAPICall} from "../services/AuthService.js";
import {useNavigate} from "react-router-dom";

const LoginComponent = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigate();

    function handleLoginForm(e) {
        e.preventDefault();

        loginAPICall(username, password).then((res) => {
            console.log(res.data);
            navigation('/todos');
        }).catch((err) => {
            console.error(err);
        });

    }

    return (<div className="container">
        <br/><br/>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h2 className="text-center">Login</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row mb-3">
                                <label className="col-md-3 control-label">Username or Email</label>
                                <div className="col-md-9">
                                    <input type="text" placeholder="Enter Username or Email" name="username"
                                           className="form-control" value={username}
                                           onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-md-3 control-label">Password</label>
                                <div className="col-md-9">
                                    <input type="password" placeholder="Enter Password" name="password"
                                           className="form-control" value={password}
                                           onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <button className="btn btn-primary"
                                        onClick={(e) => handleLoginForm(e)}>Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default LoginComponent;