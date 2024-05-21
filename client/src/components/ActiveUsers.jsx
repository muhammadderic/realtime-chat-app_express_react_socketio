import "../styles/activeusers.css";

const ActiveUsers = ({ users }) => {
  return (
    <div className="activeusers-container">
      <div className="active-users-outer-container">
        <h2 className="active-users-title">People currently active</h2>
        {
          users ?
            users.map((user) => (
              <div key={user.name} className="active-user-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1cf000" className="icon icon-online"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" /></svg>
                <p className="active-user-name">{user.name}</p>
              </div>
            ))
            :
            null
        }
      </div>
      <div className="app-details">
        <h2 className="app-details-title">Realtime Chat App</h2>
        <p className="app-details-text">Create with React.js, Express.js and Socket.io</p>
        <p className="app-details-text">&copy; 2024 muhammadderic. Mucodevde.</p>
      </div>
    </div>
  )
}

export default ActiveUsers;