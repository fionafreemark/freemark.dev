// Components
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      {/* Skip Link */}
      <a href="#main" className="skip-link">Skip to main content.</a>
      <div className="nav-wrapper">
        <Nav />
      </div>
    </header>
  )
};

export default Header;