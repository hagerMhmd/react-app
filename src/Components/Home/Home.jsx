import React, { Component } from 'react'
import './Home.css'
import  pic  from '../imgs/avataaars.svg'

export default class Home extends Component {
  render() {
    return <>
      <section id='home' className='py-5 text-white'>
        <div className="home-content py-5">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <img className='py-3' src={pic} alt="" />
            <h1 className='mb-4 py-2'>START REACT</h1>
            <div className="icon-container mb-4">
              <i className="fa-solid fa-star"></i>
            </div>
            <p className='py-3'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </>
  }
}
