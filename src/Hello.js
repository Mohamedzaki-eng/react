import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    static defaultProps = {
        from: 'Anonymous'
    };
    render() {
                var age = 40;
                const name = 'Elizabeth'; 

                return (
                <div>
                <h1 className="Hello">Hello {age + 1} World</h1>
                <p>{name}</p>
                <h2 className="Hello2">Hello World</h2>
                <p>
                Hi {this.props.to} from {this.props.from}
        </p>
        </div>
        
        );
    }
}
export default Hello;                                                               