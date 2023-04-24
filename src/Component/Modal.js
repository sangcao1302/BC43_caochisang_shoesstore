import React, { Component } from 'react'
import "./style.css"
export default class Modal extends Component {
  render() {
    let{img,name,price,desc}=this.props
    return (
      <div className='container text-center mt-5'>
      <h1>Thông tin sản phẩm</h1>
        <div className='row mt-1 g-2'>
            <div className='col-12 col-sm-6 col-md-6'>
                <div className='img-shoe'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='col-12 col-sm-6 col-md-6 mt-5'>
                <div className='info text-start '>  
                    <h3>{name}</h3>
                    <h4>{price}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
