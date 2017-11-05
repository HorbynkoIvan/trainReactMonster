import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
    render() {
        console.log('items', this.props.items);
        return (
            <div>
                <h5>{this.props.title}</h5>
                {this.props.items.map((item, index) =>
                    <a href={item.link} key={index}>{item.label}</a>)
                }

            </div>
        );
    }
}

Header.propTypes = {
    items: PropTypes.array.isRequired,
    submit: PropTypes.func,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['news', 'photos']),
    user: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    })

};
export default Header;
