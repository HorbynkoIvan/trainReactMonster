import React, {Component} from 'react';

class RegistartionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();
        debugger;
        console.log("this form was submited twith email: ", this.state.email);
    }

    handleEmailSubmit(event) {
        /*console.log("this email was submited ");*/
        this.setState({email: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailSubmit}
                />
                <button>Submit</button>
            </form>


        )
    }
}

export default RegistartionForm;