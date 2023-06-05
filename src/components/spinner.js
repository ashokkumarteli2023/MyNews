import React, { Component } from 'react'
import loading from '../Spinner.gif'
export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="spinner" style={{width:'50px'}}/>
      </div>
    )
  }
}
