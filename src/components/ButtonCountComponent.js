import {Component} from "react";

export default class ButtonCountComponent extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    handlerIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handlerDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handlerIncrement}
                >
                    +1
                </button>
                <span>
                    {this.state.count}
                </span>
                <button
                    onClick={this.handlerDecrement}
                >
                    -1
                </button>
            </div>
        )
    }
}