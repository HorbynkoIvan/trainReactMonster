import React, {Component} from 'react';
import Dropdown from './Dropdown/Dropdown'
import Header from "./Header/Header";
import RegistrationForm from "./Registration/RegistrationForm";

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
    render() {
        return (
            <div>
                <Header title="lesson about props" items={menu}/>
                <Dropdown/>
                <hr/>
                <RegistrationForm/>
            </div>
        );
    }
}

export default App;
