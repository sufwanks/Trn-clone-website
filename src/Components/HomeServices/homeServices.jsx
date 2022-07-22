import React from 'react';
import './homeServices.css'
import Section from '../../HOC/Section';
import serviceImg1 from '../../Images/services1.png'
import serviceImg2 from '../../Images/services-designing.png'
import serviceImg3 from '../../Images/services-digital.png'
import serviceImg4 from '../../Images/services-seo.png'
import serviceImg5 from '../../Images/services-erp.webp'
import serviceImg6 from '../../Images/services-app.png'


const HomeServices = () => {
    return (
        <Section id='services'>
            <div className='container pt-2 pb-5'>
                <div className='section-header pt-5 pb-5 text-center '>
                    <h3 className='section-title'>
                        <span>Our </span>Services
                    </h3>
                    <h5 className='section-subtitle mr-auto ml-auto'>
                        Innovative solutions to enhance and manage business better.</h5>
                </div>

                <div className='section-content'>
                    <div className='row'>
                        <div className='col-md-4 col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon'>
                                    <img className='service-img' src={serviceImg1} alt="" />
                                    <div className='service-body'>
                                    <h5 className='service-title'>Web Designing & Development</h5>
                                    <p className='service-description'>
                                        We turn ideas into digital solutions with our result-oriented web design...
                                    </p>
                                </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className='col-md-4  col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon '>
                                <img className='service-img' src={serviceImg2} alt="" />
                                    <div className='service-body'>
                                    <h5 className='service-title'>Creative Designing</h5>
                                    <p className='service-description'>
                                        We create stunning yet affordable designs for all your projects...
                                    </p>
                                </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className='col-md-4 col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon '>
                                <img className='service-img' src={serviceImg3} alt="" />
                                    <div className='service-body'>
                                    <h5 className='service-title'>Branding & Digital Marketing</h5>
                                    <p className='service-description'>
                                        We are the creative and full-service digital agency providing sharper ideas for...
                                    </p>
                                </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className='col-md-4 col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon '>
                                <img className='service-img' src={serviceImg4} alt="" />
                                    <div className='service-body'>
                                    <h5 className='service-title'>Search Engine Optimization</h5>
                                    <p className='service-description'>
                                        Team of experts creating tailor-made online marketing strategies to help...
                                    </p>
                                </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className='col-md-4 col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon '>
                                <img className='service-img' src={serviceImg5} alt="" />
                                    <div className='service-body'>
                                    <h5 className='service-title'>ERP Solutions</h5>
                                    <p className='service-description'>
                                        Drive your business from one place with our single, scalable, and fully integrated...
                                    </p>
                                </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className='col-md-4 col-lg-4 mb-3'>
                            <div className='service-box d-flex'>
                                <div className='service-icon'>
                                <img className='service-img' src={serviceImg6} alt="" />
                                    <div className='service-body'>
                                    <h5 className='service-title'>Application Development</h5>
                                    <p className='service-description'>
                                        Determined tech support throughout the entire mobile app development strategy...
                                    </p>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default HomeServices;