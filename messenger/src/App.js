import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error"

import './css/styles.css';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <Index/>
                }/>

                <Route path="/login" element={
                    <Login/>
                }/>

                <Route path="/register" element={
                    <Register/>
                }/>

                <Route path="/c" element={
                    <Dashboard/>
                }/>

                <Route path="*" element={
                    <Error/>
                }/>
                
            </Routes>
        </Router>
    );
}

export default App;