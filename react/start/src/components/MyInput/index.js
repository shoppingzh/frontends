import React, { Component } from 'react'

export default class MyInput extends Component {
  
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.value} onChange={this.handleChange} />
      </div>
    )
  }
}
