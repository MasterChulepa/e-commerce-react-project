import {CartActionTypes} from './cart.types';

const DEFAULT_VALUE = {
    hiden: true
}

const cartReducer = (state = DEFAULT_VALUE, action) =>{
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_VIEW:
            return {
                ...state,
                hiden: !state.hiden
            }
        default:
            return state
    }
}

export default cartReducer;