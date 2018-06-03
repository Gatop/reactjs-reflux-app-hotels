import React, {Component} from 'react';
import '../../styles/Grid.css';

// Importing components
import Card from './Card';

// Grid Component
class Grid extends Component {
    render() {
        return (
            <div className="grid-box container col-md-8 col-sm-11">
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}

// Export Component
export default Grid;
