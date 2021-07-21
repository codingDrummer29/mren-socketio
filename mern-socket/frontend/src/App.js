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

  return (
    <div className="App">
      <header className="App-header">
        <h2>Chat App</h2>
        <form action="">
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
