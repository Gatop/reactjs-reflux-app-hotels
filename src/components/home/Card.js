import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../styles/Card.css';

// Importing components
import Star from '../icons/Star';
import Amenity from '../icons/Amenity';

// Card Component
class Card extends Component {
    render() {
        // Setting the hotel image
        let hotelImage = this.props.hotelImage;
        // Defining number of stars
        var hotelStars = [];
        for (var i = 0; i < this.props.hotelStars; i++) {
            hotelStars.push(<Star key={i}/>);
        }
        // Defining amenities
        var hotelAmenities = [];
        for (var j = 0; j < this.props.hotelAmenities.length; j++) {
            hotelAmenities.push(<Amenity key={j} imagePath={this.props.hotelAmenities[j]}/>);
        }
        return (
            <div className="card container">
                <div className="row">
                    <div className="container row info-hotel col-md-8 col-sm-12">
                        <div className="info-hotel-child info-hotel-left col-md-6 col-sm-12">
                            <img src={require("../../assets/images/hotels/" + hotelImage)} alt=""/>
                        </div>
                        <div className="info-hotel-child info-hotel-right col-md-6 col-sm-12">
                            <ul>
                                <li>
                                    <p className="hotel-title"><b>{this.props.hotelName}</b></p>
                                </li>
                                <li>
                                    <div className="hotel-icons">
                                        {hotelStars}
                                    </div>
                                </li>
                                <li>
                                    <div className="hotel-icons">
                                        {hotelAmenities}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container price-hotel col-md-4 col-sm-12">
                         <p className="ssmall"><b>Precio por noche por <br/> habitación</b></p>
                         <p className="price">
                             <span id="currency-code">ARS</span>
                             <span id="value"><b>{this.props.hotelPrice}</b></span>
                         </p>
                         <p><a href="" className="see-hotel"><b>Ver hotel</b></a></p>
                    </div>
                </div>
            </div>
        );
    }
}

// Properties
Card.propTypes = {
    hotelId : PropTypes.string,
    hotelImage : PropTypes.string,
    hotelName : PropTypes.string,
    hotelPrice : PropTypes.number,
    hotelStars : PropTypes.number,
    hotelAmenities : PropTypes.array,
}

// Export Component
export default Card;
