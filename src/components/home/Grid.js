import React from 'react';
import Reflux from 'reflux';
import AppStore from '../../stores/AppStore';
import Actions from '../../actions/Actions';
import '../../styles/Grid.css';

// Importing components
import Card from './Card';

// Grid Component
class Grid extends Reflux.Component {
    constructor(){
        super();
        // Declaring the state to be able to access store state
        this.state = {};
        // Setting the store to be used
        this.store = AppStore;
        // Variable to be shared between the component and the store
        this.storeKeys = ['data'];
        this.getHotels = this.getHotels.bind(this);
    }

    // Lifecycle initializing the data to be render
    // Call to the REST API
    componentWillMount() {
        // Calling component will mount super from reflux
        super.componentWillMount();
        this.getHotels();
    }

    // Method that calls the action getHotels defined in the store
    getHotels (e){
        let query = '';
        Actions.getHotels(query);
    }

    render() {
        // Por cada persona que traiga en data cada vez que se haga un render llamamos una card
        let hotels;
        if (this.state.data.length > 0) {
            hotels = this.state.data.map((currentValue, index, array) => {
                return (
                    <Card
                        key={index}
                        hotelId={currentValue.id}
                        hotelImage={currentValue.image}
                        hotelName={currentValue.name}
                        hotelPrice={currentValue.price}
                        hotelStars={currentValue.stars}
                        hotelAmenities={currentValue.amenities}/>
                );
            });
        } else {
            hotels = <div className="alert alert-warning" role="alert">
                        <strong>Ups!</strong> No hay ningún hotel en el momento.
                    </div>;
        }
        return (
            <div className="grid-box container col-md-8 col-sm-11">
                { hotels }
            </div>
        );
    }
}

// Export Component
export default Grid;
