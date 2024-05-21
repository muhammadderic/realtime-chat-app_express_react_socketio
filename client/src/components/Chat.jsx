import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";

const ENDPOINT = "localhost:5000";
let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    // socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    // socket.emit("join", {name, room}, (error) => {
    //   if(error) {
    //     navigate("/");
    //     alert("Error");
    //   }
    // })
  }, [location.search, navigate])

  return (
    <div className="chat-outer-container">
      <div className="chat-inner-container">
        <h1>Chat</h1>
      </div>
    </div>
  );
}

export default Chat;