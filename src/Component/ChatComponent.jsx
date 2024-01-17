// ChatComponent.js
import React, { useEffect, useState } from 'react';
import socket from '../socket';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Event listener for incoming messages
    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up the event listener on component unmount
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    // Emit a message to the server
    socket.emit('sendMessage', inputMessage);
    console.log(inputMessage)
    setInputMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
