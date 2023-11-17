import React from 'react';

const Experience = ({ experience }) => (
  <div>
    <h3>Experience</h3>
    {experience.map((exp, index) => (
      <div key={index}>
        <h4>{exp.title}</h4>
        <p>{exp.company}</p>
        <p>{exp.year}</p>
        <p>{exp.mission}</p>
      </div>
    ))}
  </div>
);

export default Experience;
