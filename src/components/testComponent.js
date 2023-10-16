import React from "react";

class TestComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dude: 'aaa',
        };
    }

    render() {
        return (
            <p>
                My googd friend <strong>{this.state.dude}</strong>
                <br />
                I Love {this.state.dude}
            </p>
        );
    }
}

export default TestComponent;
