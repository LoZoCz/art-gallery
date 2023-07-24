import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header className="main-head">
      <Link to="/" className="logo">
        <h1>galleria.</h1>
      </Link>
      <Link to="/painitng/mona_lisa" className="slide-show-btn">
        start slideshow
      </Link>
    </header>
  );
};
