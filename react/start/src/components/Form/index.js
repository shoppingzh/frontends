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

  render() {
    return (
      <div className="form">
        <div>
          <div>
            <label>请输入姓名：</label>
            <MyInput value={this.state.info.name} onChange={val => this.setState({ info: { name: val } }) } />
          </div>
          <div>
            <label>请输入年龄：</label>
            <MyInput value={this.state.info.age} onChange={val => this.setState({ info: { age: val } })} />
          </div>
        </div>
      </div>
    )
  }
}
