import React, { useState } from 'react';
import PersonalDetails from './Components/PersonalDetails';
import WorkExperience from './Components/WorkExperience'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <h1>Personal Details:</h1>
      <PersonalDetails />
      <h1>Work Experience</h1>
      <WorkExperience />
    </div>
  );
}

export default App;
