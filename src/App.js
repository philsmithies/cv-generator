import React, { useState } from 'react';
import PersonalDetails from './Components/PersonalDetails';
import PersonalInput from './Components/PersonalInput';
import Bio from './Components/Bio';
import WorkExperience from './Components/WorkExperience'
import './App.css';

const App = () => {

  const [state, setState]  = useState({
    fullName: '',
    role: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    addWorkExperience: false
  })

  const handleChange = (e) => {
   const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
    console.log(state.fullName)
  }

  const addWork = (e) => {
    setState({
      ...state,
      addWorkExperience: true
    })
    console.log(state.addWorkExperience)
  }


  return (
    <div className="App">
      <h1>CV Generator</h1>
      <PersonalInput name="fullName" value="John Doe" onChange={handleChange}/>
      <PersonalInput name="role" value="Software Developer" onChange={handleChange}/>
      <PersonalInput name="email" value="john@doe.org" onChange={handleChange}/>
      <PersonalInput name="phone" placeholder="phone" onChange={handleChange}/>
      <PersonalInput name="location" value="London,uk" onChange={handleChange}/>
      <Bio name="bio" value="Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi." onChange={handleChange}/>
       {/* 
      <h1>Personal Details:</h1>
      <PersonalDetails 
        fullName={state.fullName}
        role={state.role}
        email={state.email}
        location={state.location}
        bio={state.bio}
      />
      <h1>Work Experience</h1>
      {state.addWorkExperience === false ? <button onClick={addWork}>Add Work</button> : ""} 

      <WorkExperience /> */}
    </div>
  );
}

export default App;
