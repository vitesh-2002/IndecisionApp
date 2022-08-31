import React from 'react';
const Header = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    )
}
Header.defaultProps = {
    title: 'Indecision App'
}
// class Header extends React.Component {
//     render() {

//     }
// }
export default Header;