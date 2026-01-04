import AddToCart from './56ReduxAddToCart'
import './56ReduxHeader.css'


export default function Header() {
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
                    <AddToCart/>
                </div>
                
            </header>

        </>
    )
}