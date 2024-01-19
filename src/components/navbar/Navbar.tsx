import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="app logo" />
        <span>Admin Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://wallpapercave.com/dwp1x/wp9152735.jpg" alt="" />
          <span>Johny</span>
        </div>
          <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar