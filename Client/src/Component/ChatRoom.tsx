import { useState,useEffect } from 'react';
import './ChatRoom.css';

export default function ChatRoom({ user }: { user: string }) {
  const [messages, setMessages] = useState<JSX.Element[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(()=>{
    setMessages([...messages, (
      <div key={messages.length}>U9</div>
    )])
  },[])

  function insertMessage() {
    setMessages([...messages, (
        <div key={messages.length}>
          <div className='message message-personal new'>
            <div className='name'>{user}</div>
            <hr />
            <p>{inputValue}</p>
          </div>
          <div className='message new'>
            <div className='name'>{user}</div>
            <hr />
            <p>{inputValue}</p>
          </div>
        </div>
    )]);
    setInputValue('');
  }

  return (
    <div>
      <div className="chat">
        <div className="chat-title">
          <h1>Fabio Ottaviani</h1>
          <h2>Supah</h2>
          <figure className="avatar">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" alt="Avatar" />
          </figure>
        </div>
        <div className="messages">
          <div className="messages-content">
            {messages.map((message) => (
               message
            ))}
          </div>
        </div>
        <div className="message-box">
          <textarea
            className="message-input"
            placeholder="Type message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="message-submit" onClick={insertMessage}>
            Send
          </button>
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
}
