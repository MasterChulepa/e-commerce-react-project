import { createSelector } from "reselect";

const selectShop = select => select.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)