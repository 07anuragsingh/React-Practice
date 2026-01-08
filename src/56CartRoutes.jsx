import RTXsetup from './56Redux/01reduxsetup'
import { BrowserRouter, Routes, Route } from "react-router";
import AddToCart from "./56ReduxAddToCart";
import CartList from "./56CartList";
import store from './56Redux/store';
import { Provider } from 'react-redux';
import Header from './56ReduxHeader';
import Product from './56ReduxProduct';

export default function CartRoutes() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header/>
      

      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/cart" element={<CartList />} />
        
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}
