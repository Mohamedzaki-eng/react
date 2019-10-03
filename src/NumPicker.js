import React, { Component } from 'react';

function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>Your number is {num}</h1>
                <p>{num === 7 ? 'Congrats' : 'Unlucky'}</p>
            </div>
        );
    }
}

export default NumPicker;