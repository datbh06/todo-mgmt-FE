import React, {useState} from 'react';
import {registerAPICall} from "../services/AuthService.js";
import {useNavigate} from "react-router-dom";

const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigate();

    function handleRegistrationForm(e) {
        e.preventDefault();
        const registeredUser = {name, username, email, password};

        registerAPICall(registeredUser).then((res) => {
            console.log(res.data);
            navigation('/login');
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
                        <h2 className="text-center">Register Form</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row mb-3">
                                <label className="col-md-3 control-label">Name</label>
                                <div className="col-md-9">
                                    <input type="text" placeholder="Enter Name" name="name"
                                           className="form-control" value={name}
                                           onChange={(e) => setName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-3 control-label">Username</label>
                                <div className="col-md-9">
                                    <input type="text" placeholder="Enter Username" name="username"
                                           className="form-control" value={username}
                                           onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-3 control-label">Email</label>
                                <div className="col-md-9">
                                    <input type="email" placeholder="Enter Email" name="email"
                                           className="form-control" value={email}
                                           onChange={(e) => setEmail(e.target.value)}/>
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
                                        onClick={(e) => handleRegistrationForm(e)}>Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default RegisterComponent;