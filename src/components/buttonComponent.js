import React from "react";

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
        };
    }

    onIncrement = () => {
      this.setState({
          value: this.state.value + 1,
      });
    }

    onDecrement = () => {
        this.setState({
            value: this.state.value - 1,
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>
                    +
                </button>
                {this.state.value}
                <button onClick={this.onDecrement}>
                    -
                </button>
            </div>
        );
    }
}

export default ButtonComponent;
