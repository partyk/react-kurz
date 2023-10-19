import {Component} from "react";
import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dude: 'Marceline the Vampire',
        };
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.dude} lives!
                </p>
            </div>
        )
    };
};

export default App;
