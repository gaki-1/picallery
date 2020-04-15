import React, { Component } from 'react';
import Picstore from './containers/Picstore';

class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="parallax">
                    <h1 className="animated jackInTheBox delay-0.8s CompanyName"> PICALLERY </h1>
                    <h1> PICALLERY </h1>
                </div>
                <button type="button" className="btn btn-success">click me</button>
                <Picstore />
                <div className="stop">
                    <h1> PICALLERY </h1>
                </div>
            </div>
        );
    }
}

export default Homepage;