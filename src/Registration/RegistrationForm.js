import React, {Component} from 'react';
import PropTypes from 'prop-types';


class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:''
        }
    }

    render() {
        return (
            <div>
                <h5>Work with form!</h5>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           placeholder="E-mail"
                           value={this.state.email}
                    />
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
