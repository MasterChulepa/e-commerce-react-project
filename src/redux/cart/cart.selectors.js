import {createSelector} from 'reselect'

const selectCart = (select) => select.cart;
export const selectCartHiden = (select) => selectCart(select).hiden;
export const selectCartItem = createSelector(
    [selectCart], 
    cart => cart.cartItems
)
export const selectCartItemQuantity = createSelector(
    [selectCartItem], 
    cartItems => (cartItems.reduce((accamulate, cartItem) => (accamulate + cartItem.quantity), 0))
)