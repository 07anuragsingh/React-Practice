import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: []
}

const addToCart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        removeItem: (state, action) => {
            state.items= state.items.filter(
                item=> item.id !== action.payload
            );
        },
        clearCart:(state,action)=>{
            state.items=state.items.filter(
                item=>item !== action.payload
            );
        }

    }


})

export const { addItem, removeItem,clearCart } = addToCart.actions;
export default addToCart.reducer