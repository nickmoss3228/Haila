import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to={"/list"} className="link">
          <div className="projectname">Haila</div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
