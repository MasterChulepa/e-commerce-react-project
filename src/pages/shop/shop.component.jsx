import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../../components/collection/collection.component";

const ShopPage = () => {
    return (
        <div className="shop-page">
                <Routes>
                    <Route exact path="/:collectionID" element={<CollectionPage/>} />
                    <Route exact path='' element={<CollectionOverview/>} />
                </Routes>
        </div>
    )
}
export default ShopPage;