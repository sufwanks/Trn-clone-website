import React from "react";
import './contactSection.css'
import mapImg from '../../Images/mapImg.png'
import mapImg2 from '../../Images/mapImg2.png'

function ContactSection() {
    return (
        <>

            <div className="contact-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 text-center">
                            <span className="contact-section-sub">We would love to work with you</span>
                            <h2 className="contact-section-head">How we can help</h2>
                        </div>

                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-12 col-lg-6 contact-location">

                            <iframe
                                title='mapMarker'
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7261.919527856103!2d54.356416325093285!3d24.486850936925975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6759023b134f%3A0xbc7fda55937506da!2sTranetech%20Software%20Solutions%20%7C%20Equal%20ERP%20Software%20Development%20Company%20in%20Abu%20Dhabi%20-%20UAE!5e0!3m2!1sen!2sae!4v1627709655589!5m2!1sen!2sae'
                                width='100%'
                                height='100%'
                                frameBorder='0'
                                style={{ border: 0, marginBottom: '-7px' }}
                                allowFullScreen
                            />

                        </div>
                        <div className="col-12 col-lg-6 contact-address">
                            <div className="row ">
                                <div className='col-12 col-md-6 col-lg-6  head-address-section'>
                                    <div className='address-title'>
                                        <img className="map-img" src={mapImg} alt="" />
                                        <h6>GLOBAL HEAD QUARTERS</h6>
                                        <p>
                                            <small className='address-text-muted'>
                                                30 N Gould St Ste R
                                                Sheridan, WY 82801, United States                                    </small>
                                        </p>
                                        <p>
                                            <small className='address-text-muted'>
                                                Phone:   (307)317-2754,  (757)919-3242

                                            </small>
                                        </p>
                                        <p>
                                            <small className='address-text-muted'>


                                                Phone:   (307)316-6320                                    </small>
                                        </p>
                                        <p>
                                            <small className='address-text-muted'>info@tranetech.com</small>
                                        </p>
                                    </div>


                                </div>
                                <div className='col-12 col-md-6 col-lg-6 head-address-section'>

                                    <div className='address-title '>
                                        <img className="map-img" src={mapImg} alt="" />

                                        <h6>CORPORATE OFFICE</h6>

                                        <p>
                                            <small className='address-text-muted'>
                                                #604, Al Masaood Tower, Hamdan Bin Mohammed Street,
                                                Abu Dhabi, United Arab Emirates, P.O.Box: 35546                                    </small>
                                        </p>
                                        <p>
                                            <small className='address-text-muted'>
                                                Phone: +971 2 443 3113

                                            </small>
                                        </p>
                                        <p>
                                            <small className='address-text-muted'>


                                                info@tranetech.com
                                            </small>
                                        </p>

                                    </div>
                                </div>
                                <div className='col-12 col-md-6 col-lg-6 address-section'>
                                    <div className='address-title'>
                                        <img className="map-img" src={mapImg2} alt="" />

                                        <h6>REGIONAL OFFICE</h6>

                                        <p>
                                            <small className='address-text-muted'>
                                                Office #115, 2nd Floor, Lakshmanasamy Salai,
                                                KK Nagar, Chennai – 600078,
                                                Tamil Nadu, India                                    </small>
                                        </p>
                                        <p>
                                            <small className='address-text-muted'>
                                                Phone: +91 44 4958 5658
                                            </small>
                                        </p>
                                        <p>
                                            <small className='address-text-muted'>info-india@tranetech.com</small>
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6 col-lg-6 address-section'>
                                    <div className='address-title'>
                                        <img className="map-img" src={mapImg2} alt="" />

                                        <h6>REGIONAL OFFICE</h6>

                                        <p>
                                            <small className='address-text-muted'>
                                                Office #115, 2nd Floor, Lakshmanasamy Salai,
                                                KK Nagar, Chennai – 600078,
                                                Tamil Nadu, India                                    </small>
                                        </p>
                                        <p>
                                            <small className='address-text-muted'>
                                                Phone: +91 44 4958 5658
                                            </small>
                                        </p>
                                        <p>
                                            <small className='address-text-muted'>info-india@tranetech.com</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactSection;