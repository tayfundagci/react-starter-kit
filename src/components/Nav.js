import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <span className="left">
        {" "}
        <Link to={"/"}>
          <h1>Wear</h1>
        </Link>
      </span>
      <span className="right">
        <Link to={"/checkout"}>
          <div className="cart">
            <AiFillShopping />
            <span>0</span>
          </div>
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
