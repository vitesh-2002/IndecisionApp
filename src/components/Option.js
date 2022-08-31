import React from 'react';
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => { props.handleDeleteOptionSingular(props.optionText) }}>remove</button>
        </div>
    )
}
// class Option extends React.Component {
//     render() {

//     }
// }
export default Option;