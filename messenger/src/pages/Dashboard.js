import ChatList from "../components/ChatList";
import Chat from "../components/Chat";

import '../css/Dashboard.css';

export default function Dashboard() {
    return (
        <div class="dashboard">
            <ChatList></ChatList>
            <Chat></Chat>
        </div>
    )
}