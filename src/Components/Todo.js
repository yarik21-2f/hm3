import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name2: "hi"
      };
      this.click=this.click.bind(this)
    }
    click() {
        this.setState({
            name2: "bye"
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.name2}</h1>
        <button onClick={this.click}>click</button>
      </div>
    )
  }
}
