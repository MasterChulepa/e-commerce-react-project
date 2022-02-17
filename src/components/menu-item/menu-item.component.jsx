import React from "react";
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({ tytle, src, size, history, match, link }) => {
    return (
        <div className={`${size} menu-item`}
        onClick ={() => history.push(`${match.url}${link}`)}>
            <div className="background-image" style={{ backgroundImage: `url(${src})` }}></div>
            <div className="content">
                <h1 className="title">
                    {tytle}
                </h1>
                <span className="subtitle">
                    SHOP NOW
                </span>
            </div>
        </div>)
}
export default withRouter(MenuItem);