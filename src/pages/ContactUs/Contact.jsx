import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="section-padding contact-us-padding mt-10">
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="get-in-touch">
                  <h2>CONTACT US</h2>
                  <p>We will get back to you in less than 24 hours</p>
                </div>
                <form method="POST">
                  <div className="row list-input">
                    <div className="col-md-6 mr-0">
                      <div className="single-get-touch">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-get-touch">
                        <input type="text" name="phone" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-get-touch">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-get-touch">
                        <textarea name="message" placeholder="Message" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-get-touch">
                        <button type="submit" name="submit" className="btn btn-default btn-sm">SEND MESSAGE</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5">
                <div className="choose-img">
                  <img src="assets/img/monir-group/contact.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="single-contact-info">
                  <div className="icon">
                    <img src="assets/img/monir-group/location--.png" alt="img" />
                  </div>
                  <div className="content">
                    <p>Mukto Bangla Shopping Complex, 4th Floor,Suite No(13-17)  Mirpur-1, Dhaka-1216</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-contact-info">
                  <div className="icon">
                    <img src="assets/img/monir-group/mail.png" alt="img" />
                  </div>
                  <div className="content">
                    <p>info@monirgroup.net <br />
                      reply within 24 Hours</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-contact-info">
                  <div className="icon">
                    <img src="assets/img/monir-group/information-channels.png" alt="img" />
                  </div>
                  <div className="content">
                    <p>01906-297808 <br />
                      Call @ 8.30am to 5.00pm </p>
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

export default Contact
