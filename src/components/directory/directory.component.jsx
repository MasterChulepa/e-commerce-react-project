import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.style.scss'

export default class DirectoryMenu extends Component {
    state = {
        sectons: [
            {
                tytle: "HATS",
                src: 'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=540',
                link: 'hats'
            },
            {
                tytle: "JACKETS",
                src: 'https://images.pexels.com/photos/7679685/pexels-photo-7679685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=380',
                link: ''
            },
            {
                tytle: "SNIKERS",
                src: 'https://images.pexels.com/photos/7543638/pexels-photo-7543638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=380',
                link: ''
            },
            {
                tytle: "MEN",
                src: 'https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=380',
                size: 'large',
                link: ''
            },
            {
                tytle: "WOMEN",
                src: 'https://images.pexels.com/photos/674268/pexels-photo-674268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=380',
                size: 'large',
                link: ''
            }
        ]
    }
    render() {
        const { sectons } = this.state;
        const blocks = sectons.map((item, i) => <MenuItem key={`${item.tytle}${i}`} {...item} />)
        return (
            <div className="directory-menu">
                {blocks}
            </div>
        )
    }
}
