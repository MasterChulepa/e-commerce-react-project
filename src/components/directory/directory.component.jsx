import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.style.scss';
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from 'reselect'

const DirectoryMenu = ({ sections }) => {
    const blocks = sections.map((item, i) => <MenuItem key={`${item.tytle}${i}`} {...item} />)
    return (
        <div className="directory-menu">
            {blocks}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(DirectoryMenu);
