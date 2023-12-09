import '../css/Chat.css';

export default function Chat() {
    const username = localStorage.getItem("username");

    return (
        <div class="chat">
            <div>
                <h2 class="name">{username}</h2>
                <hr></hr>
            </div>
            <div class="chat-box">
                <div class="messages">
                    <div class="msg to"><div>To </div></div>
                    <div class="msg from"><div>From Henry</div></div>
                    <div class="msg from"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus cumque velit? Culpa quia ipsum, voluptatibus dicta repellat sunt odit quidem similique? Architecto cupiditate, voluptatem aspernatur voluptate veritatis, illum eveniet illo numquam, asperiores quia totam! Adipisci, ex, rem sed sequi vitae eum fugiat, nisi et magni sapiente dicta nihil molestiae.</div></div>
                    <div class="msg to"><div>To Henry</div></div>
                    <div class="msg from"><div>From Henry</div></div>
                    <div class="msg to"><div>To Henry</div></div>
                </div>
                <form action="" id="chat-form" method="post">
                    <input type="text" placeholder="Aa" id="chat-text"></input>
                    <input class="btn" type="submit" value="Send" id="send"></input>
                </form>
            </div>
        </div>
    )
}