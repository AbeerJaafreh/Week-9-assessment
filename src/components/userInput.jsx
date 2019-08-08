import React, { Component } from 'react';
class Input extends Component {
    constructor(props){
        super(props);
        this.state={username:''};
    }
    
    render() { 
        return (
            <div>
                <input onChange={this.show}type="text" value="this.state.username" name="name" size="30" placeholder="UserName"></input>
            </div>
         );
    }
}
 
export default Input;