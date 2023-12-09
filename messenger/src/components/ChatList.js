import pfp from "../assets/pfp.jpg";
import React from 'react';
import { getAllUsers } from "../utils/serverRequests";

import '../css/ChatList.css';

export default function ChatList() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        getAllUsers().then((results) => { 
            setUsers(results?.items || []);
        });
    }, []);

    return (
        <div class="chat-list">
            <h2>Chats</h2>
            <hr></hr>
            <div className="chats">
                {
                    users.map((user) => 
                        <button className="active chat-listing">
                            <h2 className="name">{user.identity}</h2>
                        </button>
                    )
                } 
            </div>
        </div>
    )
}