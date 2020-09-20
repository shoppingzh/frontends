import React, { Component } from 'react'
import MyInput from '../MyInput'
import './index.css'

export default class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      info: {
        name: '',
        age: ''
      }
    }
  }

  handleNameChange = (val) => {
    const info = this.state.info
    info.name = val
    this.setState({ info })
  }
  
  handleAgeChange = (val) => {
    const info = this.state.info
    info.age = val
    this.setState({ info })
  }

  render() {
    return (
      <div className="form">
        <div>
          <div>
            <label>请输入姓名：</label>
            <MyInput value={this.state.info.name} onChange={this.handleNameChange} />
          </div>
          <div>
            <label>请输入年龄：</label>
            <MyInput value={this.state.info.age} onChange={this.handleAgeChange} />
          </div>
        </div>
      </div>
    )
  }
}
