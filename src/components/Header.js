import React, {Component} from 'react';
import '../styles/Header.css';

// Header Component
class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={require("../assets/images/logo-almundo.svg")} alt="" className="img-responsive" />
            </div>
        );
    }
}

// Export Component
export default Header;
