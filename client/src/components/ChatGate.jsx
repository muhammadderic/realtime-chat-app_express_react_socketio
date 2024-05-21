import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/chatgate.css";

const ChatGate = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="chatgate-outer-container">
      <div className="chatgate-inner-container">
        <h1 className="chatgate-title">Join</h1>
        <div>
          <input
            type="text"
            className="chatgate-input"
            placeholder="What is your name? :)"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="chatgate-input"
            placeholder="Input your room :)"
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={event => (!name || !room) ? event.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}>
          <button type="submit" className="button">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default ChatGate;