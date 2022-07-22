import React from "react";
import './homeTestimonial.css'
import testimonailImg1 from '../../Images/testimonial-adurec.png'
import testimonailImg2 from '../../Images/testimonial-alkilani.png'
import testimonailImg3 from '../../Images/testimonial-siyas.png'

function HomeTestimonial() {
    return (
        <>
            <div className="container">
                <div className="row justify content center">
                    <div className="col-12 col-lg-2 col-md-1 text-center"></div>
                    <div className="col-12 col-lg-8 col-md-10 text-center">
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>


                            </div>
                            <div class="carousel-inner card-des">
                                <div class="carousel-item active " data-bs-interval="3000">
                                    <img src={testimonailImg1} class="d-block product-img" alt="..." />
                                    <div class="carousel-title d-none d-md-block">
                                        <p className="testimonial-description">
                                            Highly recommended software for tapping new business potentials.
                                            The ERP software transformed our way of working by automating the processes and benefited our business considerably.
                                        </p>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <img src={testimonailImg2} class="d-block product-img" alt="..." />
                                    <div class="carousel-title d-none d-md-block">
                                        <p className="testimonial-description">
                                            TEAM TRANETECH did an excellent job with our Website development project.
                                            They took care of everything right from Website development, video animation to product photography.
                                            The team was highly professional and clearly understood our vision to deliver the same.
                                        </p>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <img src={testimonailImg3} class="d-block product-img" alt="..." />
                                    <div class="carousel-title d-none d-md-block">
                                        <p className="testimonial-description">
                                            A fantastic solution for all business needs. We have been able to
                                            solve major business issues using Tranetech’s customized ERP solutions. Implementing the system has definitely been a game-changer for us.
                                        </p>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className="col-12 col-lg-2 col-md-1 text-center"></div>
                </div>
            </div>
        </>
    )
}



export default HomeTestimonial;