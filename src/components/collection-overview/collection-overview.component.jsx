import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) =>{
    return (
        <div className="collection-overview">
            {
                collections.map((collection, i) => <CollectionPreview key={i} {...collection} />)
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector(
    { collections: selectCollectionForPreview }
)
export default connect(mapStateToProps)(CollectionOverview)