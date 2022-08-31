//stateless functional component

class IndecisionApp extends React.Component {
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

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option</p>}
            <h3>Options</h3>
            <p>{props.options.length} Options:</p>

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

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // this.setState(() => {
        //     return { error }
        // })
        this.setState(() => ({ error }))
        e.target.elements.option.value = ''
    }
    render() {

        return (
            <div>
                <br></br>
                Add options here:
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Submit</button>
                </form>
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
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))