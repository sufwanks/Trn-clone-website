import React, { Component } from "react";
import { render } from "react-dom";
import './homeAbout.css'
import cardImg1 from '../../Images/cardImg1.png'
import cardImg2 from '../../Images/cardImg2.png'
import cardImg3 from '../../Images/cardImg3.png'



function HomeAbout() {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const checkNext = () => {
        const labels = document.querySelectorAll('#slider label');
        const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1;
        setSelectedIndex(nextIndex);
    }

    const check = index => setSelectedIndex(index);


    return (
        <>

            <div className="container">
                <div className="row about-section">
                    <div className="col-md-12 col-lg-6 mb-3 ">
                        <h3 className="about-sub-tittle">WHO ARE WE</h3>
                        <h1 className="about-tittle">We are the effective solution providers for you.</h1>
                        <div className="about-description">
                            <p>
                                Exploring the possibilities of technology to foster business development, we at Tranetech Software Solutions consistently strive to apply new thoughts to create more explicit, valuable, and better experiences with
                                technological advancement, however continuously improving the way our clients work.
                                As the Best ERP software company Abu Dhabi, we spawn great innovation with new, powerful programming languages and methodologies to transform how organizations, businesses, and even people coordinate and work.
                                With our production sector based in Abu Dhabi, we are committed to offering our clients - innovative,
                                customized, cost-effective solutions having outstanding value and technical excellence.
                            </p>
                        </div>
                        <button type="button" class="btn btn-warning ">About Company</button>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="flex flex-wrap about-card ">
                            {/* <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                                    <button onClick={checkNext}>{'<'}</button>
                                </div>
                            </div> */}
                            <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center" data-bs-ride="carousel">
                                <section
                                    id="slider"
                                    className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
                                >
                                    <input
                                        type="radio"
                                        name="slider"
                                        id="s1"
                                        checked={selectedIndex === 0}
                                        onClick={() => check(0)}
                                    />
                                    <input
                                        type="radio"
                                        name="slider"
                                        id="s2"
                                        checked={selectedIndex === 1}
                                        onClick={() => check(1)}
                                    />
                                    <input
                                        type="radio"
                                        name="slider"
                                        id="s3"
                                        checked={selectedIndex === 2}
                                        onClick={() => check(2)}
                                    />
                                    <label htmlFor="s1" id="slide1" data-bs-interval="2000">
                                        <div class="card" >
                                            <img src={cardImg2} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">We Analyze</h5>
                                                <p class="card-text">We analyze business for identifying the crucial needs and discover solutions to your company intricacies, providing an essential factor for decisive planning & development.</p>
                                            </div>
                                        </div>
                                    </label>
                                    <label htmlFor="s2" id="slide2" data-bs-interval="2000">
                                        <div class="card" >
                                            <img src={cardImg1} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">We Innovate</h5>
                                                <p class="card-text">As the Best Software Development company Abu Dhabi, we innovate our concepts by creating and executing new plans linked to decisive changes in performance, productivity & quality in your business.</p>
                                            </div>
                                        </div>
                                    </label>
                                    <label htmlFor="s3" id="slide3" data-bs-interval="2000">
                                        <div class="card" >
                                            <img src={cardImg3} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">We Deliver</h5>
                                                <p class="card-text">We offer our deliverables with certainty and high quality that matches global standards & principally aimed at impeccable customer satisfaction, growth & reliability.</p>
                                            </div>
                                        </div>
                                    </label>
                                </section>
                            </div>
                            {/* <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                                    <button onClick={checkNext}>{'>'}</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default HomeAbout