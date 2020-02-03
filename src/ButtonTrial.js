import React, { Component } from "react";
import './ButtonTrial.css';

class ButtonTrial extends Component {
    state = {
        count: 0
    };

    incrementHandler = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (


            <div className="flip-box gallery">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img src={this.props.link} className="container" />
                        <div className="container">
                            <p>{this.state.count}</p>
                            <button className="button" onClick={this.incrementHandler}>LIKE</button>
                        </div>
                    </div>
                    <div className="flip-box-back">
                        <div className="container">
                            <h2>Back Side</h2>
                            <p>{this.props.text}</p>
                        </div>
                        <div className="container">
                            <p>{this.state.count}</p>
                            <button className="button" onClick={this.incrementHandler}>LIKE</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonTrial;