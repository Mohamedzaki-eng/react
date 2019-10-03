import React, { Component } from 'react';

class Form extends Component {
    render () {
        return (
            <div>
              <form action="">
                 <p class="Pink">What is your name?</p>
                 <input type="text" placeholder="Name" />
              </form>
           </div>
        );
    }
}

export default Form;