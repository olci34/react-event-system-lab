// Code Keypad Component Here
import React, {Component} from 'react'

class Keypad extends Component {

    eventHandler(e) {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input type='password' onKeyUp={this.eventHandler.bind(this)} ></input>
            </div>
        )
    }
}

export default Keypad