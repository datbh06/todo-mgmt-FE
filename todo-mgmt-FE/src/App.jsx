import './App.css';
import ListTodosComponent from "./components/ListTodosComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import TodoComponent from "./components/TodoComponent.jsx";
import RegisterComponent from "./components/RegisterComponent.jsx";
import LoginComponent from "./components/LoginComponent.jsx";
import {isUserLoggedIn} from "./services/AuthService.js";

function App() {

    function AuthenticatedRoute({children}) {

        const isAuth = isUserLoggedIn();

        if (isAuth) {
            return children;
        }

        return <Navigate to={'/login'}/>
    }

    return (<>

        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path='/' element={<ListTodosComponent/>}/>
                <Route path='/todos' element={<AuthenticatedRoute>
                    <ListTodosComponent/>
                </AuthenticatedRoute>}
                />
                <Route path='/add-todo' element={<AuthenticatedRoute>
                    <TodoComponent/>
                </AuthenticatedRoute>}/>
                <Route path='/update-todo/:id' element={<AuthenticatedRoute>
                    <TodoComponent/>
                </AuthenticatedRoute>}/>
                <Route path='/register' element={<RegisterComponent/>}/>
                <Route path='/login' element={<LoginComponent/>}/>
            </Routes>

            <FooterComponent/>

        </BrowserRouter>
    </>)
}

export default App
