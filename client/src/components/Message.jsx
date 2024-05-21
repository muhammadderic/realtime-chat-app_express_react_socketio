import "../styles/message.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const currentUser = name.trim().toLowerCase();

  if (name === user) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser ?
      <div className="message-inner-container justify-end">
        <p className="message-sender-name mr-c5r">{currentUser}</p>
        <div className="message-box">
          <p className="message-text">{text}</p>
        </div>
      </div>
      :
      <div className="message-inner-container justify-start">
        <div className="message-box">
          <p className="message-text">{text}</p>
        </div>
        <p className="message-sender-name ml-c5r">{user}</p>
      </div>
  )
}

export default Message;