import { CartActionTypes } from "./cart.types"
const CartAction = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_VIEW
    }
}
export default CartAction;