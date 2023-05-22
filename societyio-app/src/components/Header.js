import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar className='navContainer'>
      <div className='logo'>
        <div className='main-heading'>Society io</div>
        <div className='sub-heading'>We make things easy for society</div>
      </div>
      <div className='loginSignup-wrapper'>
        <button className='login-btn'>
          <a href='#'>Login</a>
        </button>
        <button className='signup-btn'>
          <a href='#'>SignUp</a>
        </button>
      </div>
    </Navbar>
  );
}

export default Header;
