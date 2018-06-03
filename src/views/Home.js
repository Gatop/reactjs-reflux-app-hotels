import React, {Component} from 'react';
import '../styles/Home.css';

// Importing components
import Grid from '../components/home/Grid';
import Filters from '../components/home/Filters';

// Extends from reflux component
class Home extends Component {
    render() {
        return (
            <div className="home row justify-content-center">
                <Filters/>
                <Grid/>
            </div>
        );
    }
}

export default Home;
