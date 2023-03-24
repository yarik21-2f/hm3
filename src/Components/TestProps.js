import React, { Component } from 'react'

export default class TestProps extends Component {
  render() {
    return (
      <div>
        <h1>Hellow {this.props.name}</h1>
      </div>
    )
  }
}
