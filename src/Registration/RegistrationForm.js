import React, {Component} from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        },
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log("form is submited. Email value is: " + this.state.email)
    };

    handleEmailChange(event) {
        console.log('e-mail was changed', event.target.value);
        this.setState({email: event.target.value})
    }

    render() {
        return (
            <div>
                <h5>Work with form!</h5>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           placeholder="E-mail"
                           value={this.state.email}
                           onChange={this.handleEmailChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
