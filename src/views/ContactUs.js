import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            phone: this.props.match.params.phone,
        };
    } 
    render() {
        return(
            <div>
                <h2>{"Thank you for contact us at " + this.state.phone}</h2>
                <Link to="/juanete">
                    Back
                </Link>
            </div>
        );
    }
};

ContactUs.propTypes = {
    match: PropTypes.any,
};

export default ContactUs;