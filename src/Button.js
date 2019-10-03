import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render () {
        return (
            <div>
            <button type="submit" className="Button" placeholder="Click Here">Please Click Me</button>
            
            </div>
        )
    }

}

export default Button;