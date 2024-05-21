import Message from "./Message";
import "../styles/messages.css";

const Messages = ({ messages, name }) => {
  return (
    <div className="messages-container">
      {
        messages.map((message, index) => (
          <div key={index} className="message-outer-container">
            <Message
              message={message}
              name={name} />
          </div>
        ))
      }
    </div>
  )
}

export default Messages;