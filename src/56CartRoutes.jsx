import RTXsetup from './56Redux/01reduxsetup'
import { BrowserRouter, Routes, Route } from "react-router";
import AddToCart from "./56ReduxAddToCart";
import CartList from "./56CartList";
import store from './56Redux/store';
import { Provider } from 'react-redux';

export default function CartRoutes() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      
      

      <Routes>
        <Route path="/cart" element={<CartList />} />
        <Route path="/" element={<RTXsetup/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}
