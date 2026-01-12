import { useDispatch } from "react-redux"
import { clearCart } from "./56Redux/cartSlice";
import { useNavigate } from "react-router";
import "./56CheckoutButton.css";

export default function Checkout({totalPrice,cartCount}){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const placeOrder =()=>{
        if (cartCount ===0){
            alert("cart  khali  hai bro");
            return;
        }
        alert(`Order Placed for ₹${totalPrice.toFixed(2)} 🎉`)
        dispatch(clearCart());
        navigate('/')
    }
    return(
        <div className="checkout-wrapper">
            <button className="place-order-btn" onClick={()=>placeOrder()}>
                <span className="btn-icon">🛍️</span>
                <span className="btn-text">Place Order</span>
                <span className="btn-total">₹{totalPrice.toFixed(2)}</span>
            </button>
        </div>
    )
}