import Reflux from 'reflux';
import Actions from '../actions/Actions.js';
import * as HTTP from '../services/http'

// Extending from reflux bringing the ability to access to the store
class AppStore extends Reflux.Store {
    constructor() {
        super();
        // Listeners for defined actions in actions.js
        this.listenables = Actions;
        // State to be read by Grid.js
        this.state = {
            data: []
        }
    }

    // We Used the http service to launch a request
    // The answer will be assigned to data and will be consumed by the view
    // The promise is present in the request
    getHotels() {
        const self = this;
        HTTP.get('http://localhost:3500/hotels')
        .then((response) => {
            self.setState({
                data: response
            });
        })
    }
}

export default AppStore;
