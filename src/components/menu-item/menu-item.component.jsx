import React from "react";
import './menu-item.styles.scss';
import { useNavigate } from "react-router-dom";

const MenuItem = ({ tytle, src, size, link }) => {
    const navigate = useNavigate();
    return (
        <div className={`${size} menu-item`}
            onClick={() => navigate(`${link}`)}>
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
export default MenuItem;