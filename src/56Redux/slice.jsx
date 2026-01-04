import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    items:[]
}

const addToCart= createSlice({
    name:"cart",
    initialState,
    reducers :{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        }
        // },
        // removeItem:(state,action)=>{
        //     state.items= state.items.filter(item=>item.id !== action.payload)
        // }
    }

})

export const {addItem} =addToCart.actions;
export default addToCart.reducer