import { createSelector } from "reselect";

const selectShop = select => select.shop;
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
export const selectCollectionForPreview = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map(key => collections[key])
)
export const selectCollection = (collectionURLParam) =>
    createSelector(
        [selectCollections],
        collections => collections[collectionURLParam]
    )