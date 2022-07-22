import React from "react";
import productImg1 from '../../Images/productImg1.png';
import productImg2 from '../../Images/productImg2.png';
import productImg3 from '../../Images/productImg3.png';
import productImg4 from '../../Images/productImg4.png';
import productImg5 from '../../Images/productImg5.png';
import productImg6 from '../../Images/productImg6.png';
import productImg7 from '../../Images/productImg7.png';
import './products.css'



function HomeProducts() {
  return (
    <>

      <div className="container">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>

          </div>
          <div class="carousel-inner card-des">
            <div class="carousel-item active " data-bs-interval="3000">
              <img src={productImg1} class="d-block product-img" alt="..." />
              <div class="carousel-title d-none d-md-block">
                <h5 className="product-title">EQUAL Property Management System</h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={productImg2} class="d-block product-img" alt="..." />
              <div class="carousel-title d-none d-md-block">
                <h5 className="product-title">EQUAL Facility Management</h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={productImg3} class="d-block product-img" alt="..." />
              <div class="carousel-title d-none d-md-block">
                <h5 className="product-title">EQUAL HRMS Software</h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={productImg4} class="d-block product-img" alt="..." />
              <div class="carousel-title d-none d-md-block">
                <h5 className="product-title">EQUAL HRMS for Hospitality Software</h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={productImg5} class="d-block product-img" alt="..." />
              <div class="carousel-title d-none d-md-block">
                <h5 className="product-title">EQUAL Accounting</h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={productImg6}  class="d-block product-img" alt="..." />

              <div class="carousel-title d-none d-md-block">
                <h5 className="product-title">EQUAL Cleaning Management</h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={productImg7} class="d-block product-img" alt="..." />
              <div class="carousel-title d-none d-md-block">
                <h5 className="product-title">EQUAL Club Management</h5>
              </div>

            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default HomeProducts