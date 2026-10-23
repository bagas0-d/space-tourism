import { Link } from "react-router";

export default function NavLinks() {
  return (
    <nav>
      <Link to="/">
        <span>00</span> <span>Home</span>
      </Link>

      <Link to="destination">
        <span>01</span> <span>Destination</span>
      </Link>

      <Link to="crew">
        <span>02</span> <span>Crew</span>
      </Link>

      <Link to="technology">
        <span>03</span> <span>Technology</span>
      </Link>
    </nav>
  );
}
