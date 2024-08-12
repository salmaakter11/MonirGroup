import React from 'react'

const Video = () => {
  return (
    <>
       <div className="page-header ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Video Gellery</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a>Media</a></li>
                    <li className="breadcrumb-item active" aria-current="page"> Video Gellery</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <section className=" section-padding ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <article className=" mb-30 rounded shadow gallery_container h-100">
                  <div className="video">
                    <iframe className="img-thumbnail rounded lazyload" src="https://www.youtube.com/embed/OFOINanH8GI" title="Embedded Video" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                    <h5 className="text-center text-secondary ">Amanot Travels International EID Greetings 2024</h5>
                  </div>
                </article>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <article className=" mb-30 rounded shadow gallery_container h-100">
                  <div className="video">
                    <iframe className="img-thumbnail rounded lazyload" src="https://www.youtube.com/embed/OFOINanH8GI" title="Embedded Video" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                    <h5 className="text-center text-secondary ">Amanot Travels International EID Greetings 2024</h5>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Video
