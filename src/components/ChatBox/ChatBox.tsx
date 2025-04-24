import { Fragment, useState, useEffect } from "react";
import { io } from "socket.io-client";

interface ChatBoxProps {
    name: string
}

interface Chat {
    from: string,
    time: string,
    message: string
}

const socket = io("http://localhost:3400");

const ChatBox = ({ name }: ChatBoxProps) => {
    const [ message, setMessage ] = useState("");
    const [ chats, newChat ] = useState<Chat[]>([]);

    useEffect(() => {
        socket.on("createChat", (data: Chat[]) => {
            newChat(data);
        });

        socket.emit("rendered", null);

        return () => {socket.off("createChat")}
    }, []);
    return (
        <Fragment>
            <h1>ChatBox</h1>
            <div>{chats.map((chat, id) => {
                return (
                <p key={id}>{`${chat.from} [${chat.time}]: ${chat.message}`}</p>
            );
            })}</div>
            <input type="text" placeholder="Type Something" value={message} onChange={(e) => {
                setMessage(e.target.value);
            }}/>
            <button onClick={() => {
                const now: Date = new Date();
                const timeString = new Intl.DateTimeFormat('en-US', {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    timeZone: "Asia/Manila"
                }).format(now);

                socket.emit("sendChat", {
                    from: name,
                    time: timeString,
                    message: message
                });

                setMessage("");
            }}>Send</button>
        </Fragment>
    )
};

export default ChatBox;