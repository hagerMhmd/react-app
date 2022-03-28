import React, { Component } from 'react'
import './Contact.css'





export default class Contact extends Component {

  render() {
    return <>

      <section id='contact' className='py-5'>
        <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
          <h1>CONTACT ME</h1>
          <div className="icon-container mb-4">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="form-container">
            <div className="form-floating mb-3">
              <input type="email" className="form-control border-top-0 border-start-0 border-end-0 pt-5 pb-4 rounded-0 mb-5" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control border-top-0 border-start-0 border-end-0 pt-5 pb-4  rounded-0 mb-5" id="floatingEmail" placeholder="Password"/ >
                <label for="floatingPassword">Email Address</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control border-top-0 border-start-0 border-end-0 pt-5 pb-4  rounded-0 mb-5" id="floatingPhoneNumber" placeholder="Password"/ >
                <label for="floatingPassword">Phone Number</label>
            </div>
            <div className="form-floating">
              <textarea type="email" className="form-control border-top-0 border-start-0 border-end-0 pt-5 pb-4 rounded-0 mb-5" id="floatingPhoneNumber" placeholder="Password"/ >
                <label for="floatingPassword">Message</label>
            </div>
            {/* <input type="text" className='form-control border-top-0 border-start-0 border-end-0 py-3 rounded-0 mb-5' placeholder='Name' /> */}
            {/* <input type="text" className='form-control border-top-0 border-start-0 border-end-0 py-3 rounded-0 mb-5' placeholder='Email Address' /> */}
            {/* <input type="text" className='form-control border-top-0 border-start-0 border-end-0 py-3 rounded-0 mb-5' placeholder='Phone Number' /> */}
            {/* <textarea type="text" className='form-control border-top-0 border-start-0 border-end-0 py-3 rounded-0 mb-5' placeholder='Message'></textarea> */}
            <button className='btn mb-5'>Send</button>
          </div>

        </div>

      </section>
    </>
  }
}