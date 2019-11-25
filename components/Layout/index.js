import React, { Component } from 'react'
import Nav from '../Nav'
export default class Layout extends Component {
  render () {
    return (
      <div>
        <Nav/>
        <p></p>
        {this.props.children}
      </div>
    )
  }
}
