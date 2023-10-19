import {Component} from "react";
import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dude: 'Marceline the Vampire',
            characters:  [
                {
                    id: 1,
                    who: 'Name 1 it is long name',
                    wat: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                    cool: 12
                },
                {
                    id: 2,
                    who: 'Name 2',
                    wat: 'Lorem ipsum dolor',
                    cool: 15
                },
                {
                    id: 3,
                    who: 'Name 3',
                    wat: 'Lorem ipsum dolor sit amet, consectetuer.',
                    cool: 42
                }
            ],
        };
    }

    handleChange = event => {
        this.setState({
            dude: event.target.value,
        });
    }

    handleSubmit = event => {
        console.log(event);
        event.preventDefault();

        // zapis do state je async a neni dobry mutaci Objektu, pole použit tento způsob. Tento způsobje pro primitivni typy
        /* this.setState({
            characters: [...this.state.characters, newDude],
        }); */

        this.setState(state => {
            const newDude = {
                id: Math.max(...state.characters.map(item => item.id)) + 1,
                who: state.dude,
                wat: state.dude,
                col: 19
            }
            return {
                characters: [...this.state.characters, newDude],
            }
        })
    }

    /**
     * @returns {unknown[]}
     */
    listOfDudes = () => {
        return this.state.characters.map(dude => (
            <li
                className={dude.who.split(' ').length < 3 ? 'strong' : ''}
                key={dude.id}
            >
                {dude.who}
                {dude.who.split(' ').length < 3 && (
                    <small>
                        <strong>
                            - lol, short name
                        </strong>
                    </small>
                )}
            </li>
        ));
    }

    render() {
        return (
            <div>
                <ul>
                    {this.listOfDudes()}
                </ul>
                <form
                    className="add-new"
                    onSubmit={this.handleSubmit}
                >
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.dude}
                    />
                </form>
                <p className="preview">
                    {this.state.dude}
                </p>
            </div>
        )
    };
};

export default App;
