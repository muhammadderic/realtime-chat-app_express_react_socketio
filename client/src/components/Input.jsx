import "../styles/input.css";

const Input = () => {
  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="Text a message..." />
      <button className="sendButton">send</button>
    </form>
  )
}

export default Input;