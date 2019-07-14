import {createSelector} from 'reselect'

const selectShop = state => state.shop
const COLLECTION_ID_MAP = {
    hats: 1,
    sneaker: 2,
    jacket: 3,
    womens: 4,
    mens: 5,
}

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = colelctionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[colelctionUrlParam])
    )
