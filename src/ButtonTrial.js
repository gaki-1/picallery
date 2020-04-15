import React, { Component } from "react";
import './ButtonTrial.css';
import axios from './axios-instance'

class ButtonTrial extends Component {
    state = {
        tempcount: null,
        count: 0
    };

    incrementHandler = () => {
        this.setState({ count: this.state.count + 1 });
        const likes = {
            likecount: this.state.count + 1
        };
        axios.post('/likes.json', likes)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    componentDidMount() {
        axios.get('https://picallery.firebaseio.com/likecount.json')
            .then(response => {
                this.setState({ count: parseInt(response.data[this.props.id]) });
            })
            .catch(error => {
                console.log('error !')
            });
    }

    render() {
        return (
            <div className="flip-box gallery">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img src={this.props.link} className="container" alt="something"/>
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
                            <p>{parseInt(this.state.count)}</p>
                            <button className="button" onClick={this.incrementHandler}>LIKE</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonTrial;