import { useSelector } from "react-redux"

export default function AddToCart() {
    const selector = useSelector((state)=>state.cart.value)
    return (
        <>


            {/* <!-- Cart --> */}
            <div className="cart">
                <span className="cart-icon">🛒</span>
                <span className="cart-count">{selector}</span>
            </div>


        </>
    )
}