import React from 'react';
import './footer.css'
import cmpLogo from '../../Images/tranetechlogo.svg'
import footImg1 from '../../Images/footerImg1.webp'
import footImg2 from '../../Images/footerImg2.webp'


const Footer = () => {
    return (
        <footer >
            <div className='tranetech-sub-footer mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4  contact-vision">
                            <span>
                                Empowering Business Through Wide-Ranging Software Development Expertise
                            </span>
                        </div>
                        <div className="col-lg-4 col-md-4 contact-logo">
                            <a href="">
                                <img className='foot-img' src={cmpLogo} alt="" />
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 footer-contact">
                            <div className='footer-sub-title'>
                                <h6>Contact Us</h6>
                            </div>
                            <div className='footer-content'>
                                <div className='social-media mt-4'>
                                    <a href='!#' className='text-light'>
                                        <i className='fab fa-facebook-f mr-4' />
                                    </a>
                                    <a href='!#' className='text-light'>
                                        <i className='fab fa-twitter mr-4' />
                                    </a>
                                    <a href='!#' className='text-light'>
                                        <i className='fab fa-instagram mr-4' />
                                    </a>
                                    <a href='!#' className='text-light'>
                                        <i className='fab fa-linkedin' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tranetech-footer'>
                <div className='container  pt-5 '>
                    <div className='row '>
                        <div className='col-sm-6 col-md-4 col-lg-3 mb-5 footer-section'>
                            <div className='footer-title'>
                                <h6>About Company</h6>
                            </div>
                            <div className='footer-content'>
                                <p>
                                    <small className='footer-about-text '>
                                        Tranetech Software Solutions is a well-established and reputed enterprise software solutions provider
                                        in Abu Dhabi since 2016. We are the leader in providing the best quality cutting-edge software solutions
                                        to our clients. Our products and services deliver substantial performance
                                        improvements and enable our clients to consistently impart high-value solutions that give businesses an
                                        edge over their competitors and a return on their investment.
                                    </small>
                                </p>

                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 mb-5 footer-section'>
                            <div className='footer-title'>
                                <h6>GLOBAL HEAD QUARTERS</h6>
                            </div>
                            <div className='footer-content'>
                                <p>
                                    <small className='footer-text-muted'>
                                        30 N Gould St Ste R
                                        Sheridan, WY 82801, United States                                    </small>
                                </p>
                                <p>
                                    <small className='footer-text-muted'>
                                        Phone:   (307)317-2754,  (757)919-3242

                                    </small>
                                </p>
                                <p>
                                    <small className='footer-text-muted'>


                                        Phone:   (307)316-6320                                    </small>
                                </p>
                                <p>
                                    <small className='footer-text-muted'>info@tranetech.com</small>
                                </p>
                            </div>
                            <div className='footer-title mt-5'>
                                <h6>CORPORATE OFFICE</h6>
                            </div>
                            <div className='footer-content'>
                                <p>
                                    <small className='footer-text-muted'>
                                        #604, Al Masaood Tower, Hamdan Bin Mohammed Street,
                                        Abu Dhabi, United Arab Emirates, P.O.Box: 35546                                    </small>
                                </p>
                                <p>
                                    <small className='footer-text-muted'>
                                        Phone: +971 2 443 3113

                                    </small>
                                </p>
                                <p>
                                    <small className='footer-text-muted'>


                                        info@tranetech.com                                    </small>
                                </p>

                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 mb-5 footer-section'>
                            <div className='footer-title'>
                                <h6>REGIONAL OFFICE</h6>
                            </div>
                            <div className='footer-content'>
                                <p>
                                    <small className='footer-text-muted'>
                                        Office #115, 2nd Floor, Lakshmanasamy Salai,
                                        KK Nagar, Chennai – 600078,
                                        Tamil Nadu, India                                    </small>
                                </p>
                                <p>
                                    <small className='footer-text-muted'>
                                        Phone: +91 44 4958 5658
                                    </small>
                                </p>
                                <p>
                                    <small className='footer-text-muted'>info-india@tranetech.com</small>
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-3 mb-5 footer-section'>
                            <div className='footer-certifications-img'>
                                <div >
                                    <img className='foot-img' src={footImg1} alt="" />

                                </div>
                                <div >
                                    <img className='foot-img mt-5' src={footImg2} alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom-footer pt-3 pb-3 text-center'>
                    <small>© 2022 Tranetech. All rights reserved. Tranetech - Best ERP Software Company.</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;