import React from 'react'

const Management = () => {
    return (
        <>
            <div className="page-header ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Management</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a >About Us</a></li>
                                    <li className="breadcrumb-item active" aria-current="page"> Management </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            <section className="how-it-work-section section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-12 ">
                            <div className="site_team__box text-center">
                                <div className="site_team__thumb">
                                    <img src="https://mgapi.monirgroup.net/storage/management/lg1696312916.jpg" alt="" />
                                </div>
                                <div className="site_team__content">
                                    <h2> Aminul Islam asif </h2>
                                    <span> (General Manager) </span>
                                    <div className="site_team__social">
                                        <a href="#" data-toggle="modal" data-target="#managnmentMemberModal"> <i className="fa fa-eye " /> </a>
                                        <a href="#" data-toggle="modal" data-target="#managnmentInfoModal"> <i className="fa fa-commenting" ></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="site_team__box text-center">
                                <div className="site_team__thumb">
                                    <img src="assets/img/team/MD.-GHULAM-MARTOZA-sohel.png.png" alt="" />
                                </div>
                                <div className="site_team__content">
                                    <h2> Md. Ghulam Martoza </h2>
                                    <span> (Chief Operating Officer (COO)) </span>
                                    <div className="site_team__social">
                                        <a href="#" data-toggle="modal" data-target="#managnmentMemberModal"> <i className="fa fa-eye " /> </a>
                                        <a href="#" data-toggle="modal" data-target="#managnmentInfoModal"> <i className="fa fa-commenting" ></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 ">
                            <div className="site_team__box text-center">
                                <div className="site_team__thumb">
                                    <img src="https://mgapi.monirgroup.net/storage/management/lg1696311730.jpg" alt="" />
                                </div>
                                <div className="site_team__content">
                                    <h2> Konak Chandra Debnath </h2>
                                    <span>  (General Manager) </span>
                                    <div className="site_team__social">
                                        <a href="#" data-toggle="modal" data-target="#managnmentMemberModal"> <i className="fa fa-eye " /> </a>
                                        <a href="#" data-toggle="modal" data-target="#managnmentInfoModal"> <i className="fa fa-commenting" ></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="site_team__box text-center">
                                <div className="site_team__thumb">
                                    <img src="https://mgapi.monirgroup.net/storage/management/lg1696309356.jpg" alt="" />
                                </div>
                                <div className="site_team__content">
                                    <h2> Md Hisham </h2>
                                    <span> (Chief Operating Officer (COO)) </span>
                                    <div className="site_team__social">
                                        <a href="#" data-toggle="modal" data-target="#managnmentMemberModal"> <i className="fa fa-eye " /> </a>
                                        <a href="#" data-toggle="modal" data-target="#managnmentInfoModal"> <i className="fa fa-commenting" ></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Modal  */}
            <div className="modal fade" id="managnmentMemberModal" tabIndex={-1} role="dialog" aria-labelledby="managnmentMemberModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="managnmentMemberModalLabel">Visiting Card</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src="assets/img/monir-group/visiting-card.png" alt="team-image" className="img-fluid mb-3" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" name="submit" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="managnmentInfoModal" tabIndex={-1} role="dialog" aria-labelledby="managnmentInfoModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="managnmentInfoModalLabel">Management Message</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>Aminul Islam asif (General Manager)</h5>
                            <p>Aminul Islam Asif has joined in Monir Group as General Manager in Faijan Rent A Car from September 2021. He brings more than 15 years of corporate experience in both local and govt market environments including 5 years in service management. Prior joining to Monir group he was the Manager of Amanot Travels. He is one of the leading man in Monir Group. His vision is practical and speaks value for the stable long run of the group.

                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" name="submit" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Management
