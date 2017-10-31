import React, {Component} from 'react';
import Dropdown from './Dropdown/Dropdown'
import Header from "./Header/Header";
import RegistrationForm from "./Registration/RegistrationForm";
import './style/app.css';

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
    submit() {
        console.log('submit', this.testInput.value)
    }

    render() {
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
            </div>
        );
    }
}

export default App;
