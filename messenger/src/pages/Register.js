import '../css/Register.css';
import React from 'react';
import {createUser} from '../utils/serverRequests';

export default function Register() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confPassword, setConfPassword] = React.useState("");
    const [message, setMessage] = React.useState([]);

    const registerUser = async (e) => {
        e.preventDefault();

        const tempMessage = [];

        if(confPassword !== password) {
            tempMessage.push("Passwords do not match!");
        }

        setMessage(tempMessage);

        if(tempMessage.length !== 0) {
            return;
        }

        const payload = {
            identity: username,
            password: password,
        };

        const resp = await createUser(payload);

        if(resp.error) {
            tempMessage.push(resp.error);
            setMessage([...tempMessage]);
        }
        else {
            setMessage(["You're registered, please login."]);
        }
    }

    return (
        <div className="register">
            <h1>MyMessenger</h1>
            <p>Register</p>
            <form action="" id="register-form" method="post" onSubmit={(e) => registerUser(e)}>
                <a href="/" id="go-back">← Back</a>
                <input value={username} type="text" id="username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} minLength={3} required></input>
                <input value={password} type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} minLength={8} required></input>
                <input value={confPassword} type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" onChange={(e) => setConfPassword(e.target.value)} minLength={8} required></input>
                <input className="btn" type="submit" value="Create Account" />            
            </form>
            <div className="message">
                {message.join("\n")}
            </div>
        </div>
    )
}