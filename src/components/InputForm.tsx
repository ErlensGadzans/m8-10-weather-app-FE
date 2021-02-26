import React, { Component } from 'react'

interface InputFormComponentProps {
    getWeather: (e: any) => Promise<any>
}

interface InputFormComponentStates {

state: {
    temperature: number
}
}


export default class InputForm extends Component<InputFormComponentProps, InputFormComponentStates> {
    render() {
        return (
            <form className="form" onSubmit={this.props.getWeather}>
                <input className="input" type="text" name="city" placeholder="City"/>
                <div className="wrapper">
                <button id="btn">Result</button>
                </div>
            </form>
        )
    }
}
