import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./56Redux/cartSlice";
import "./56CartList.css";

export default function CartListComponent() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price,
        0
    );

    return (
        <div className="cart-container">
            <h2>🛒 My Cart ({cartItems.length} items)</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>

                            {/* LEFT - IMAGE */}
                            <div className="cart-image">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>

                            {/* MIDDLE - DETAILS */}
                            <div className="cart-details">
                                <h4>{item.title}</h4>
                                <p className="brand">{item.brand}</p>
                                <p className="rating">⭐ {item.rating}</p>
                            </div>

                            {/* RIGHT - PRICE & ACTION */}
                            <div className="cart-action">
                                <p className="price">₹{item.price}</p>
                                <button onClick={() => dispatch(removeItem(item.id))}>
                                    Remove
                                </button>
                            </div>

                        </div>
                    ))}

                    <div className="cart-total">
                        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
                    </div>
                </>
            )}
        </div>
    );
}
