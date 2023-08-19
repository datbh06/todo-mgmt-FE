import './App.css';
import ListTodosComponent from "./components/ListTodosComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoComponent from "./components/TodoComponent.jsx";
import RegisterComponent from "./components/RegisterComponent.jsx";
import LoginComponent from "./components/LoginComponent.jsx";

function App() {

    return (<>

        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path='/' element={<ListTodosComponent/>}/>
                <Route path='/todos' element={<ListTodosComponent/>}/>
                <Route path='/add-todo' element={<TodoComponent/>}/>
                <Route path='/update-todo/:id' element={<TodoComponent/>}/>
                <Route path='/register' element={<RegisterComponent/>}/>
                <Route path='/login' element={<LoginComponent/>}/>

            </Routes>

            <FooterComponent/>

        </BrowserRouter>
    </>)
}

export default App
