
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>

            <section className="about-page-shortcode section-padding bg-gray ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="single-image">
                                <img src="https://mgapi.monirgroup.net/storage/md_profile/lg11696335919.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-content mt-lg-5">
                                <h2>Authorized from many national and international organizagation</h2>
                                <p>I am Md Monirul Islam as a Founder of Monir Group have been in the industry
                                    since 2013 and have been continually recognized and introduced innovative ideas. </p>
                            </div>
                            <div className=" mb-40 mt-5">
                                <span><img src="https://monirgroup.net/assets/img/scholarship/s-1.png" alt="img" /></span>
                                <span><img src="https://monirgroup.net/assets/img/scholarship/s-2.png" alt="img" /></span>
                                <span><img src="https://monirgroup.net/assets/img/scholarship/s-3.png" alt="img" /></span>
                                <span><img src="https://monirgroup.net/assets/img/scholarship/s-4.png" alt="img" /></span>
                                <span><img src="https://monirgroup.net/assets/img/scholarship/s-5.png" alt="img" /></span>
                            </div>
                            <div className="mt-5 mb-5">
                                <h5>Organized on : 05 April 2022</h5>
                                <Link to="founder-legacy" className="btn btn-default btn-sm">Contact Us <i className="fa fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;


