import { useSelector } from "react-redux"

export default function AddToCart() {
    const cartselector = useSelector((state)=>state.cart.items)
    return (
        <>


            {/* <!-- Cart --> */}
            <div className="cart">
                <span className="cart-icon">🛒</span>
                <span className="cart-count">{cartselector.length}</span>
            </div>


        </>
    )
}