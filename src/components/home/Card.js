import React, {Component} from 'react';
import '../../styles/Card.css';

// Importing components
import Star from '../icons/Star';
import Amenity from '../icons/Amenity';

// Card Component
class Card extends Component {
    render() {
        return (
            <div className="card container">
                <div className="row">
                    <div className="container row info-hotel col-md-8 col-sm-12">
                        <div className="info-hotel-child info-hotel-left col-md-6 col-sm-12">
                            <img src={require("../../assets/images/hotels/4900059_30_b.jpg")} alt=""/>
                        </div>
                        <div className="info-hotel-child info-hotel-right col-md-6 col-sm-12">
                            <ul>
                                <li>
                                    <p className="hotel-title"><b>Hotel Stefanos</b></p>
                                </li>
                                <li>
                                    <div className="hotel-icons">
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                    </div>
                                </li>
                                <li>
                                    <div className="hotel-icons">
                                        <Amenity
                                            imagePath = "safety-box"
                                        />
                                        <Amenity
                                            imagePath = "restaurant"
                                        />
                                        <Amenity
                                            imagePath = "beach"
                                        />
                                        <Amenity
                                            imagePath = "kitchen-facilities"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container price-hotel col-md-4 col-sm-12">
                         <p className="ssmall"><b>Precio por noche por <br/> habitación</b></p>
                         <p className="price">
                             <span id="currency-code">ARS</span>
                             <span id="value"><b>2.039</b></span>
                         </p>
                         <p><a href="" className="see-hotel"><b>Ver hotel</b></a></p>
                    </div>
                </div>
            </div>
        );
    }
}

// Export Component
export default Card;
