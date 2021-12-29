import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import "../Styles/styles.css"

function Footer() {

  return (
    <div className='px-5 py-3' style={{
      color: "#f2f2f2",
      backgroundColor: "#383231",
      margin: "0px"
    }}>
      <div className='row d-flex'>
        <div className='col-6 col-md-4'>
          <div className='fs-3'>
            Social
          </div>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=100070748946640"
              target='_blank'>
              <i class="fab fa-facebook"></i> Facebook
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/papswap_c2g/"
              target='_blank'>
              <i class="fab fa-instagram"></i>  Instagram
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/PapswapHQ"
              target='_blank'>
              <i class="fab fa-twitter"></i>  Twitter
            </a>
          </p>
        </div>
        <div className='col-6 col-md-4'>
          <div className='fs-3'>
            Contact us
          </div>
          <p>
            <a
              href="https://www.linkedin.com/in/papswap/"
              target='_blank'>
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </p>
          <p>
            <a
              href="mailto: hello@papswap.in"
              target='_blank'>
              <i class="fa fa-envelope" aria-hidden="true"></i> Mail
            </a>
          </p>
        </div>
        <div className='col-12 col-md-4 my-3'>
          <div className='row'>
            <div className='col-6 col-md-12 py-2'>
              <Link to="/privacy-policies"><strong>Privacy Policy</strong></Link>
            </div>
            <div className='col-6 col-md-12 py-2'>
              <Link to="/terms-n-conditions"><strong>Terms and conditions</strong></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center py-2'>
        Copyright © {(new Date().getFullYear())}  PapSwap
      </div>
    </div>
  )
}

export default Footer
