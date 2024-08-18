import React from 'react'
import MemberShip from '../Home/MemberShip'

const CompanyProfile = () => {
  return (
    <>
      <section className="about-page-shortcode section-padding mt-10">
        <div className="container">
          <div className="row">
            <div className=" col-xl-8 col-md-12 col-sm-12">
              <div className="section-title pb-0">
                <h2>About Monir Group</h2>
              </div>
              <figure className="about-image">
                <img src="assets/img/monir-group/about-img.JPG" alt="img" className="img-fluid" />
                <div className="about-image-content">
                  <h3>ATAB</h3>
                  <h3>Certified</h3>
                  <h3>From 2018 </h3>
                </div>
              </figure>
              <div>
                <p>We provide responsive, customer-friendly  excellent service to customer for getting fully
                  satisfied.</p>
              </div>
              <MemberShip/>
            </div>
            <div className="col-xl-4 col-md-12 col-sm-12">
              <div className="icon-box">
                <div className="box-icon">
                  <img src="assets/img/monir-group/trust.png" width={50} className="img-fluid" alt="img" />
                </div>
                <div className="icon-box-content">
                  <h3>Trusted by Millions</h3>
                  <p>Most trusted  recommended by thousands of customer
                  </p>
                </div>
              </div>
              <div className="icon-box">
                <div className="box-icon">
                  <img src="assets/img/monir-group/certified.png" width={50} className="img-fluid" alt="img" />
                </div>
                <div className="icon-box-content">
                  <h3>Certified Concern</h3>
                  <p>IATA, ATAB, Toab, Civil Aviation  BASIS Certified
                  </p>
                </div>
              </div>
              <div className="icon-box">
                <div className="box-icon">
                  <img src="assets/img/monir-group/experience.png" width={50} className="img-fluid" alt="" />
                </div>
                <div className="icon-box-content">
                  <h3>experience</h3>
                  <p>11+ Years of Your Trust and Recommendation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CompanyProfile
