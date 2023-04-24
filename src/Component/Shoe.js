import React, { Component } from 'react'
import "./style.css"
export default class Shoe extends Component {
  render() {
    let{ShoeRender}=this.props
    return (
      <div className='container text-center'>
        <h1>Shoes shop</h1>
        <div className='row g-5'>
            {ShoeRender}
        </div>
      </div>
    )
  }
}
