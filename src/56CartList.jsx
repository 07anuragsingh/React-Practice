import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./56Redux/cartSlice";
import "./56CartList.css";
import { createSelector } from "@reduxjs/toolkit";
import Checkout from "./56Chekout";

/* =====================================================
   CREATE SELECTORS (same file)
===================================================== */

// Base selector (reads state only)
const selectCartItems = (state) => state.cart.items;

// Derived selector (memoized)
const selectTotalPrice = createSelector(
  [selectCartItems],
  (items) => {
    console.log("Total price recalculated");
    return items.reduce(
      (total, item) => total + item.price * (item.quantity ?? 1),
      0
    );
  }
);

export default function CartListComponent() {

  /* ❌ OLD DIRECT STATE ACCESS (still OK but shown for clarity)
  const cartItems = useSelector((state) => state.cart.items);
  */

  /* ✅ Using selector instead */
  const cartItems = useSelector(selectCartItems);

  /* ❌ OLD TOTAL PRICE CALCULATION (NO LONGER NEEDED)
  const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
  );
  */

  /* ✅ Total price via createSelector */
  const totalPrice = useSelector(selectTotalPrice);

  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>🛒 My Cart ({cartItems.length} items)</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* total price */}
          <div className="cart-total">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </div>

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>

              {/* LEFT - IMAGE */}
              <div className="cart-image">
                <img src={item.thumbnail} alt={item.title} />
              </div>

              {/* MIDDLE - DETAILS */}
              <div className="cart-detauseSelectorils">
                <h4>{item.title}</h4>
                <p className="brand">{item.brand}</p>
                <p className="rating">⭐ {item.rating}</p>
              </div>

              {/* QUANTITY */}
              <input
                type="number"
                min={1}
                value={item.quantity ?? 1}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: Math.max(1, Number(e.target.value)),
                    })
                  )
                }
              />

              {/* RIGHT - PRICE & ACTION */}
              <div className="cart-action">
                <p className="price">
                  ₹{(item.price * (item.quantity ?? 1)).toFixed(2)}
                </p>

                <button onClick={() => dispatch(removeItem(item.id))}>
                  Remove
                </button>
              </div>

            </div>
          ))}

          <div className="cart-total">
            <Checkout
              totalPrice={totalPrice}
              cartCount={cartItems.length}
            />

            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}
