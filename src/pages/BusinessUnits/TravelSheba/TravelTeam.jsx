import React from 'react';
import { Link } from "react-router-dom";
const teamMembers = [
  {
    id: 1,
    name: 'Salma Akter',
    position: 'Front-End Developer, IT Sheba Limited',
    imageUrl: 'assets/img/team/salma-Akter.jpg'
  },
  {
    id: 2,
    name: 'Md. Sabbir Hossain',
    position: 'Senior Software Engineer, IT Sheba Ltd',
    imageUrl: 'assets/img/team/sabbir.jpeg'
  },
  {
    id: 3,
    name: 'Sumiya Sarmin',
    position: 'Project Coordinator, IT Sheba Limited',
    imageUrl: 'assets/img/team/sumaiya.jpg'
  },
  {
    id: 4,
    name: 'Abdur Rahman Rony',
    position: 'Manager, Travel Sheba Limited',
    imageUrl: 'assets/img/team/rony.jpeg'
  },
  {
    id: 5,
    name: 'MD. Barkat Ullah',
    position: 'Graphic Designer, IT Sheba 24 Dot Com',
    imageUrl: 'assets/img/team/MD.-BARKAT-ULLAH.png'
  },
];

const TravelTeam = () => {
  return (
    <section className="team section-space">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title pb-0">
              <h2>Team Member</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {teamMembers.map(member => (
            <div key={member.id} className="col-xl-3 col-md-6 com-sm-12">
              <div className="team__member-item">
                <div className="team__member-item-image">
                  <img src={member.imageUrl} alt="team-image" className="img-fluid" />
                </div>
                <div className="team__member-item-content">
                  <span>{member.name}</span>
                  <h5>{member.position}</h5>
                  <ul>
                    <li><Link data-toggle="modal" data-target="#teamMemberModal"><i className="fa fa-eye fa-2x" /></Link></li>
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

export default TravelTeam;
