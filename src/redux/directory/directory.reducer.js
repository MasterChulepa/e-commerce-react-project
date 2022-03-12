const INITIAL_STATE = {
    sections: [
        {
            tytle: "HATS",
            src: 'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=540',
            link: 'shop/hats'
        },
        {
            tytle: "JACKETS",
            src: 'https://images.pexels.com/photos/7679685/pexels-photo-7679685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=380',
            link: 'shop/jackets'
        },
        {
            tytle: "SNIKERS",
            src: 'https://images.pexels.com/photos/7543638/pexels-photo-7543638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=380',
            link: 'shop/sneakers'
        },
        {
            tytle: "MEN",
            src: 'https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=380',
            size: 'large',
            link: 'shop/men'
        },
        {
            tytle: "WOMEN",
            src: 'https://images.pexels.com/photos/674268/pexels-photo-674268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=380',
            size: 'large',
            link: 'shop/women'
        }
    ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default directoryReducer;