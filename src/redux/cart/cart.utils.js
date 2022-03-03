export const addItemToCard = (cartItems, cartItemToAdd) => {
    const existingCardItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingCardItem) {
        return cartItems.map(cartItem => (cartItem.id === cartItemToAdd.id)
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
export const removeItemFromCart = (cartItems, cartToRemove) => {
    const existingCardItem = cartItems.find(cartItem => cartItem.id === cartToRemove.id);
    if (existingCardItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartToRemove.id)
    }
    else {
        return cartItems.map(cartItem => (cartItem.id === cartToRemove.id)
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem)
    }
}
