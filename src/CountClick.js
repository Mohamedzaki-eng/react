import React, { Component } from 'react';


class CountClick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.randomNumber = this.randomNumber.bind(this);
    }    
    
    () {
        let random = Math.floor(Math.random() * 11);
        this.setState({ count: random });
    }

    render() {
        return(
            <div>
            <h1>Current Count is: {this.state.count}</h1>
            <button onClick={this.randomNumber}>Random Number</button>
            </div>
        );
    }
}



export default CountClick;