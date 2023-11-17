import React from 'react';

const Education = ({ education }) => (
  <div>
    <h3>Education</h3>
    {education.map((edu, index) => (
      <div key={index}>
        <p>{edu.degree}</p>
        <p>{edu.school}</p>
        <p>{edu.year}</p>
      </div>
    ))}
  </div>
);

export default Education;
