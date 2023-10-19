import {Component} from "react";
import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newWho: 'Marceline the Vampire',
            newWat: 'A wild rocker girl, yeah.',
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

    /**
     * @param event {Event}
     * SAVE NEW WHO
     */
    handleWho = event => {
        this.setState({
            newWho: event.target.value,
        });
    }

    /**
     * @param event {Event}
     * SAVE NEW WAT
     */
    handleWat = event => {
        this.setState({
            newWat: event.target.value,
        });
    }

    /**
     * @param event {Event}
     * Add new item
     */
    handleSubmit = event => {
        if (event.key !== 'Enter') {
            return;
        }

        // zapis do state je async a neni dobry mutaci Objektu, pole použit tento způsob. Tento způsobje pro primitivni typy
        /* this.setState({
            characters: [...this.state.characters, newDude],
        }); */

        this.setState(state => {
            const newDude = {
                id: Math.max(...state.characters.map(item => item.id)) + 1,
                who: state.newWho,
                wat: state.newWat,
                cool: 19
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
                className='dude'
                key={dude.id}
            >
                <a href="#remove" className="ctrl">x</a>
                <article
                    className={
                        dude.cool < 10 ? 'faded' : dude.cool > 50 ? 'gold' : ''
                    }
                >
                    {dude.who}<br />
                    <span>
                        {dude.wat}
                    </span>
                </article>
                <input
                    className="ctrl"
                    type="number"
                    value={dude.cool}
                />
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
                    onKeyPress={this.handleSubmit}
                >
                    <input
                        type="text"
                        onChange={this.handleWho}
                        value={this.state.newWho}
                    />
                    <input
                        type="text"
                        onChange={this.handleWat}
                        value={this.state.newWat}
                    />
                </form>
                <p className="preview">
                    {this.state.newWho}<br />
                    <small>
                        {this.state.newWat}
                    </small>
                </p>
            </div>
        )
    };
};

export default App;
