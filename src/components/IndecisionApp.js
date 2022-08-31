import React from 'react';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import AddOption from './AddOption.js';
export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        console.log('fetching data...')
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            //Do nothing
        }       
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            //console.log('saving data');
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOptionSingular(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }
    handlePick() {
        //alert('test')
        const randNum = Math.floor((Math.random() * (this.state.options.length)));
        const option = this.state.options[randNum]
        alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        //console.log(option);
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // })
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    render() {
        //const title = "Indecision App"
        const subtitle = 'Put the decision in the hands of a computer'
        //const options = ['NFL', 'NBA']
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOptionSingular={this.handleDeleteOptionSingular} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }