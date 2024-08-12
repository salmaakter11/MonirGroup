import React from 'react'

const FounderLegacy = () => {
  return (
    <>
       <div className="page-header ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Founder Legacy</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a >About Us</a></li>
                    <li className="breadcrumb-item active" aria-current="page"> Founder Legacy </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <section className=" section-padding">
          <div className="container ">
            <div className="row">
              <div className="col-md-6">
                <div className="about-content">
                  <h2>Md. Monirul Islam</h2>
                  <h4>Managing Director</h4>
                  <p>I am Md Monirul Islam, the Founder of Amanot Travels International, and have been in the
                    industry since 2020, continually recognized for introducing innovative ideas. </p>
                  <p>It’s my pleasure to introduce to you our dynamic organization – with the solutions we offer.
                    Thank you for reviewing the website of IT Sheba Limited, a reputed software and web
                    development company in Bangladesh. The mission of IT Sheba Limited is to dominate the
                    current market with all sorts of web development and custom software solutions.</p>
                  <p>Our team is equipped with a diverse range of the latest technologies. Whether you need a
                    website, web hosting, SEO consulting, custom software development, or Bulk SMS services, IT
                    Sheba Limited has the capabilities to make it happen. We are grateful to all our valued
                    customers, investors, well-wishers, and employees for being with us. If you need further
                    discussion on any of our capabilities or services, please feel free to contact us using the
                    details provided on the contact page.</p>
                </div>
                <ul className="nav flex-column">
                  <li><a className="nav-link text-black" href="tel:+8801906-297800"><span className="fa fa-phone mr-2" />01906-297800</a></li>
                  <li><a className="nav-link text-black" href="mailto:ceo.monirgroup@gmail.com"><span className="fa fa-envelope mr-2"> </span>ceo.monirgroup@gmail.com</a></li>
                  <li><a className="nav-link text-black" href="#"> <span className=" fa fa-location-arrow mr-2"> </span>Mukto Bangla Shopping Complex, 5th
                      Floor, Space No:(51-52), Mirpur-1, Dhaka 1216</a></li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="single-image">
                  <img src="https://itsheba24.com/assets/img/it-sheba-team/founder.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default FounderLegacy
