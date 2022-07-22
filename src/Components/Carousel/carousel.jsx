import React from "react";
import './carousel.css'
import carasolImg4 from '../../Images/accountImg.png';
import carasolImg3 from '../../Images/facilityImg.png';
import carasolImg2 from '../../Images/hr-image.png';
import carasolImg1 from '../../Images/propertyimage1.png';
import carasolImg5 from '../../Images/brandImg.png';


function Carousel() {
    return (
        <>

            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="false">
                <div class="carousel-inner">
                    <div class="carousel-item active carousel-one" data-bs-interval="7000">
                        <div className='row'>
                            <div className='col-md-6 col-lg-4 mb-3'>
                                <div className='carousel-box d-flex card card-design shadow-lg'>
                                    <div className='carousel-icon mr-4'>
                                        <i className='fas fa-briefcase' />
                                    </div>
                                    <div className='carousel-body'>
                                        <h5 className='carousel-titles'>Leading Enterprise ERP solutions</h5>
                                        <h1 className='carousel-descriptions'>Property managment</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-3'>
                                <img src={carasolImg1} class="d-block img-one" alt="..." />

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-two" data-bs-interval="5000">
                    <div className='row'>
                            <div className='col-md-6 col-lg-4 mb-3'>
                                <div className='carousel-box d-flex card card-design shadow-lg'>
                                    <div className='carousel-icon mr-4'>
                                        <i className='fas fa-briefcase' />
                                    </div>
                                    <div className='carousel-body'>
                                        <h5 className='carousel-titles'>Leading Enterprise ERP solutions</h5>
                                        <h1 className='carousel-descriptions'>HR managment</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-3'>
                            <img src={carasolImg2} class="d-block img-one" alt="..." />

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-three" data-bs-interval="5000">
                        
                    <div className='row'>
                            <div className='col-md-6 col-lg-4 mb-3'>
                                <div className='carousel-box d-flex card card-design shadow-lg'>
                                    <div className='carousel-icon mr-4'>
                                        <i className='fas fa-briefcase' />
                                    </div>
                                    <div className='carousel-body'>
                                        <h5 className='carousel-titles'>Leading Enterprise ERP solutions</h5>
                                        <h1 className='carousel-descriptions'>Facility managment</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-3'>
                            <img src={carasolImg3} class="d-block img-one" alt="..." />

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-four" data-bs-interval="5000">
                    <div className='row'>
                            <div className='col-md-6 col-lg-4 mb-3'>
                                <div className='carousel-box d-flex card card-design shadow-lg'>
                                    <div className='carousel-icon mr-4'>
                                        <i className='fas fa-briefcase' />
                                    </div>
                                    <div className='carousel-body'>
                                        <h5 className='carousel-titles'>Leading Enterprise ERP solutions</h5>
                                        <h1 className='carousel-descriptions'>Accounting managment</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-3'>
                            <img src={carasolImg4} class="d-block img-one" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-five" data-bs-interval="5000">
                    <div className='row'>
                            <div className='col-md-6 col-lg-4 mb-3'>
                                <div className='carousel-box d-flex card card-design shadow-lg'>
                                    <div className='carousel-icon mr-4'>
                                        <i className='fas fa-briefcase' />
                                    </div>
                                    <div className='carousel-body'>
                                        <h5 className='carousel-titles'>Leading Enterprise ERP solutions</h5>
                                        <h1 className='carousel-descriptions'>Branding and creative design</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-3'>
                            <img src={carasolImg5} class="d-block img-one" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel