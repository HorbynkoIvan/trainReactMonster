import React, {Component} from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false};
    };

    togleState() {
        this.setState({isOpened: !this.state.isOpened})
    }

    render() {
        console.log('isOpened: ', this.state.isOpened);
        var dropdowntext;
        if (this.state.isOpened) {
            dropdowntext = <div>this is dropdown</div>
        }
        return (
            <div>
                <div onClick={this.togleState.bind(this)}>click here</div>
                {dropdowntext}
            </div>

        )
    }
}

export default Dropdown;