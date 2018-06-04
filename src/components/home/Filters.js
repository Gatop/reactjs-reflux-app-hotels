import React from 'react';
import Reflux from 'reflux';
import AppStore from '../../stores/AppStore';
import Actions from '../../actions/Actions';
import '../../styles/Filters.css';

// Importing components
import Star from '../icons/Star';

// Filters Component
class Filters extends Reflux.Component {
    constructor(){
        super();
        // States
        this.state = {
            hotelname: '',
            stars:[0]
        }
        // Setting the store to be used
        this.store = AppStore;
        // Methods
        this.handleSearchByName   = this.handleSearchByName.bind(this);
        this.handleChangeStar     = this.handleChangeStar.bind(this);
        this.sendGetHotelsRequest = this.sendGetHotelsRequest.bind(this);
    }

    // Send a search by name
    handleSearchByName(e) {
        e.preventDefault();
        this.sendGetHotelsRequest();
    }

    // Send a search by stars
    handleChangeStar(e) {
        // Current array of stars
        const stars = this.state.stars;
        let index;

        // Check if the check box is checked or unchecked
        if (e.target.checked) {
            // Add the numerical value of the checkbox to stars array
            stars.push(+e.target.value);
        } else {
            // or remove the value from the unchecked checkbox from the array
            index = stars.indexOf(+e.target.value);
            stars.splice(index, 1);
        }

        // update the state with the new array of options
        this.setState({ stars: stars })
        this.sendGetHotelsRequest();
    }

    sendGetHotelsRequest () {
        // Query used by the request to get the hotels
        let query = '';
        // Validate that at least there is one letter on the input
        if (this.state.hotelname) {
            query = '?name=' + this.state.hotelname;
        }
        // Create stars query only if all stars is not selected
        // Get the value for each checkbox and create the query
        if (!this.state.stars.includes(0) && this.state.stars.length > 0) {
            (!query) ? query = '?stars=' : query += '&stars=';
            this.state.stars.forEach(function(item){
                query += item + ',';
            });
            query = query.slice(0, -1);
        }
        // Send  the query to get the Hotels
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
                                <span>Nombre del hotel</span>
                                <i className="fa" aria-hidden="true"></i>
                            </p>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne">
                            <div className="card-body">
                                <form id="search-by-name" onSubmit={this.handleSearchByName}>
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

                    <div className="card">
                        <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                            <p>
                                <img src={require("../../assets/icons/filters/star.svg")} alt="" className="img-responsive" />
                                <span>Estrellas</span>
                                <i className="fa" aria-hidden="true"></i>
                            </p>
                        </div>
                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo">
                            <div className="card-body">
                                <form id="search-by-star">
                                    <div className="checkbox hotel-icons">
                                        <input className="checkbox-star" type="checkbox" onChange={this.handleChangeStar.bind(this)} value="0" defaultChecked/>
                                        <label className="all-stars">Todas las estrellas</label>
                                    </div>
                                    <div className="checkbox hotel-icons">
                                        <input className="checkbox-star" type="checkbox" onChange={this.handleChangeStar.bind(this)} value="5"/>
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                    </div>
                                    <div className="checkbox hotel-icons">
                                        <input className="checkbox-star" type="checkbox" onChange={this.handleChangeStar.bind(this)} value="4"/>
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                    </div>
                                    <div className="checkbox hotel-icons">
                                        <input className="checkbox-star" type="checkbox" onChange={this.handleChangeStar.bind(this)} value="3"/>
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                    </div>
                                    <div className="checkbox hotel-icons">
                                        <input className="checkbox-star" type="checkbox" onChange={this.handleChangeStar.bind(this)} value="2"/>
                                        <Star/>
                                        <Star/>
                                    </div>
                                    <div className="checkbox hotel-icons">
                                        <input className="checkbox-star" type="checkbox" onChange={this.handleChangeStar.bind(this)} value="1"/>
                                        <Star/>
                                    </div>
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
