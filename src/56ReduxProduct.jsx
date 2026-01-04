import { useDispatch } from 'react-redux'
import './56ReduxProduct.css'
import { addItem ,removeItem} from './56Redux/slice'
export default function Product() {
    const dispatch = useDispatch()
    return (
        <>
            {/* <!-- PRODUCTS --> */}
            <section className="products">
                <h2>Our Products</h2>

                <div className="product-grid">

                    {/* <!-- Product 1 --> */}
                    <div className="product-card">
                        <img src="https://via.placeholder.com/250" alt="Product"/>
                            <h3>Wireless Headphones</h3>
                            <p className="price">₹2,999</p>
                            <button onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
                            <button onClick={()=>dispatch(removeItem(1))}>REMove Cart</button>
                    </div>

                    {/* <!-- Product 2 --> */}
                    <div className="product-card">
                        <img src="https://via.placeholder.com/250" alt="Product"/>
                            <h3>Smart Watch</h3>
                            <p className="price">₹4,499</p>
                            <button onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
                    </div>

                    {/* <!-- Product 3 --> */}
                    <div className="product-card">
                        <img src="https://via.placeholder.com/250" alt="Product"/>
                            <h3>Bluetooth Speaker</h3>
                            <p className="price">₹1,999</p>
                            <button onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
                    </div>

                </div>
            </section>
        </>

    )
}