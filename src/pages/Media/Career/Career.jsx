import React from 'react'
import { Link } from 'react-router-dom'
const Career = () => {
    return (
        <>
            <section className=" section-padding mt-10">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-md-4 col-sm-12">
                            <div className="career">
                                <h2>Marketing Executive (Junior) </h2>
                                <div className="d-flex">
                                <Link to="/career-details" className=" btn-sm p-1 mr-5">Apply Now <i className="fa fa-arrow-right" /></Link>
                                    <a href="assets/img/monir-group/it-sheba-document.pdf" target="_blank"> <img src="assets/img/monir-group/pdf.png" width={25} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-12">
                            <div className="career">
                                <h2>Marketing Executive (Junior) </h2>
                                <div className="d-flex">
                                <Link to="/career-details" className=" btn-sm p-1 mr-5">Apply Now <i className="fa fa-arrow-right" /></Link>
                                    <a href="assets/img/monir-group/it-sheba-document.pdf" target="_blank"> <img src="assets/img/monir-group/pdf.png" width={25} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-12">
                            <div className="career">
                                <h2>Marketing Executive (Junior) </h2>
                                <div className="d-flex">
                                    <Link to="/career-details" className=" btn-sm p-1 mr-5">Apply Now <i className="fa fa-arrow-right" /></Link>
                                    <a href="assets/img/monir-group/it-sheba-document.pdf" target="_blank"> <img src="assets/img/monir-group/pdf.png" width={25} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Career
