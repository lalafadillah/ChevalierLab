import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>Chevalier Laboratory</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
    </header>
  );
}

export default Header;