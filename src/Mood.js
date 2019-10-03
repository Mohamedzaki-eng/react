import React, { Component } from 'react';

function getMood() {
    const moods = ['Angry' , 'Hungry' , 'Silly' , 'Quiet' , 'Paranoid' ];
    return moods[Math.floor(Math.random() * moods.length)];
}

class Mood extends Component {
    render() {
        return <h1>My current mood is {getMood()}</h1>;
    }
}

export default Mood;            