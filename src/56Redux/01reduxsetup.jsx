import { Provider,  } from "react-redux";

import Header from "../56ReduxHeader";
import Product from "../56ReduxProduct";



export default function RTXsetup(){
    
    return(
        <>
        
        <Header/>

        <h3> Welcome to our store </h3>
        
        <Product/>
        
        </>
    )
}