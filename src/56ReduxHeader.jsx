import AddToCart from './56ReduxAddToCart'
import './56ReduxHeader.css'
import { clearCart } from './56Redux/cartSlice'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router'


export default function Header() {

    const dispatch = useDispatch()
    return (
        <>
            <header className="header">
                <div className="container">

                    {/* <!-- Logo --> */}
                    <div className="logo">
                        🛍️ Shop<span>Cart</span>
                    </div>

                    {/* <!-- Navigation --> */}
                    <nav className="nav">
                        <NavLink to="/">Home</NavLink>
                    </nav>

                    <div className="header-actions">
                        <AddToCart/>
                        <button className="clear-cart-btn" onClick={()=>dispatch(clearCart())}>🗑️ Clear Cart</button>
                    </div>
                </div>
                
            </header>

        </>
    )
}