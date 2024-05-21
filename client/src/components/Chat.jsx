import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "./InfoBar";
import Messages from "./Messages";
import Input from "./Input";
import ActiveUsers from "./ActiveUsers";
import "../styles/chat.css";

const ENDPOINT = "localhost:5000";
let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
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

    socket.on("roomData", ({ users }) => {
      setUsers(users);
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
        <Messages
          messages={messages}
          name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage} />
      </div>
      <ActiveUsers users={users} />
    </div>
  );
}

export default Chat;