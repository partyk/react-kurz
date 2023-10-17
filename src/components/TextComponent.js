import {Component} from "react";

class TextComponent extends Component {
    constructor() {
        super();

        this.state = {
            text: "Lore ipsum doloret"
        };
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.text}
                </p>
            </div>
        );
    }

}

export default TextComponent;