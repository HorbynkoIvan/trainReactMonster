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
        this.findTrack = this.findTrack.bind(this);
    }

    submit() {
        console.log('submit', this.testInput.value)
    }

    addTrack() {
        console.log(`trackInput: ${this.trackInput.value}`);

        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    findTrack() {
        console.log(`findTrack: ${this.searchInput.value}`);
        this.props.onFindTrack(this.searchInput.value)
    }

    render() {
        console.log(`tracks ${this.props.tracks}`);
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
                <h3>Redax</h3>
                <div>
                    <h4>Add track</h4>
                    <input type="text" ref={(input) => this.trackInput = input}/>
                    <button onClick={this.addTrack}>Add track</button>
                </div>
                <div>
                    <h4>Find track</h4>
                    <input type="text" ref={(input) => this.searchInput = input}/>
                    <button onClick={this.findTrack}>Find track</button>
                </div>
                <ul>
                    {this.props.tracks.map((track, index) =>
                        <li key={index}>{track.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({type: 'ADD_TRACK', payload})
        },
        onFindTrack: (name) => {
            dispatch({type: 'FIND_TRACK', payload: name})
        }
    })
)(App);
