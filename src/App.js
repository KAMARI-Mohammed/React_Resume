import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import data from './data/data';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div>
      <Header name={data.name} title={data.title} profileImage="/img/profil.jpeg" contact={data.contact} />
      <div className="skills">
      <Skills skills={data.skills} /> 
      </div>
      </div>
      <div className="right-column">
        <Education education={data.education} />
        <Experience experience={data.experience} />
       
      </div>
    </div>
  ); 
};

export default App;
