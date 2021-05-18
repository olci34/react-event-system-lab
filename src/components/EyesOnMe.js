// Code EyesOnMe Component Here
import React, {Component} from 'react'
class EyesOnMe extends Component {

    focusHandler() {
        console.log('Good!')
    }

    blurHandler() {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button onFocus={this.focusHandler.bind(this)} onBlur={this.blurHandler.bind(this)} >button</button>
            </div>
        )
    }
}

export default EyesOnMe