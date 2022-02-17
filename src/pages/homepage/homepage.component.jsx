import React, { Component } from "react";
import './homepage.styles.scss';
import DirectoryMenu from "../../components/directory/directory.component";

export default class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <DirectoryMenu/>
            </div>
        )
    }
}