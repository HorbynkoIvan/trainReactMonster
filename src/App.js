import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown/dropdown';
import Menu from './Menu/menu';
import RegistrationForm from './Registration/registartion';

const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
];

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
                <Dropdown/>
                <Menu items={menu}/>
                <RegistrationForm/>
            </div>
        );
    }
}

export default App;
