import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { useContext } from "react";

function Nav() {
  const { items } = useContext(CartContext);
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
            Basket <span>| {items.length} |</span>
          </div>
        </Link>
      </span>
    </nav>
  );
}

export default Nav;
