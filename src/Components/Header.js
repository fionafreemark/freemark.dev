// Components
import Nav from "./Nav";
// Modules

// Pages 


const Header = () => {
  return (
    <header>
      {/* Skip Link */}
      <a href="#main" class="skip-link">Skip to main content.</a>
      <div className="wrapper">
        <Nav />
      </div>
    </header>
  )
};

export default Header;