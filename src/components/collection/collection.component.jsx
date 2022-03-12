import React from "react";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";
import './collection.styles.scss';
import { useParams } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPage = () => {
    const { collectionID } = useParams();
    const collection = useSelector((state) => selectCollection(collectionID)(state));
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map((item, i) => <CollectionItem item={item} key={i} />)
                }
            </div>
        </div>
    )
}
export default CollectionPage;