import React from "react";
import './contactForm.css'


function ContactForm() {
    return (
        <>
        <div className='container pt-2 pb-5'>
        <div className='form-header pt-5 pb-5 text-center'>
          <h3 className='form-title'>
          TELL US ABOUT YOUR PROJECT
          </h3>
          
        </div>
        <div className='form-content'>
          <div className='row'>
              <div className="col-md-2 col-lg-2"></div>
            <div className='col-md-8 col-lg-8 form-section'>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Enter Name...'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Enter email...'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Enter contact number...'
                    required
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control rounded-0'
                    rows='5'
                    placeholder='Enter Message...'
                  />
                </div>
                <div className='form-group text-center'>
                  <button type="submit" className='btn btn-hover-contact'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-2 col-lg-2"></div>
          </div>
        </div>
      </div>
        </>
    )
}


export  default ContactForm