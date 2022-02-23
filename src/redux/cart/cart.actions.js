import { CartActionTypes } from "./cart.types"
export const toggleCartView = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_VIEW
    }
}
export const addItemToCart = item => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}
export const removeItemToCart = removedItem => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: removedItem
    }
}