import AddToCart from './56ReduxAddToCart'
import './56ReduxHeader.css'
import { clearCart } from './56Redux/cartSlice'
import { useDispatch } from 'react-redux'


export default function Header() {
    const dispatch = useDispatch()
    return (
        <>
            <header className="header">
                <div className="container">

                    {/* <!-- Logo --> */}
                    <div className="logo">
                        Shop<span>Cart</span>
                    </div>

                    {/* <!-- Navigation --> */}
                    <nav className="nav">
                        <a href="#">Home</a>
                        <a href="#">Shop</a>

                    </nav>
                    <button onClick={()=>dispatch(clearCart(1))}>Clear Cart</button>
                    <AddToCart/>
                </div>
                
            </header>

        </>
    )
}