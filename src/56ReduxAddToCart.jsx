import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function AddToCart() {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="cart"
        onClick={() => navigate("/cart")}
        style={{ cursor: "pointer" }}
      >
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartItems.length}</span>
      </div>
    </>
  );
}
