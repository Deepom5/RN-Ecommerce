import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "user",
    updatedAt: Date.now().toLocaleString(),
    items: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const productRepeated = state.items.find(item => item.id === action.payload.id);
            let total = state.total
            if(productRepeated){
                const itemsUpdated = state.items.map(item => {
                    if(item.id === action.payload.id){
                        item.quantity += action.payload.quantity;
                        return item;
                    }
                    return item;
                }) 
                state.items = itemsUpdated
                total = itemsUpdated.reduce((acc, current) => (acc += current.price * current.quantity), 0);
            }else{
                state.items.push(action.payload);
                total = state.items.reduce((acc,current) => (acc += current.price * current.quantity), 0);
            }
            state.total = total
            state.updatedAt = new Date().toDateString()
        },
        removeItem: (state,action) => {
            let itemsUpdated = []
            const itemId = action.payload.itemId;
            if(action.payload.type === 'single') itemsUpdated = state.items.filter(element => element.id !== itemId);
            const total = itemsUpdated.reduce((acc,current) => (acc += current.price * current.quantity), 0);

            state.items = itemsUpdated
            state.total = total
            state.updatedAt = new Date().toDateString()
        }
    }
})

export const { addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer