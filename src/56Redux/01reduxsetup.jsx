import { Provider } from "react-redux";
import store from "./store";

export default function RTXsetup(){
    return(
        <>
        <Provider store={store}>
        <h3 >Hello i am store</h3>
        </Provider>
        </>
    )
}