// src/components/ContactPage.js
import React from 'react';
import './contactPage.css'
import teamData from '../../data/staffData';
import lead from './../../data/teamMembers/akshayan.png'


const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="title">Meet the Masters of Grace</h1>
      <p className="description">
        Welcome to the heart of Grace Construction's triumph! Here, we invite you to discover the architects of our success - from the strategic guidance of our visionary Managing Director to the collective brilliance of our talented team members. Each individual brings their unique expertise to the table, propelling our projects to new heights and shaping the landscape of construction excellence.
      </p>
      <div className='container'>
        <div className="team-member">
          <img src={lead} alt='Team Lead' className="member-image" />
          <div className="member-info">
            <h3>Muhunthan Akshayan</h3>
            <p className='img-title'>King</p>
            <p className='img-description'>He is the king Maker</p>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <h2>15+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="stat">
            <h2>27+</h2>
            <p>Skilled Staffs</p>
          </div>
          <div className="stat">
            <h2>300+</h2>
            <p>Working Employees</p>
          </div>
        </div>
      </div>
      
      <div className="team">
        {teamData.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            title={member.title}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

const TeamMember = ({ name, title, description, image }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="member-image" />
      <div className="member-info">
        <h3>{name}</h3>
        <p className='img-title'>{title}</p>
        <p className='img-description'>{description}</p>
      </div>
    </div>
  );
};

export default ContactPage;
