import { CartActionTypes } from "./cart.types"
export const cartAction = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_VIEW
    }
}
export const addItemToCart = (item) =>{
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}