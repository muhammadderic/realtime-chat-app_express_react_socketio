import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "./InfoBar";
import Input from "./Input";
import "../styles/chat.css";

const ENDPOINT = "localhost:5000";
let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        navigate("/");
        alert("Error");
      }
    })
  }, [location.search, navigate])

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    })
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  }

  return (
    <div className="chat-outer-container">
      <div className="chat-inner-container">
        <InfoBar room={room} />
        <h1>Chat</h1>
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;