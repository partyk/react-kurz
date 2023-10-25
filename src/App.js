import {Component, createRef} from "react";
import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.input = createRef();
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

    // lifeCycleMethods
    componentDidMount() {
        /* fetch('https://api.myjson.com/bins/zg7ze')
            .then(res => res.json())
            .then(json => this.setState({ characters: json })) */
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState, snapshot);
    }

    componentWillUnmount() {
        console.log('Unmount');
    }

    /**
     * @param dude {}
     * @returns {(function(*): void)|*}
     */
    handleCool = dude => event => {
        const cool = Number(event.target.value);
        this.setState(state => {
            return {
                characters: state.characters.map(item => {
                    return item === dude ? {...dude, cool} : item;
                })
            }
        });
    }

    /**
     * @param event {Event}
     * @param dude {{}}
     */
    handleRemove = (event, dude) => {
        event.preventDefault();
        this.setState(state => {
            return {
                characters: state.characters.filter(item => item !== dude)
            };
        })
        console.log(event, dude);
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

        if (!(this.state.newWho && this.state.newWat)) {
            alert('Nemáš vyplněný formulář');
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

        this.resetForm();
        this.input.current.focus();
    }

    resetForm = () => {
        this.setState({
            newWho: '',
            newWat: ''
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
                <a
                    href="#remove"
                    className="ctrl"
                    onClick={event => {
                        this.handleRemove(event, dude);
                    }}
                >x</a>
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
                    onChange={this.handleCool(dude)}
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
                        ref={this.input}
                        autoFocus
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
