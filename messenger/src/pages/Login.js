import '../css/Login.css';
import React from 'react';
import { login } from '../utils/serverRequests';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [message, setMessage] = React.useState([]);

    const loginUser = async (e) => {
        e.preventDefault();

        const tempMessage = [];

        const payload = {
            identity: username,
            password: password,
        };

        const resp = await login(payload);

        if(resp.error) {
            tempMessage.push(resp.error);
            setMessage([...tempMessage]);
        }
        else {
            setMessage(["You're logged in. Redirecting..."]);
            navigate("/c");
        }
    }

    return (
        <div className="login">
            <h1>MyMessenger</h1>
            <p>Login</p>
            <form action="" id="login-form" method="post" onSubmit={(e) => loginUser(e)}>
                <a href="/" id="go-back">← Back</a>
                <input value={username} type="text" id="username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} minLength={3} required></input>
                <input value={password} type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} minLength={8} required></input>
                <input className="btn" type="submit" value="Login"></input>
            </form>
            <div className="message">
                {message.join("\n")}
            </div>
        </div>
    )
}