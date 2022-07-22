import React from "react";
import './homeSkill.css'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

function HomeSkill() {
    return (
        <>
            <div className="skill-section">
                <div className="container-fluid">
                    <div className="row skill-bg-img" >
                        <div className="col-12 col-lg-6   ">
                            <div className="skill-body">
                                <div className="skill-head">
                                    <span className="skill-title">Our Skills</span>
                                </div>
                                <h5 className="skill-description">Optimal Integration of Information, Design, & Technology</h5>
                            </div>
                        </div>
                        <div className="col-12  col-lg-6   ">
                            <div className="percentage-body">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-6  p-4 ">
                                        <div className="tech-body">
                                            <span className="skill-tech">DEVELOPMENT</span>
                                            <Progress
                                                type="circle"
                                                width={90}
                                                percent={90}
                                                theme={{active: {color: '#fbc630'}}}
                                            />
                                        </div>
                                        <h5 className="skill-tech-description">Website, Application, ERP, Software</h5>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 p-4">
                                        <div className="tech-body">
                                            <span className="skill-tech">DESIGN</span>
                                            <Progress
                                                type="circle"
                                                width={90}
                                                percent={80}
                                                theme={{active: {color: '#fbc630'}}}
                                            />
                                        </div>
                                        <h5 className="skill-tech-description">Branding, Brochure, Digital Media Assets</h5>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 p-4">
                                        <div className="tech-body">
                                            <span className="skill-tech">MARKETING</span>
                                            <Progress
                                                type="circle"
                                                width={90}
                                                percent={90}
                                                theme={{active: {color: '#fbc630'}}}
                                            />
                                        </div>
                                        <h5 className="skill-tech-description">Email, Digital Media, Social Media</h5>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 p-4">
                                        <div className="tech-body">
                                            <span className="skill-tech">SEO</span>
                                            <Progress
                                                type="circle"
                                                width={90}
                                                percent={90}
                                                theme={{active: {color: '#fbc630'}}}
                                            />
                                        </div>
                                        <h5 className="skill-tech-description">Analytics, Content, Links</h5>
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


export default HomeSkill