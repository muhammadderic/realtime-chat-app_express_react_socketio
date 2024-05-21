import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChatGate from "./components/ChatGate";
import Chat from "./components/Chat";
import "./styles/index.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatGate />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
