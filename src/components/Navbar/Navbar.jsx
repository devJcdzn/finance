import './Navbar.scss';

const Navbar = () => {

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo">
          <h2 className="logo-type">Dash<span>board</span></h2>
        </div>
        <nav className="links">
          <ul className="nav-links">
            <li><a href="#">Portifólio</a></li>
            <li><a href="#">Meu gitHub</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar