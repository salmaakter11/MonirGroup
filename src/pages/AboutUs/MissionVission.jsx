import React from 'react'

const MissionVission = () => {
  return (
    <>
       <div className="page-header ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Mission Vission</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a >About Us</a></li>
                    <li className="breadcrumb-item active" aria-current="page"> Mission Vission</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <section className="third-about-us section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <div className="single-third-about-us topimage">
                  <div className="about-thumb">
                    <img src="assets/img/monir-group/mission.png" alt="img"/>
                  </div>
                  <h2>Our Mission</h2>
                  <p> Explore business opportunities through strategic business units of the Group and flourish and prosper in the concerned sectors by harnessing people’s power and potential as well as making best use of resources giving due importance to national priorities. </p>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="single-third-about-us bottomimage">
                  <h2>Our Vission</h2>
                  <p>Make meaningful contribution in the socio economic development of the country through responsible business practice and to put the country and the nation first in all business endeavors. With this basic premise the Group and all its SBUs must Endeavour to integrate the business interest of the Group with the national interest and overall socio economic development of the country in a way that both are complementary to each other.</p>
                  <div className="about-thumb">
                    <img src="assets/img/monir-group/vission.png" alt="img"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default MissionVission
