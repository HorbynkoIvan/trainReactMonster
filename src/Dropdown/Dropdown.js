import React, {Component} from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }
    };

    toggleState() {
        this.setState({isOpened: !this.state.isOpened})
    };

    render() {
        let dropDownText;
        if (this.state.isOpened) {
            dropDownText = <span>dropdown</span>
        }
        return (
            <div>
                <h5>lesson about state</h5>
                <div onClick={this.toggleState.bind(this)}>Its: {dropDownText}</div>
            </div>
        );
    }
}

export default Dropdown;
