import React from 'react';
import Reflux from 'reflux';
import '../styles/Home.css';

// Importing components
import Grid from '../components/home/Grid';
import Filters from '../components/home/Filters';

// Extends from reflux component
class Home extends Reflux.Component {
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
