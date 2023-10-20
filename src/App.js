import {Component} from "react";
import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            who: 'Marceline the Vampire',
            characters:  [
                {
                    id: 1,
                    who: 'Name 1 it is long name',
                    wat: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                    cool: 12
                },
                {
                    id: 3,
                    who: 'Name 3',
                    wat: 'Lorem ipsum dolor sit amet, consectetuer.',
                    cool: 42
                },
                {
                    id: 2,
                    who: 'Name 2',
                    wat: 'Lorem ipsum dolor',
                    cool: 15
                }
            ],
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        // mutovat charcters
        this.setState(state => {
            const newItems = {
                id: Math.max(...state.characters.map(p => p.id)) + 1,
                who: state.who,
                wat: 'asdasdas',
                cool:  15
            }
            return {
                characters: [...state.characters, newItems],
            }
        })


        // this.state.characters.push();
    }

    handleWho = event => {
        // console.log(event.target.value);
        this.setState({
            who: event.target.value
        })
    }


    characters =  () => {
        return this.state.characters.map(item => (
            <li
                key={item.id}
            >
                {item.who}
                {item.who.split(' ').length > 3 && (
                    <small>
                        <strong>
                            - lol, short name
                        </strong>
                    </small>
                )}
            </li>
        ))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.characters()}
                </ul>
                <form
                    action=""
                    className="add-new"
                    onSubmit={this.handleSubmit}
                >
                    <input
                        type="text"
                        onChange={this.handleWho}
                        value={this.state.who}
                    />
                </form>
                <p>
                    {this.state.who} lives!<br />
                </p>
            </div>
        )
    };
};

export default App;
