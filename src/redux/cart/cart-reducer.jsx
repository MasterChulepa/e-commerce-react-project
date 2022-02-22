import {CartActionTypes} from './cart.types';
import { addItemToCard } from './cart.utils';

const INITIAL_STATE = {
    hiden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_VIEW:
            return {
                ...state,
                hiden: !state.hiden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state, 
                cartItems: addItemToCard(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;