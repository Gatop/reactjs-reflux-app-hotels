import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Amenity Component
class Amenity extends Component {
    render() {
        // Get the path image
        let pathImage = this.props.imagePath;
        return (
            <div className="icon-amenity">
                <img src={require("../../assets/icons/amenities/" + pathImage + ".svg")} alt="" className="img-responsive" />
            </div>
        );
    }
}

// Properties
Amenity.propTypes = {
    imagePath : PropTypes.string
}

// Export Component
export default Amenity;
