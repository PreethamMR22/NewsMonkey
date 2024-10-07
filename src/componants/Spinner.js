import React, { Component } from 'react'
import Loading from './Loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{display:"flex",justifyContent:"center",marginTop:"15rem"}}>
        <img src={Loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
