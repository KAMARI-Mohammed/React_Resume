import React from 'react';


const Header = ({ name, title, profileImage, contact }) => (
    <div className="profile">
      <img src={profileImage} alt="Profile" />
      <h1>{name}</h1>
      <h2>{title}</h2>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>LinkedIn: {contact.linkedin}</p>
        <p>GitHub: {contact.github}</p>
        <p>Website: {contact.website}</p>
      
    </div>
  );

export default Header;
