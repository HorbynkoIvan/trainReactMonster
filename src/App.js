import React, {Component} from 'react';
import Dropdown from './Dropdown/Dropdown'
import Header from "./Header/Header";
import RegistrationForm from "./Registration/RegistrationForm";
import './style/app.css';
import {connect} from 'react-redux';

const menu = [
    {
        link: '/articles',
        label: 'Articles'
    }, {
        link: '/contacts',
        label: 'Contacts'
    }, {
        link: '/posts',
        label: 'Posts'
    },
];

class App extends Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }

    submit() {
        console.log('submit', this.testInput.value)
    }

    addTrack() {
        console.log(`trackInput: ${this.trackInput.value}`);

        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value='';
    }

    render() {
        console.log(`testState ${this.props.testState}`);
        return (
            <div className='container'>
                <Header title="lesson about props" items={menu}/>
                <Dropdown/>
                <hr/>
                <RegistrationForm/>
                <hr/>
                <div>
                    <h5>work with attribute refs</h5>
                    <input type="text" placeholder='test' ref={(input) => this.testInput = input}/>
                    <button onClick={this.submit.bind(this)}>Submit</button>
                </div>
                <h5>redux connect</h5>
                <input type="text" ref={(input) => this.trackInput = input}/>
                <button onClick={this.addTrack}>Add track</button>
                <ul>
                    {this.props.testState.map((track, index) =>
                        <li key={index}>{track}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        testState: state
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName})
        }
    })
)(App);
