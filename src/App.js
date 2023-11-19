import React, { useState } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import dataen  from './data/data.en';
import './App.css';
import datafr from './data/data';

const App = () => {
  const [language, setLanguage] = useState('en'); 
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  };
  const data = language === 'en' ? dataen : datafr;

  return (
    <div className="container">
      <div className="contact-info">
      <div><button className="language-button" onClick={toggleLanguage}>Change Language</button></div>

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
