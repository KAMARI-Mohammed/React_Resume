import React from 'react';

const Contact = ({ contact }) => (
  <div>
    <p>Email: {contact.email}</p>
    <p>Phone: {contact.phone}</p>
    <p>LinkedIn: {contact.linkedin}</p>
    <p>GitHub: {contact.github}</p>
    <p>Website: {contact.website}</p>
  </div>
);

export default Contact;
