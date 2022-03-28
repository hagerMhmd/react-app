import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return <>
      <footer id='footer' className='text-white pt-5 text-center'>
        <div className="container">
          <div className="row px-0">
            <div className="col-md-4 mb-5 my-lg-5">
              <div className="footer-container">
                <h4 className=' fw-bold'>LOCATION</h4>
                <p>2215 John Daniel Drive <br /> Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4 mb-5 my-lg-5">
              <div className="footer-container">
                <h4 className=' fw-bold'>AROUND THE WEB</h4>
                <div className="icons d-flex justify-content-center align-items-center">
                  <div className="footer-icon-container">
                    <i className='fab fa-facebook-f'></i>
                  </div>
                  <div className="footer-icon-container">
                    <i className='fab fa-twitter'></i>
                  </div>
                  <div className="footer-icon-container">
                    <i className='fab fa-linkedin-in'></i>
                  </div>
                  <div className="footer-icon-container">
                    <i className="fa-brands fa-dribbble"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5 my-lg-5">
              <div className="footer-container">
                <h4 className='fw-bold'>ABOUT FREELANCER</h4>
                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className='mb-0 py-3'>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  }
}

