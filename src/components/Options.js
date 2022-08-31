import React from 'react';
import Option from './Option.js';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option</p>}
            <h3>Options</h3>
            <p>You have {props.options.length} options:</p>

            {
                props.options.map((o) => (
                    <Option
                        key={o}
                        optionText={o}
                        handleDeleteOptionSingular={props.handleDeleteOptionSingular}
                    />
                ))
            }


        </div>
    )
}
// class Options extends React.Component {
//     render() {

//     }
// }
export default Options;