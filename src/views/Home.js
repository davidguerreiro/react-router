import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.match.params.name,
        };
    }
    render() {
        return(
            <div>
                <h2>{"Welcome Home " + this.state.name}</h2>
                <Link to="/contact-us/432432">
                    <p>Go to Contact Us</p>
                </Link>
            </div>
        );
    }
};

Home.propTypes = {
    match: PropTypes.any
};

export default Home;