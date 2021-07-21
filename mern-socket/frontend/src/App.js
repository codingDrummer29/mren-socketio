/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";

import io from "socket.io-client";
import { nanoid } from "nanoid";

// no dotenv
const socket = io("http://localhost:5000");
// docu: const socket = io("https://server-domain.com")

const App = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault(); // so that form doesn't submit by itself
    /**
     * make sure that as soon as we recieve a chat we need to emit an event
     * this event will be same as we defined in the backend
     * which is chat
     */
    socket.emit("chat", { message });
    // resetting the message value
    setMessage("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Chat App</h2>
        <form onSubmit={sendChat}>
          <input
            type="text"
            name="chat"
            placeholder="Type a message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button type="submit">Send</button>
        </form>
      </header>
    </div>
  );
};

export default App;
