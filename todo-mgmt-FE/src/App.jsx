import './App.css';
import ListTodosComponent from "./components/ListTodosComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

    return (<>

        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path='/' element={<ListTodosComponent/>}/>
                <Route path='/todos' element={<ListTodosComponent/>}/>
            </Routes>

            <FooterComponent/>

        </BrowserRouter>
    </>)
}

export default App
