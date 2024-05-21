import "../styles/infobar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infobar">
      <div className="infobar-left-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1cf000" className="icon icon-online"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" /></svg>
        <h3 className="infobar-room">{room}</h3>
      </div>
      <div className="infobar-right-container">
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-close"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </a>
      </div>
    </div>
  )
}

export default InfoBar;