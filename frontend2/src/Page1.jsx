import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>india is my country</h1>
        <Link to="/">Go to page 1</Link>
      </div>
    )
  }
}
