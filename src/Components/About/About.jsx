import React, { Component } from 'react'
import './About.css'
export default class About extends Component {
  render() {
    return <>
      <section id='about' className='text-white py-5'>
        <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
          <h1>ABOUT</h1>
          <div className="icon-container mb-4">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-4 col-12 offset-0 offset-lg-2">
              <div className="about-items pb-5 mb-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
            <div className="col-lg-4 col-12 ">
              <div className="about-items pb-5 mb-5">
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  }
}
