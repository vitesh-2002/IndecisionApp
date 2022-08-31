import React from 'react';
const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}>
                What Should I Watch?
            </button>
        </div>
    )
}
// class Action extends React.Component {
//     render() {

//     }
// }
export default Action;