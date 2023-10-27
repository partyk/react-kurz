import {Component, Fragment, createRef} from "react";
import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.input = createRef();
        this.state = {
            who: 'Jméno',
            wat: 'Popis',
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
                    cool: 52
                },
                {
                    id: 2,
                    who: 'Name 2',
                    wat: 'Lorem ipsum dolor',
                    cool: 9
                }
            ],
        };
    }

    // lifeCycleMethods
    /**
     * @DOC https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
     */
    componentDidMount() {
        /* fetch('https://api.myjson.com/bins/zg7ze')
            .then(res => res.json())
            .then(json => this.setState({ characters: json })) */
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
        console.log('Unmount');
    }

    handleCool = itemUpdate => event => {
        const cool = +event.target.value;
        this.setState(state => {
            return {
                characters: state.characters.map(item => {
                    // po staru abz to bylo čitelné
                    /* if (item === itemUpdate) {
                        return {
                            id: item.id,
                            who: item.who,
                            wat: item.wat,
                            cool: cool
                        };
                    } else {
                        return item;
                    } */
                    // ES6
                    return item === itemUpdate ? {...item, cool} : item;
                })
            };
        });
    }

    /**
     * @param event {Event}
     * @param itemUpdate {{}}
     */
    handleRemove = (event, itemUpdate) => {
        this.setState(state => {
            return {
                characters: state.characters.filter(item => item !== itemUpdate)
            };
        });
    };

    handleSubmit = event => {
        // event.preventDefault();
        if (event.key !== 'Enter') {
            return;
        }

        if (!(this.state.who && this.state.wat)) {
            alert('Nemáš vyplněný formulář');
            return;
        }

        // mutovat charcters
        this.setState(state => {
            const newItems = {
                id: Math.max(...state.characters.map(p => p.id)) + 1,
                who: state.who,
                wat: state.wat,
                cool:  15
            }
            return {
                characters: [...state.characters, newItems],
            }
        })
        console.log(this.input);
        this.resetForm();
        this.input.current.focus();


        // this.state.characters.push();
    }

    handleWho = event => {
        // console.log(event.target.value);
        this.setState({
            who: event.target.value
        })
    }

    handleWat = event => {
        // console.log(event.target.value);
        this.setState({
            wat: event.target.value
        })
    }

    resetForm = () => {
        this.setState({
            who: '',
            wat: ''
        });
    }


    characters =  () => {
        return this.state.characters.map(item => (
            <li
                className='dude'
                key={item.id}
            >
                <a
                    href="#remove"
                    className="ctrl"
                    onClick={event => {
                        this.handleRemove(event, item);
                    }}
                >
                    x
                </a>
                <article
                    className={
                        item.cool < 10 ? 'faded' : (item.cool > 50 ? 'gold' : '')
                    }
                >
                    {item.who}<br />
                    <span>
                        {item.wat}
                    </span>
                </article>
                <input
                    className="ctrl"
                    type="number"
                    value={item.cool}
                    onChange={this.handleCool(item)}
                />
            </li>
        ))
    }

    render() {
        return (
            <Fragment>
                <h2>List names</h2>
                <div>
                    <ul>
                        {this.characters()}
                    </ul>
                    <form
                        action=""
                        className="add-new"
                        onKeyPress={this.handleSubmit}
                    >
                        <input
                            ref={this.input}
                            type="text"
                            autoFocus
                            onChange={this.handleWho}
                            value={this.state.who}
                        />
                        <input
                            type="text"
                            onChange={this.handleWat}
                            value={this.state.wat}
                        />
                    </form>
                    <p className="preview">
                        {this.state.who}<br />
                        <small>
                            {this.state.wat}
                        </small>
                    </p>
                </div>
            </Fragment>
        )
    };
};

export default App;

