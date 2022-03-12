import React from "react";
import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { addItemToCart } from "../../redux/cart/cart.actions";
import { store } from "../../redux/store";

const CollectionItem = ({ item }) => {
    const { imageUrl, name, price } = item;
    return (
        <div className="collection-item ">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{`${price}$`}</span>
            </div>
            <CustomButton onClick={() => store.dispatch(addItemToCart(item))} inverted >Add to cart</CustomButton>

        </div>
    )
};

export default CollectionItem;