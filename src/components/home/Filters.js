import React from 'react';
import Reflux from 'reflux';
import AppStore from '../../stores/AppStore';
import Actions from '../../actions/Actions';
import '../../styles/Filters.css';

// Filters Component
class Filters extends Reflux.Component {
    constructor(){
        super();
        // States
        this.state = {
            hotelname: '',
        }
        // Setting the store to be used
        this.store = AppStore;
        // Methods
        this.launchSearchByName = this.launchSearchByName.bind(this);
    }

    // Send a search by name
    launchSearchByName(e) {
        e.preventDefault();
        // Query used by the request to get the hotels
        let query = '';
        // Validate that at least there is one letter on the input
        if (this.state.hotelname) {
            query = '?name=' + this.state.hotelname;
        }
        Actions.getHotels(query);
    }

    render() {
        return (
            <div className="filters-box container col-md-3 col-sm-11">
                <div id="accordion">
                    <div className="card">
                        <div className="card-header filter-header">
                            Filtros
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                            <p>
                                <img src={require("../../assets/icons/filters/search.svg")} alt="" className="img-responsive" />
                                <span>Nombre del Hotel</span>
                                <i className="fa" aria-hidden="true"></i>
                            </p>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <form id="search-by-name" onSubmit={this.launchSearchByName}>
                                    <input
                                        id="search-by-name-input"
                                        value={ this.state.hotelname }
                                        onChange={ (e) => { this.setState({ hotelname: e.target.value }) }}
                                        type="text" name="hotel-name"
                                        placeholder="Ingrese el nombre del hotel" />
                                    <input
                                        id="search-by-name-submit"
                                        type="submit"
                                        value="Aceptar" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export Component
export default Filters;
