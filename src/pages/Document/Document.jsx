import React from 'react'
import { Link } from "react-router-dom";
const Document = () => {
  return (
    <>
      <div className="page-header ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Docunments</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a >index</a></li>
                    <li className="breadcrumb-item active" aria-current="page"> Docunment </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <section className="section-space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3  col-md-3 col-sm-6 text-center">
                <div className="site-document">
                  <div className="icon">
                    <img src="assets/img/partners/monir groupall-logo/it-sheba.png " alt="img" />
                  </div>
                  <h4>IT Sheba Limited</h4>
                  <div className="download-pdf">
                    <Link to="/docunment-details"><i className="fa fa-eye " />View document</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3  col-md-3 col-sm-6 text-center">
                <div className="site-document">
                  <div className="icon">
                    <img src="assets/img/partners/monir groupall-logo/monir-group.png " alt="img" />
                  </div>
                  <h4>Monir Group</h4>
                  <div className="download-pdf">
                    <Link to="/docunment-details"><i className="fa fa-eye " />View document</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3  col-md-3 col-sm-12 text-center">
                <div className="site-document">
                  <div className="icon">
                    <img src="assets/img/partners/monir groupall-logo/umrah-sheba.png" alt="img" />
                  </div>
                  <h4>Umrah Sheba</h4>
                  <div className="download-pdf">
                    <Link to="/docunment-details"><i className="fa fa-eye " />View document</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Document
