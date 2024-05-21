import "../styles/input.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="form">
      <input
        type="text"
        className="input"
        value={message}
        placeholder="Text a message..."
        onChange={event => setMessage(event.target.value)}
        onKeyDown={event => event.key === "Enter" ? sendMessage(event) : null} />
      <button
        className="sendButton"
        onClick={event => sendMessage(event)}
      >send</button>
    </form>
  )
}

export default Input;