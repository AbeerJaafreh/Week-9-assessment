import React, { Component } from 'react';
import UserInput from './userInput';
import './UserOutput.css';
class Output extends Component {
    state = {  }
    
    render(props) { 
       
        return (
            <div>
                <p>UserName :</p>
                 <span>{this.inputText}</span>
                 <p>I hope I will be overWritten!</p>
               
            </div>
          );
          
    }
    inputText(){
    }

    

   

}
 
export default Output;