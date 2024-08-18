import React from 'react';
import { Link } from "react-router-dom";
const managementTeam = [
    {
        id: 1,
        name: 'Md. Ghulam Martoza',
        position: 'Chief Operating Officer (COO), Travel Sheba Limited',
        imageUrl: 'assets/img/team/MD.-GHULAM-MARTOZA-sohel.png.png'
    },
];

const HostingManagment = () => {
    return (
        <section className="managment-team section-space">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title pb-0">
                            <h2>Management Team</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {managementTeam.map(member => (
                        <div key={member.id} className="col-xl-3 col-md-6 com-sm-12">
                            <div className="team__member-item">
                                <div className="team__member-item-image">
                                    <img src={member.imageUrl} alt="team-image" className="img-fluid" />
                                </div>
                                <div className="team__member-item-content">
                                    <span>{member.name}</span>
                                    <h5>{member.position}</h5>
                                    <ul>
                                        <li><a data-toggle="modal" data-target="#teamMemberModal"><i className="fa fa-eye fa-2x" /></a></li>
                                        <li><Link href data-toggle="modal" data-target="#teamMemberIdcard"><img src="assets/img/monir-group/id-card.png" width={20} alt="ID card icon" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HostingManagment;
