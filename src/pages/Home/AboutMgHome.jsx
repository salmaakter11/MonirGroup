import React from 'react'
import { Link } from 'react-router-dom'
const AboutMgHome = () => {
    return (
        <>
            <section className="about-page-shortcode section-padding  ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-content">
                                <p>ABOUT MONIR GROUP</p>
                                <h2>11+ Years of Your Trust and Recommendation</h2>
                                <h3>IATA, ATAB, Toab, Civil Aviation &amp; BASIS Certified</h3>
                                <p>We provide responsive, customer-friendly &amp; excellent service to customer for getting fully
                                    satisfie... </p>
                                <Link to="CompanyProfile" className="btn btn-default btn-sm">Read More <i className="fa fa-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="single-image">
                                <img src="https://monirgroup.net/assets/img/about/about-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="single-experience">
                                    <div className="icon">
                                        <i className="pe-7s-add-user" />
                                    </div>
                                    <div className="content">
                                        <h2>2350</h2>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-experience">
                                    <div className="icon">
                                        <i className="pe-7s-user" />
                                    </div>
                                    <div className="content">
                                        <h2>50000</h2>
                                        <p>Employment Create</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-experience">
                                    <div className="icon">
                                        <i className="pe-7s-share" />
                                    </div>
                                    <div className="content">
                                        <h2>120</h2>
                                        <p>Sister Conscern Company</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-experience">
                                    <div className="icon">
                                        <i className="pe-7s-ticket" />
                                    </div>
                                    <div className="content">
                                        <h2>150</h2>
                                        <p>Visa Success</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMgHome
