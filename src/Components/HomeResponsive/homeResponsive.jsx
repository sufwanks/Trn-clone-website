import React from "react";
import './homeResponsive.css'
import resImg from '../../Images/employeequal.webp'

function HomeResponsive() {
    return (
        <>

            <div className="cover-img">
                <div className="container">
                    <div className="row justify-content-center" >
                        <div className="col-12 col-xl-9 col-lg-7 col-md-11 text-center">
                            <h1 className="responsive-title">EQUAL the integrated ERP solutions build to meet the needs of businesses.</h1>
                            <p className="responsive-description">
                                EQUAL is a scalable and fully integrated enterprise resource planning system to manage your entire business procedures in an organization. As the
                                <b>Best ERP Software in UAE,</b>
                                EQUAL available on the cloud and as an on-premise solution.
                                EQUAL unites standard business disciplines with modern marketing strategies and technology,
                                empowering users to streamline processes, track resources and manage data with ease.
                            </p>
                        </div>
                        <div className="col-12">
                            <img className="responsive-img" src={resImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeResponsive