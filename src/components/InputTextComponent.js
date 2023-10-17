import {Component} from "react";

class InputTextComponent extends Component {
    constructor() {
        super();
        this.state = {
            value: 'Placeholder'
        }
    }

    handlerChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form action="">
                    <input
                        value={this.state.value}
                        onChange={this.handlerChange}
                    />
                </form>
                <p className="aaa">
                    {this.state.value}
                </p>
            </div>
        )
    }
}

export default InputTextComponent;