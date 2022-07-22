import React from "react";
import './home.css';
import Carousel from "../../Components/Carousel/carousel";
import HomeAbout from "../../Components/HomeAbout/homeAbout";
import HomeResponsive from "../../Components/HomeResponsive/homeResponsive";
import HomeProducts from "../../Components/Products/products";
import HomeServices from "../../Components/HomeServices/homeServices";
import HomeSkill from "../../Components/HomeSkill/homeSkill";
import HomeTestimonial from "../../Components/HomeTestimonial/homeTestimonial";



function Home() {

    return (
        <>
            <div className="Header">
                
                <Carousel />
                <HomeAbout />
                <HomeResponsive />
                <HomeProducts />
                <HomeServices />
                <HomeSkill />
                <HomeTestimonial />
                
            </div>
        </>
    )
}

export default Home;
