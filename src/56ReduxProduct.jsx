import { useDispatch, useSelector } from 'react-redux'
import './56ReduxProduct.css'
import { addItem, removeItem } from './56Redux/cartSlice'
import { useEffect } from 'react'
import { fetchProducts } from './56Redux/productSlice'


export default function Product() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const productSelector = useSelector((state) => state.productSlice.items)
    console.log(productSelector);

    const cartselector = useSelector((state)=>state.cart.items)

    return (
        <>
            <div className='grid'>
                {productSelector.length && productSelector.map((item) => (
                    <div key={item.id}className='card'>
                        <img src={item.thumbnail} />
                        <div className='content'>
                            <div className='title'>{item.title}</div>
                            <div className='price'>{item.price}</div>
                            <div className='brand'>{item.brand}</div>
                            <div className='rating'>{item.rating}</div>
                            {
                                cartselector.find(cartItem => cartItem.id === item.id)?
                                <button disabled={true}  onClick={()=>{dispatch(addItem(item))}} >Item Added</button>
                                :<button className='addToCart' onClick={()=>{dispatch(addItem(item))}} >Add To Cart</button>
                            }
                            
                            <button className='removefromcart' onClick={()=>{dispatch(removeItem(item.id))}} >Remove</button>
                            
                        </div>
                    </div>

                ))}
            </div>
        </>

    )
}